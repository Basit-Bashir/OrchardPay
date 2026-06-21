import { prisma } from "../src/lib/prisma";

async function main() {
  const users = await prisma.user.findMany();
  console.log("=== USERS ===");
  console.log(users);

  const growers = await prisma.grower.findMany({ take: 5 });
  console.log("\n=== GROWERS ===");
  console.log(growers.map(g => ({ id: g.id, name: g.name, mobile: g.mobile })));

  const sellers = await prisma.seller.findMany({ take: 5 });
  console.log("\n=== SELLERS ===");
  console.log(sellers.map(s => ({ id: s.id, name: s.name, mobile: s.mobile })));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
