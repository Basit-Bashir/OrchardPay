import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const mobile = "+919999900001";

  await prisma.buyerFirm.deleteMany({ where: { mobile } });

  const firm = await prisma.buyerFirm.create({
    data: {
      uniqueId: "HORT-BUYER-00001",
      firmName: "Valley Fresh Traders",
      ownerName: "Asha Patil",
      mobile,
      subscriptionPlan: "premium",
      users: {
        create: { mobile, name: "Asha Patil", role: "buyer" },
      },
    },
  });

  const growersData = [
    { name: "Ramesh Orchard", mobile: "+919812300001", address: "Sangli" },
    { name: "Green Hills Farm", mobile: "+919812300002", address: "Ratnagiri" },
    { name: "Sunrise Growers", mobile: "+919812300003", address: "Nashik" },
  ];

  const growers = [];
  for (const g of growersData) {
    growers.push(
      await prisma.grower.create({ data: { ...g, buyerFirmId: firm.id } }),
    );
  }

  const fruits = ["Alphonso Mango", "Apple", "Pomegranate"];
  for (let i = 0; i < 8; i++) {
    const grower = growers[i % growers.length];
    const quantity = 50 + i * 12;
    const rate = 40 + i * 5;
    await prisma.transaction.create({
      data: {
        growerId: grower.id,
        buyerFirmId: firm.id,
        fruitType: fruits[i % fruits.length],
        quantity,
        rate,
        totalAmount: quantity * rate,
        notified: true,
        receivedAt: new Date(Date.now() - i * 86400000),
      },
    });
  }

  console.log(`Seeded firm ${firm.uniqueId} (login mobile: ${mobile})`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
