
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BuyerFirm
 * 
 */
export type BuyerFirm = $Result.DefaultSelection<Prisma.$BuyerFirmPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Grower
 * 
 */
export type Grower = $Result.DefaultSelection<Prisma.$GrowerPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Otp
 * 
 */
export type Otp = $Result.DefaultSelection<Prisma.$OtpPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Agreement
 * 
 */
export type Agreement = $Result.DefaultSelection<Prisma.$AgreementPayload>
/**
 * Model DraftTransaction
 * 
 */
export type DraftTransaction = $Result.DefaultSelection<Prisma.$DraftTransactionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BuyerFirms
 * const buyerFirms = await prisma.buyerFirm.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BuyerFirms
   * const buyerFirms = await prisma.buyerFirm.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.buyerFirm`: Exposes CRUD operations for the **BuyerFirm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BuyerFirms
    * const buyerFirms = await prisma.buyerFirm.findMany()
    * ```
    */
  get buyerFirm(): Prisma.BuyerFirmDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grower`: Exposes CRUD operations for the **Grower** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Growers
    * const growers = await prisma.grower.findMany()
    * ```
    */
  get grower(): Prisma.GrowerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.OtpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agreement`: Exposes CRUD operations for the **Agreement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agreements
    * const agreements = await prisma.agreement.findMany()
    * ```
    */
  get agreement(): Prisma.AgreementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.draftTransaction`: Exposes CRUD operations for the **DraftTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DraftTransactions
    * const draftTransactions = await prisma.draftTransaction.findMany()
    * ```
    */
  get draftTransaction(): Prisma.DraftTransactionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BuyerFirm: 'BuyerFirm',
    User: 'User',
    Grower: 'Grower',
    Transaction: 'Transaction',
    Payment: 'Payment',
    Otp: 'Otp',
    Notification: 'Notification',
    Agreement: 'Agreement',
    DraftTransaction: 'DraftTransaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "buyerFirm" | "user" | "grower" | "transaction" | "payment" | "otp" | "notification" | "agreement" | "draftTransaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BuyerFirm: {
        payload: Prisma.$BuyerFirmPayload<ExtArgs>
        fields: Prisma.BuyerFirmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuyerFirmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerFirmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuyerFirmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerFirmPayload>
          }
          findFirst: {
            args: Prisma.BuyerFirmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerFirmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuyerFirmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerFirmPayload>
          }
          findMany: {
            args: Prisma.BuyerFirmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerFirmPayload>[]
          }
          create: {
            args: Prisma.BuyerFirmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerFirmPayload>
          }
          createMany: {
            args: Prisma.BuyerFirmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BuyerFirmCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerFirmPayload>[]
          }
          delete: {
            args: Prisma.BuyerFirmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerFirmPayload>
          }
          update: {
            args: Prisma.BuyerFirmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerFirmPayload>
          }
          deleteMany: {
            args: Prisma.BuyerFirmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuyerFirmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BuyerFirmUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerFirmPayload>[]
          }
          upsert: {
            args: Prisma.BuyerFirmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerFirmPayload>
          }
          aggregate: {
            args: Prisma.BuyerFirmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuyerFirm>
          }
          groupBy: {
            args: Prisma.BuyerFirmGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuyerFirmGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuyerFirmCountArgs<ExtArgs>
            result: $Utils.Optional<BuyerFirmCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Grower: {
        payload: Prisma.$GrowerPayload<ExtArgs>
        fields: Prisma.GrowerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrowerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrowerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowerPayload>
          }
          findFirst: {
            args: Prisma.GrowerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrowerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowerPayload>
          }
          findMany: {
            args: Prisma.GrowerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowerPayload>[]
          }
          create: {
            args: Prisma.GrowerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowerPayload>
          }
          createMany: {
            args: Prisma.GrowerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GrowerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowerPayload>[]
          }
          delete: {
            args: Prisma.GrowerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowerPayload>
          }
          update: {
            args: Prisma.GrowerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowerPayload>
          }
          deleteMany: {
            args: Prisma.GrowerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrowerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GrowerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowerPayload>[]
          }
          upsert: {
            args: Prisma.GrowerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowerPayload>
          }
          aggregate: {
            args: Prisma.GrowerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrower>
          }
          groupBy: {
            args: Prisma.GrowerGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrowerGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrowerCountArgs<ExtArgs>
            result: $Utils.Optional<GrowerCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Otp: {
        payload: Prisma.$OtpPayload<ExtArgs>
        fields: Prisma.OtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Agreement: {
        payload: Prisma.$AgreementPayload<ExtArgs>
        fields: Prisma.AgreementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgreementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgreementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementPayload>
          }
          findFirst: {
            args: Prisma.AgreementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgreementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementPayload>
          }
          findMany: {
            args: Prisma.AgreementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementPayload>[]
          }
          create: {
            args: Prisma.AgreementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementPayload>
          }
          createMany: {
            args: Prisma.AgreementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgreementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementPayload>[]
          }
          delete: {
            args: Prisma.AgreementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementPayload>
          }
          update: {
            args: Prisma.AgreementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementPayload>
          }
          deleteMany: {
            args: Prisma.AgreementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgreementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgreementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementPayload>[]
          }
          upsert: {
            args: Prisma.AgreementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementPayload>
          }
          aggregate: {
            args: Prisma.AgreementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgreement>
          }
          groupBy: {
            args: Prisma.AgreementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgreementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgreementCountArgs<ExtArgs>
            result: $Utils.Optional<AgreementCountAggregateOutputType> | number
          }
        }
      }
      DraftTransaction: {
        payload: Prisma.$DraftTransactionPayload<ExtArgs>
        fields: Prisma.DraftTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DraftTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DraftTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftTransactionPayload>
          }
          findFirst: {
            args: Prisma.DraftTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DraftTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftTransactionPayload>
          }
          findMany: {
            args: Prisma.DraftTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftTransactionPayload>[]
          }
          create: {
            args: Prisma.DraftTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftTransactionPayload>
          }
          createMany: {
            args: Prisma.DraftTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DraftTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftTransactionPayload>[]
          }
          delete: {
            args: Prisma.DraftTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftTransactionPayload>
          }
          update: {
            args: Prisma.DraftTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftTransactionPayload>
          }
          deleteMany: {
            args: Prisma.DraftTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DraftTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DraftTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftTransactionPayload>[]
          }
          upsert: {
            args: Prisma.DraftTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftTransactionPayload>
          }
          aggregate: {
            args: Prisma.DraftTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDraftTransaction>
          }
          groupBy: {
            args: Prisma.DraftTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DraftTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DraftTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<DraftTransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    buyerFirm?: BuyerFirmOmit
    user?: UserOmit
    grower?: GrowerOmit
    transaction?: TransactionOmit
    payment?: PaymentOmit
    otp?: OtpOmit
    notification?: NotificationOmit
    agreement?: AgreementOmit
    draftTransaction?: DraftTransactionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BuyerFirmCountOutputType
   */

  export type BuyerFirmCountOutputType = {
    users: number
    growers: number
    transactions: number
    payments: number
    draftTransactions: number
  }

  export type BuyerFirmCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | BuyerFirmCountOutputTypeCountUsersArgs
    growers?: boolean | BuyerFirmCountOutputTypeCountGrowersArgs
    transactions?: boolean | BuyerFirmCountOutputTypeCountTransactionsArgs
    payments?: boolean | BuyerFirmCountOutputTypeCountPaymentsArgs
    draftTransactions?: boolean | BuyerFirmCountOutputTypeCountDraftTransactionsArgs
  }

  // Custom InputTypes
  /**
   * BuyerFirmCountOutputType without action
   */
  export type BuyerFirmCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerFirmCountOutputType
     */
    select?: BuyerFirmCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BuyerFirmCountOutputType without action
   */
  export type BuyerFirmCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * BuyerFirmCountOutputType without action
   */
  export type BuyerFirmCountOutputTypeCountGrowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrowerWhereInput
  }

  /**
   * BuyerFirmCountOutputType without action
   */
  export type BuyerFirmCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * BuyerFirmCountOutputType without action
   */
  export type BuyerFirmCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * BuyerFirmCountOutputType without action
   */
  export type BuyerFirmCountOutputTypeCountDraftTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DraftTransactionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    draftTransactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draftTransactions?: boolean | UserCountOutputTypeCountDraftTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDraftTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DraftTransactionWhereInput
  }


  /**
   * Count Type GrowerCountOutputType
   */

  export type GrowerCountOutputType = {
    transactions: number
    payments: number
    notifications: number
    agreements: number
    draftTransactions: number
  }

  export type GrowerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | GrowerCountOutputTypeCountTransactionsArgs
    payments?: boolean | GrowerCountOutputTypeCountPaymentsArgs
    notifications?: boolean | GrowerCountOutputTypeCountNotificationsArgs
    agreements?: boolean | GrowerCountOutputTypeCountAgreementsArgs
    draftTransactions?: boolean | GrowerCountOutputTypeCountDraftTransactionsArgs
  }

  // Custom InputTypes
  /**
   * GrowerCountOutputType without action
   */
  export type GrowerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowerCountOutputType
     */
    select?: GrowerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GrowerCountOutputType without action
   */
  export type GrowerCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * GrowerCountOutputType without action
   */
  export type GrowerCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * GrowerCountOutputType without action
   */
  export type GrowerCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * GrowerCountOutputType without action
   */
  export type GrowerCountOutputTypeCountAgreementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgreementWhereInput
  }

  /**
   * GrowerCountOutputType without action
   */
  export type GrowerCountOutputTypeCountDraftTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DraftTransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BuyerFirm
   */

  export type AggregateBuyerFirm = {
    _count: BuyerFirmCountAggregateOutputType | null
    _min: BuyerFirmMinAggregateOutputType | null
    _max: BuyerFirmMaxAggregateOutputType | null
  }

  export type BuyerFirmMinAggregateOutputType = {
    id: string | null
    uniqueId: string | null
    firmName: string | null
    ownerName: string | null
    mobile: string | null
    subscriptionPlan: string | null
    subscriptionExpiry: Date | null
    createdAt: Date | null
    logoUrl: string | null
  }

  export type BuyerFirmMaxAggregateOutputType = {
    id: string | null
    uniqueId: string | null
    firmName: string | null
    ownerName: string | null
    mobile: string | null
    subscriptionPlan: string | null
    subscriptionExpiry: Date | null
    createdAt: Date | null
    logoUrl: string | null
  }

  export type BuyerFirmCountAggregateOutputType = {
    id: number
    uniqueId: number
    firmName: number
    ownerName: number
    mobile: number
    subscriptionPlan: number
    subscriptionExpiry: number
    createdAt: number
    logoUrl: number
    _all: number
  }


  export type BuyerFirmMinAggregateInputType = {
    id?: true
    uniqueId?: true
    firmName?: true
    ownerName?: true
    mobile?: true
    subscriptionPlan?: true
    subscriptionExpiry?: true
    createdAt?: true
    logoUrl?: true
  }

  export type BuyerFirmMaxAggregateInputType = {
    id?: true
    uniqueId?: true
    firmName?: true
    ownerName?: true
    mobile?: true
    subscriptionPlan?: true
    subscriptionExpiry?: true
    createdAt?: true
    logoUrl?: true
  }

  export type BuyerFirmCountAggregateInputType = {
    id?: true
    uniqueId?: true
    firmName?: true
    ownerName?: true
    mobile?: true
    subscriptionPlan?: true
    subscriptionExpiry?: true
    createdAt?: true
    logoUrl?: true
    _all?: true
  }

  export type BuyerFirmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuyerFirm to aggregate.
     */
    where?: BuyerFirmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuyerFirms to fetch.
     */
    orderBy?: BuyerFirmOrderByWithRelationInput | BuyerFirmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuyerFirmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuyerFirms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuyerFirms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BuyerFirms
    **/
    _count?: true | BuyerFirmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuyerFirmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuyerFirmMaxAggregateInputType
  }

  export type GetBuyerFirmAggregateType<T extends BuyerFirmAggregateArgs> = {
        [P in keyof T & keyof AggregateBuyerFirm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuyerFirm[P]>
      : GetScalarType<T[P], AggregateBuyerFirm[P]>
  }




  export type BuyerFirmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuyerFirmWhereInput
    orderBy?: BuyerFirmOrderByWithAggregationInput | BuyerFirmOrderByWithAggregationInput[]
    by: BuyerFirmScalarFieldEnum[] | BuyerFirmScalarFieldEnum
    having?: BuyerFirmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuyerFirmCountAggregateInputType | true
    _min?: BuyerFirmMinAggregateInputType
    _max?: BuyerFirmMaxAggregateInputType
  }

  export type BuyerFirmGroupByOutputType = {
    id: string
    uniqueId: string
    firmName: string
    ownerName: string
    mobile: string
    subscriptionPlan: string
    subscriptionExpiry: Date | null
    createdAt: Date
    logoUrl: string | null
    _count: BuyerFirmCountAggregateOutputType | null
    _min: BuyerFirmMinAggregateOutputType | null
    _max: BuyerFirmMaxAggregateOutputType | null
  }

  type GetBuyerFirmGroupByPayload<T extends BuyerFirmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuyerFirmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuyerFirmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuyerFirmGroupByOutputType[P]>
            : GetScalarType<T[P], BuyerFirmGroupByOutputType[P]>
        }
      >
    >


  export type BuyerFirmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    firmName?: boolean
    ownerName?: boolean
    mobile?: boolean
    subscriptionPlan?: boolean
    subscriptionExpiry?: boolean
    createdAt?: boolean
    logoUrl?: boolean
    users?: boolean | BuyerFirm$usersArgs<ExtArgs>
    growers?: boolean | BuyerFirm$growersArgs<ExtArgs>
    transactions?: boolean | BuyerFirm$transactionsArgs<ExtArgs>
    payments?: boolean | BuyerFirm$paymentsArgs<ExtArgs>
    draftTransactions?: boolean | BuyerFirm$draftTransactionsArgs<ExtArgs>
    _count?: boolean | BuyerFirmCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buyerFirm"]>

  export type BuyerFirmSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    firmName?: boolean
    ownerName?: boolean
    mobile?: boolean
    subscriptionPlan?: boolean
    subscriptionExpiry?: boolean
    createdAt?: boolean
    logoUrl?: boolean
  }, ExtArgs["result"]["buyerFirm"]>

  export type BuyerFirmSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    firmName?: boolean
    ownerName?: boolean
    mobile?: boolean
    subscriptionPlan?: boolean
    subscriptionExpiry?: boolean
    createdAt?: boolean
    logoUrl?: boolean
  }, ExtArgs["result"]["buyerFirm"]>

  export type BuyerFirmSelectScalar = {
    id?: boolean
    uniqueId?: boolean
    firmName?: boolean
    ownerName?: boolean
    mobile?: boolean
    subscriptionPlan?: boolean
    subscriptionExpiry?: boolean
    createdAt?: boolean
    logoUrl?: boolean
  }

  export type BuyerFirmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uniqueId" | "firmName" | "ownerName" | "mobile" | "subscriptionPlan" | "subscriptionExpiry" | "createdAt" | "logoUrl", ExtArgs["result"]["buyerFirm"]>
  export type BuyerFirmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | BuyerFirm$usersArgs<ExtArgs>
    growers?: boolean | BuyerFirm$growersArgs<ExtArgs>
    transactions?: boolean | BuyerFirm$transactionsArgs<ExtArgs>
    payments?: boolean | BuyerFirm$paymentsArgs<ExtArgs>
    draftTransactions?: boolean | BuyerFirm$draftTransactionsArgs<ExtArgs>
    _count?: boolean | BuyerFirmCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BuyerFirmIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BuyerFirmIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BuyerFirmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BuyerFirm"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      growers: Prisma.$GrowerPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      draftTransactions: Prisma.$DraftTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      uniqueId: string
      firmName: string
      ownerName: string
      mobile: string
      subscriptionPlan: string
      subscriptionExpiry: Date | null
      createdAt: Date
      logoUrl: string | null
    }, ExtArgs["result"]["buyerFirm"]>
    composites: {}
  }

  type BuyerFirmGetPayload<S extends boolean | null | undefined | BuyerFirmDefaultArgs> = $Result.GetResult<Prisma.$BuyerFirmPayload, S>

  type BuyerFirmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BuyerFirmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuyerFirmCountAggregateInputType | true
    }

  export interface BuyerFirmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BuyerFirm'], meta: { name: 'BuyerFirm' } }
    /**
     * Find zero or one BuyerFirm that matches the filter.
     * @param {BuyerFirmFindUniqueArgs} args - Arguments to find a BuyerFirm
     * @example
     * // Get one BuyerFirm
     * const buyerFirm = await prisma.buyerFirm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuyerFirmFindUniqueArgs>(args: SelectSubset<T, BuyerFirmFindUniqueArgs<ExtArgs>>): Prisma__BuyerFirmClient<$Result.GetResult<Prisma.$BuyerFirmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BuyerFirm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BuyerFirmFindUniqueOrThrowArgs} args - Arguments to find a BuyerFirm
     * @example
     * // Get one BuyerFirm
     * const buyerFirm = await prisma.buyerFirm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuyerFirmFindUniqueOrThrowArgs>(args: SelectSubset<T, BuyerFirmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuyerFirmClient<$Result.GetResult<Prisma.$BuyerFirmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BuyerFirm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerFirmFindFirstArgs} args - Arguments to find a BuyerFirm
     * @example
     * // Get one BuyerFirm
     * const buyerFirm = await prisma.buyerFirm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuyerFirmFindFirstArgs>(args?: SelectSubset<T, BuyerFirmFindFirstArgs<ExtArgs>>): Prisma__BuyerFirmClient<$Result.GetResult<Prisma.$BuyerFirmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BuyerFirm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerFirmFindFirstOrThrowArgs} args - Arguments to find a BuyerFirm
     * @example
     * // Get one BuyerFirm
     * const buyerFirm = await prisma.buyerFirm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuyerFirmFindFirstOrThrowArgs>(args?: SelectSubset<T, BuyerFirmFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuyerFirmClient<$Result.GetResult<Prisma.$BuyerFirmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BuyerFirms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerFirmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BuyerFirms
     * const buyerFirms = await prisma.buyerFirm.findMany()
     * 
     * // Get first 10 BuyerFirms
     * const buyerFirms = await prisma.buyerFirm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buyerFirmWithIdOnly = await prisma.buyerFirm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BuyerFirmFindManyArgs>(args?: SelectSubset<T, BuyerFirmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuyerFirmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BuyerFirm.
     * @param {BuyerFirmCreateArgs} args - Arguments to create a BuyerFirm.
     * @example
     * // Create one BuyerFirm
     * const BuyerFirm = await prisma.buyerFirm.create({
     *   data: {
     *     // ... data to create a BuyerFirm
     *   }
     * })
     * 
     */
    create<T extends BuyerFirmCreateArgs>(args: SelectSubset<T, BuyerFirmCreateArgs<ExtArgs>>): Prisma__BuyerFirmClient<$Result.GetResult<Prisma.$BuyerFirmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BuyerFirms.
     * @param {BuyerFirmCreateManyArgs} args - Arguments to create many BuyerFirms.
     * @example
     * // Create many BuyerFirms
     * const buyerFirm = await prisma.buyerFirm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuyerFirmCreateManyArgs>(args?: SelectSubset<T, BuyerFirmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BuyerFirms and returns the data saved in the database.
     * @param {BuyerFirmCreateManyAndReturnArgs} args - Arguments to create many BuyerFirms.
     * @example
     * // Create many BuyerFirms
     * const buyerFirm = await prisma.buyerFirm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BuyerFirms and only return the `id`
     * const buyerFirmWithIdOnly = await prisma.buyerFirm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BuyerFirmCreateManyAndReturnArgs>(args?: SelectSubset<T, BuyerFirmCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuyerFirmPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BuyerFirm.
     * @param {BuyerFirmDeleteArgs} args - Arguments to delete one BuyerFirm.
     * @example
     * // Delete one BuyerFirm
     * const BuyerFirm = await prisma.buyerFirm.delete({
     *   where: {
     *     // ... filter to delete one BuyerFirm
     *   }
     * })
     * 
     */
    delete<T extends BuyerFirmDeleteArgs>(args: SelectSubset<T, BuyerFirmDeleteArgs<ExtArgs>>): Prisma__BuyerFirmClient<$Result.GetResult<Prisma.$BuyerFirmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BuyerFirm.
     * @param {BuyerFirmUpdateArgs} args - Arguments to update one BuyerFirm.
     * @example
     * // Update one BuyerFirm
     * const buyerFirm = await prisma.buyerFirm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuyerFirmUpdateArgs>(args: SelectSubset<T, BuyerFirmUpdateArgs<ExtArgs>>): Prisma__BuyerFirmClient<$Result.GetResult<Prisma.$BuyerFirmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BuyerFirms.
     * @param {BuyerFirmDeleteManyArgs} args - Arguments to filter BuyerFirms to delete.
     * @example
     * // Delete a few BuyerFirms
     * const { count } = await prisma.buyerFirm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuyerFirmDeleteManyArgs>(args?: SelectSubset<T, BuyerFirmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BuyerFirms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerFirmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BuyerFirms
     * const buyerFirm = await prisma.buyerFirm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuyerFirmUpdateManyArgs>(args: SelectSubset<T, BuyerFirmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BuyerFirms and returns the data updated in the database.
     * @param {BuyerFirmUpdateManyAndReturnArgs} args - Arguments to update many BuyerFirms.
     * @example
     * // Update many BuyerFirms
     * const buyerFirm = await prisma.buyerFirm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BuyerFirms and only return the `id`
     * const buyerFirmWithIdOnly = await prisma.buyerFirm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BuyerFirmUpdateManyAndReturnArgs>(args: SelectSubset<T, BuyerFirmUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuyerFirmPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BuyerFirm.
     * @param {BuyerFirmUpsertArgs} args - Arguments to update or create a BuyerFirm.
     * @example
     * // Update or create a BuyerFirm
     * const buyerFirm = await prisma.buyerFirm.upsert({
     *   create: {
     *     // ... data to create a BuyerFirm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BuyerFirm we want to update
     *   }
     * })
     */
    upsert<T extends BuyerFirmUpsertArgs>(args: SelectSubset<T, BuyerFirmUpsertArgs<ExtArgs>>): Prisma__BuyerFirmClient<$Result.GetResult<Prisma.$BuyerFirmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BuyerFirms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerFirmCountArgs} args - Arguments to filter BuyerFirms to count.
     * @example
     * // Count the number of BuyerFirms
     * const count = await prisma.buyerFirm.count({
     *   where: {
     *     // ... the filter for the BuyerFirms we want to count
     *   }
     * })
    **/
    count<T extends BuyerFirmCountArgs>(
      args?: Subset<T, BuyerFirmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuyerFirmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BuyerFirm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerFirmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BuyerFirmAggregateArgs>(args: Subset<T, BuyerFirmAggregateArgs>): Prisma.PrismaPromise<GetBuyerFirmAggregateType<T>>

    /**
     * Group by BuyerFirm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerFirmGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BuyerFirmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuyerFirmGroupByArgs['orderBy'] }
        : { orderBy?: BuyerFirmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BuyerFirmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuyerFirmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BuyerFirm model
   */
  readonly fields: BuyerFirmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BuyerFirm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuyerFirmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends BuyerFirm$usersArgs<ExtArgs> = {}>(args?: Subset<T, BuyerFirm$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    growers<T extends BuyerFirm$growersArgs<ExtArgs> = {}>(args?: Subset<T, BuyerFirm$growersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrowerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends BuyerFirm$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, BuyerFirm$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends BuyerFirm$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, BuyerFirm$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    draftTransactions<T extends BuyerFirm$draftTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, BuyerFirm$draftTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BuyerFirm model
   */
  interface BuyerFirmFieldRefs {
    readonly id: FieldRef<"BuyerFirm", 'String'>
    readonly uniqueId: FieldRef<"BuyerFirm", 'String'>
    readonly firmName: FieldRef<"BuyerFirm", 'String'>
    readonly ownerName: FieldRef<"BuyerFirm", 'String'>
    readonly mobile: FieldRef<"BuyerFirm", 'String'>
    readonly subscriptionPlan: FieldRef<"BuyerFirm", 'String'>
    readonly subscriptionExpiry: FieldRef<"BuyerFirm", 'DateTime'>
    readonly createdAt: FieldRef<"BuyerFirm", 'DateTime'>
    readonly logoUrl: FieldRef<"BuyerFirm", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BuyerFirm findUnique
   */
  export type BuyerFirmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerFirm
     */
    select?: BuyerFirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerFirm
     */
    omit?: BuyerFirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerFirmInclude<ExtArgs> | null
    /**
     * Filter, which BuyerFirm to fetch.
     */
    where: BuyerFirmWhereUniqueInput
  }

  /**
   * BuyerFirm findUniqueOrThrow
   */
  export type BuyerFirmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerFirm
     */
    select?: BuyerFirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerFirm
     */
    omit?: BuyerFirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerFirmInclude<ExtArgs> | null
    /**
     * Filter, which BuyerFirm to fetch.
     */
    where: BuyerFirmWhereUniqueInput
  }

  /**
   * BuyerFirm findFirst
   */
  export type BuyerFirmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerFirm
     */
    select?: BuyerFirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerFirm
     */
    omit?: BuyerFirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerFirmInclude<ExtArgs> | null
    /**
     * Filter, which BuyerFirm to fetch.
     */
    where?: BuyerFirmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuyerFirms to fetch.
     */
    orderBy?: BuyerFirmOrderByWithRelationInput | BuyerFirmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuyerFirms.
     */
    cursor?: BuyerFirmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuyerFirms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuyerFirms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuyerFirms.
     */
    distinct?: BuyerFirmScalarFieldEnum | BuyerFirmScalarFieldEnum[]
  }

  /**
   * BuyerFirm findFirstOrThrow
   */
  export type BuyerFirmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerFirm
     */
    select?: BuyerFirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerFirm
     */
    omit?: BuyerFirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerFirmInclude<ExtArgs> | null
    /**
     * Filter, which BuyerFirm to fetch.
     */
    where?: BuyerFirmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuyerFirms to fetch.
     */
    orderBy?: BuyerFirmOrderByWithRelationInput | BuyerFirmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuyerFirms.
     */
    cursor?: BuyerFirmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuyerFirms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuyerFirms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuyerFirms.
     */
    distinct?: BuyerFirmScalarFieldEnum | BuyerFirmScalarFieldEnum[]
  }

  /**
   * BuyerFirm findMany
   */
  export type BuyerFirmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerFirm
     */
    select?: BuyerFirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerFirm
     */
    omit?: BuyerFirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerFirmInclude<ExtArgs> | null
    /**
     * Filter, which BuyerFirms to fetch.
     */
    where?: BuyerFirmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuyerFirms to fetch.
     */
    orderBy?: BuyerFirmOrderByWithRelationInput | BuyerFirmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BuyerFirms.
     */
    cursor?: BuyerFirmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuyerFirms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuyerFirms.
     */
    skip?: number
    distinct?: BuyerFirmScalarFieldEnum | BuyerFirmScalarFieldEnum[]
  }

  /**
   * BuyerFirm create
   */
  export type BuyerFirmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerFirm
     */
    select?: BuyerFirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerFirm
     */
    omit?: BuyerFirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerFirmInclude<ExtArgs> | null
    /**
     * The data needed to create a BuyerFirm.
     */
    data: XOR<BuyerFirmCreateInput, BuyerFirmUncheckedCreateInput>
  }

  /**
   * BuyerFirm createMany
   */
  export type BuyerFirmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BuyerFirms.
     */
    data: BuyerFirmCreateManyInput | BuyerFirmCreateManyInput[]
  }

  /**
   * BuyerFirm createManyAndReturn
   */
  export type BuyerFirmCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerFirm
     */
    select?: BuyerFirmSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerFirm
     */
    omit?: BuyerFirmOmit<ExtArgs> | null
    /**
     * The data used to create many BuyerFirms.
     */
    data: BuyerFirmCreateManyInput | BuyerFirmCreateManyInput[]
  }

  /**
   * BuyerFirm update
   */
  export type BuyerFirmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerFirm
     */
    select?: BuyerFirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerFirm
     */
    omit?: BuyerFirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerFirmInclude<ExtArgs> | null
    /**
     * The data needed to update a BuyerFirm.
     */
    data: XOR<BuyerFirmUpdateInput, BuyerFirmUncheckedUpdateInput>
    /**
     * Choose, which BuyerFirm to update.
     */
    where: BuyerFirmWhereUniqueInput
  }

  /**
   * BuyerFirm updateMany
   */
  export type BuyerFirmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BuyerFirms.
     */
    data: XOR<BuyerFirmUpdateManyMutationInput, BuyerFirmUncheckedUpdateManyInput>
    /**
     * Filter which BuyerFirms to update
     */
    where?: BuyerFirmWhereInput
    /**
     * Limit how many BuyerFirms to update.
     */
    limit?: number
  }

  /**
   * BuyerFirm updateManyAndReturn
   */
  export type BuyerFirmUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerFirm
     */
    select?: BuyerFirmSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerFirm
     */
    omit?: BuyerFirmOmit<ExtArgs> | null
    /**
     * The data used to update BuyerFirms.
     */
    data: XOR<BuyerFirmUpdateManyMutationInput, BuyerFirmUncheckedUpdateManyInput>
    /**
     * Filter which BuyerFirms to update
     */
    where?: BuyerFirmWhereInput
    /**
     * Limit how many BuyerFirms to update.
     */
    limit?: number
  }

  /**
   * BuyerFirm upsert
   */
  export type BuyerFirmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerFirm
     */
    select?: BuyerFirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerFirm
     */
    omit?: BuyerFirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerFirmInclude<ExtArgs> | null
    /**
     * The filter to search for the BuyerFirm to update in case it exists.
     */
    where: BuyerFirmWhereUniqueInput
    /**
     * In case the BuyerFirm found by the `where` argument doesn't exist, create a new BuyerFirm with this data.
     */
    create: XOR<BuyerFirmCreateInput, BuyerFirmUncheckedCreateInput>
    /**
     * In case the BuyerFirm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuyerFirmUpdateInput, BuyerFirmUncheckedUpdateInput>
  }

  /**
   * BuyerFirm delete
   */
  export type BuyerFirmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerFirm
     */
    select?: BuyerFirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerFirm
     */
    omit?: BuyerFirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerFirmInclude<ExtArgs> | null
    /**
     * Filter which BuyerFirm to delete.
     */
    where: BuyerFirmWhereUniqueInput
  }

  /**
   * BuyerFirm deleteMany
   */
  export type BuyerFirmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuyerFirms to delete
     */
    where?: BuyerFirmWhereInput
    /**
     * Limit how many BuyerFirms to delete.
     */
    limit?: number
  }

  /**
   * BuyerFirm.users
   */
  export type BuyerFirm$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * BuyerFirm.growers
   */
  export type BuyerFirm$growersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grower
     */
    select?: GrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grower
     */
    omit?: GrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrowerInclude<ExtArgs> | null
    where?: GrowerWhereInput
    orderBy?: GrowerOrderByWithRelationInput | GrowerOrderByWithRelationInput[]
    cursor?: GrowerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrowerScalarFieldEnum | GrowerScalarFieldEnum[]
  }

  /**
   * BuyerFirm.transactions
   */
  export type BuyerFirm$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * BuyerFirm.payments
   */
  export type BuyerFirm$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * BuyerFirm.draftTransactions
   */
  export type BuyerFirm$draftTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftTransaction
     */
    select?: DraftTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftTransaction
     */
    omit?: DraftTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftTransactionInclude<ExtArgs> | null
    where?: DraftTransactionWhereInput
    orderBy?: DraftTransactionOrderByWithRelationInput | DraftTransactionOrderByWithRelationInput[]
    cursor?: DraftTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DraftTransactionScalarFieldEnum | DraftTransactionScalarFieldEnum[]
  }

  /**
   * BuyerFirm without action
   */
  export type BuyerFirmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerFirm
     */
    select?: BuyerFirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuyerFirm
     */
    omit?: BuyerFirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerFirmInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    mobile: string | null
    name: string | null
    role: string | null
    buyerFirmId: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    mobile: string | null
    name: string | null
    role: string | null
    buyerFirmId: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    mobile: number
    name: number
    role: number
    buyerFirmId: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    mobile?: true
    name?: true
    role?: true
    buyerFirmId?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    mobile?: true
    name?: true
    role?: true
    buyerFirmId?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    mobile?: true
    name?: true
    role?: true
    buyerFirmId?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    mobile: string
    name: string | null
    role: string
    buyerFirmId: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mobile?: boolean
    name?: boolean
    role?: boolean
    buyerFirmId?: boolean
    createdAt?: boolean
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
    draftTransactions?: boolean | User$draftTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mobile?: boolean
    name?: boolean
    role?: boolean
    buyerFirmId?: boolean
    createdAt?: boolean
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mobile?: boolean
    name?: boolean
    role?: boolean
    buyerFirmId?: boolean
    createdAt?: boolean
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    mobile?: boolean
    name?: boolean
    role?: boolean
    buyerFirmId?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mobile" | "name" | "role" | "buyerFirmId" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
    draftTransactions?: boolean | User$draftTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      buyerFirm: Prisma.$BuyerFirmPayload<ExtArgs>
      draftTransactions: Prisma.$DraftTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mobile: string
      name: string | null
      role: string
      buyerFirmId: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buyerFirm<T extends BuyerFirmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BuyerFirmDefaultArgs<ExtArgs>>): Prisma__BuyerFirmClient<$Result.GetResult<Prisma.$BuyerFirmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    draftTransactions<T extends User$draftTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$draftTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly mobile: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly buyerFirmId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.draftTransactions
   */
  export type User$draftTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftTransaction
     */
    select?: DraftTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftTransaction
     */
    omit?: DraftTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftTransactionInclude<ExtArgs> | null
    where?: DraftTransactionWhereInput
    orderBy?: DraftTransactionOrderByWithRelationInput | DraftTransactionOrderByWithRelationInput[]
    cursor?: DraftTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DraftTransactionScalarFieldEnum | DraftTransactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Grower
   */

  export type AggregateGrower = {
    _count: GrowerCountAggregateOutputType | null
    _min: GrowerMinAggregateOutputType | null
    _max: GrowerMaxAggregateOutputType | null
  }

  export type GrowerMinAggregateOutputType = {
    id: string | null
    name: string | null
    mobile: string | null
    address: string | null
    buyerFirmId: string | null
    createdAt: Date | null
  }

  export type GrowerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    mobile: string | null
    address: string | null
    buyerFirmId: string | null
    createdAt: Date | null
  }

  export type GrowerCountAggregateOutputType = {
    id: number
    name: number
    mobile: number
    address: number
    buyerFirmId: number
    createdAt: number
    _all: number
  }


  export type GrowerMinAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    address?: true
    buyerFirmId?: true
    createdAt?: true
  }

  export type GrowerMaxAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    address?: true
    buyerFirmId?: true
    createdAt?: true
  }

  export type GrowerCountAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    address?: true
    buyerFirmId?: true
    createdAt?: true
    _all?: true
  }

  export type GrowerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grower to aggregate.
     */
    where?: GrowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Growers to fetch.
     */
    orderBy?: GrowerOrderByWithRelationInput | GrowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Growers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Growers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Growers
    **/
    _count?: true | GrowerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrowerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrowerMaxAggregateInputType
  }

  export type GetGrowerAggregateType<T extends GrowerAggregateArgs> = {
        [P in keyof T & keyof AggregateGrower]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrower[P]>
      : GetScalarType<T[P], AggregateGrower[P]>
  }




  export type GrowerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrowerWhereInput
    orderBy?: GrowerOrderByWithAggregationInput | GrowerOrderByWithAggregationInput[]
    by: GrowerScalarFieldEnum[] | GrowerScalarFieldEnum
    having?: GrowerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrowerCountAggregateInputType | true
    _min?: GrowerMinAggregateInputType
    _max?: GrowerMaxAggregateInputType
  }

  export type GrowerGroupByOutputType = {
    id: string
    name: string
    mobile: string
    address: string | null
    buyerFirmId: string
    createdAt: Date
    _count: GrowerCountAggregateOutputType | null
    _min: GrowerMinAggregateOutputType | null
    _max: GrowerMaxAggregateOutputType | null
  }

  type GetGrowerGroupByPayload<T extends GrowerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrowerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrowerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrowerGroupByOutputType[P]>
            : GetScalarType<T[P], GrowerGroupByOutputType[P]>
        }
      >
    >


  export type GrowerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    address?: boolean
    buyerFirmId?: boolean
    createdAt?: boolean
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
    transactions?: boolean | Grower$transactionsArgs<ExtArgs>
    payments?: boolean | Grower$paymentsArgs<ExtArgs>
    notifications?: boolean | Grower$notificationsArgs<ExtArgs>
    agreements?: boolean | Grower$agreementsArgs<ExtArgs>
    draftTransactions?: boolean | Grower$draftTransactionsArgs<ExtArgs>
    _count?: boolean | GrowerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grower"]>

  export type GrowerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    address?: boolean
    buyerFirmId?: boolean
    createdAt?: boolean
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grower"]>

  export type GrowerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    address?: boolean
    buyerFirmId?: boolean
    createdAt?: boolean
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grower"]>

  export type GrowerSelectScalar = {
    id?: boolean
    name?: boolean
    mobile?: boolean
    address?: boolean
    buyerFirmId?: boolean
    createdAt?: boolean
  }

  export type GrowerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "mobile" | "address" | "buyerFirmId" | "createdAt", ExtArgs["result"]["grower"]>
  export type GrowerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
    transactions?: boolean | Grower$transactionsArgs<ExtArgs>
    payments?: boolean | Grower$paymentsArgs<ExtArgs>
    notifications?: boolean | Grower$notificationsArgs<ExtArgs>
    agreements?: boolean | Grower$agreementsArgs<ExtArgs>
    draftTransactions?: boolean | Grower$draftTransactionsArgs<ExtArgs>
    _count?: boolean | GrowerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GrowerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }
  export type GrowerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }

  export type $GrowerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grower"
    objects: {
      buyerFirm: Prisma.$BuyerFirmPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      agreements: Prisma.$AgreementPayload<ExtArgs>[]
      draftTransactions: Prisma.$DraftTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      mobile: string
      address: string | null
      buyerFirmId: string
      createdAt: Date
    }, ExtArgs["result"]["grower"]>
    composites: {}
  }

  type GrowerGetPayload<S extends boolean | null | undefined | GrowerDefaultArgs> = $Result.GetResult<Prisma.$GrowerPayload, S>

  type GrowerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GrowerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrowerCountAggregateInputType | true
    }

  export interface GrowerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grower'], meta: { name: 'Grower' } }
    /**
     * Find zero or one Grower that matches the filter.
     * @param {GrowerFindUniqueArgs} args - Arguments to find a Grower
     * @example
     * // Get one Grower
     * const grower = await prisma.grower.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrowerFindUniqueArgs>(args: SelectSubset<T, GrowerFindUniqueArgs<ExtArgs>>): Prisma__GrowerClient<$Result.GetResult<Prisma.$GrowerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grower that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrowerFindUniqueOrThrowArgs} args - Arguments to find a Grower
     * @example
     * // Get one Grower
     * const grower = await prisma.grower.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrowerFindUniqueOrThrowArgs>(args: SelectSubset<T, GrowerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrowerClient<$Result.GetResult<Prisma.$GrowerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grower that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowerFindFirstArgs} args - Arguments to find a Grower
     * @example
     * // Get one Grower
     * const grower = await prisma.grower.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrowerFindFirstArgs>(args?: SelectSubset<T, GrowerFindFirstArgs<ExtArgs>>): Prisma__GrowerClient<$Result.GetResult<Prisma.$GrowerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grower that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowerFindFirstOrThrowArgs} args - Arguments to find a Grower
     * @example
     * // Get one Grower
     * const grower = await prisma.grower.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrowerFindFirstOrThrowArgs>(args?: SelectSubset<T, GrowerFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrowerClient<$Result.GetResult<Prisma.$GrowerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Growers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Growers
     * const growers = await prisma.grower.findMany()
     * 
     * // Get first 10 Growers
     * const growers = await prisma.grower.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const growerWithIdOnly = await prisma.grower.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GrowerFindManyArgs>(args?: SelectSubset<T, GrowerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrowerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grower.
     * @param {GrowerCreateArgs} args - Arguments to create a Grower.
     * @example
     * // Create one Grower
     * const Grower = await prisma.grower.create({
     *   data: {
     *     // ... data to create a Grower
     *   }
     * })
     * 
     */
    create<T extends GrowerCreateArgs>(args: SelectSubset<T, GrowerCreateArgs<ExtArgs>>): Prisma__GrowerClient<$Result.GetResult<Prisma.$GrowerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Growers.
     * @param {GrowerCreateManyArgs} args - Arguments to create many Growers.
     * @example
     * // Create many Growers
     * const grower = await prisma.grower.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrowerCreateManyArgs>(args?: SelectSubset<T, GrowerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Growers and returns the data saved in the database.
     * @param {GrowerCreateManyAndReturnArgs} args - Arguments to create many Growers.
     * @example
     * // Create many Growers
     * const grower = await prisma.grower.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Growers and only return the `id`
     * const growerWithIdOnly = await prisma.grower.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GrowerCreateManyAndReturnArgs>(args?: SelectSubset<T, GrowerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrowerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Grower.
     * @param {GrowerDeleteArgs} args - Arguments to delete one Grower.
     * @example
     * // Delete one Grower
     * const Grower = await prisma.grower.delete({
     *   where: {
     *     // ... filter to delete one Grower
     *   }
     * })
     * 
     */
    delete<T extends GrowerDeleteArgs>(args: SelectSubset<T, GrowerDeleteArgs<ExtArgs>>): Prisma__GrowerClient<$Result.GetResult<Prisma.$GrowerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grower.
     * @param {GrowerUpdateArgs} args - Arguments to update one Grower.
     * @example
     * // Update one Grower
     * const grower = await prisma.grower.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrowerUpdateArgs>(args: SelectSubset<T, GrowerUpdateArgs<ExtArgs>>): Prisma__GrowerClient<$Result.GetResult<Prisma.$GrowerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Growers.
     * @param {GrowerDeleteManyArgs} args - Arguments to filter Growers to delete.
     * @example
     * // Delete a few Growers
     * const { count } = await prisma.grower.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrowerDeleteManyArgs>(args?: SelectSubset<T, GrowerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Growers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Growers
     * const grower = await prisma.grower.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrowerUpdateManyArgs>(args: SelectSubset<T, GrowerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Growers and returns the data updated in the database.
     * @param {GrowerUpdateManyAndReturnArgs} args - Arguments to update many Growers.
     * @example
     * // Update many Growers
     * const grower = await prisma.grower.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Growers and only return the `id`
     * const growerWithIdOnly = await prisma.grower.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GrowerUpdateManyAndReturnArgs>(args: SelectSubset<T, GrowerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrowerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Grower.
     * @param {GrowerUpsertArgs} args - Arguments to update or create a Grower.
     * @example
     * // Update or create a Grower
     * const grower = await prisma.grower.upsert({
     *   create: {
     *     // ... data to create a Grower
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grower we want to update
     *   }
     * })
     */
    upsert<T extends GrowerUpsertArgs>(args: SelectSubset<T, GrowerUpsertArgs<ExtArgs>>): Prisma__GrowerClient<$Result.GetResult<Prisma.$GrowerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Growers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowerCountArgs} args - Arguments to filter Growers to count.
     * @example
     * // Count the number of Growers
     * const count = await prisma.grower.count({
     *   where: {
     *     // ... the filter for the Growers we want to count
     *   }
     * })
    **/
    count<T extends GrowerCountArgs>(
      args?: Subset<T, GrowerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrowerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GrowerAggregateArgs>(args: Subset<T, GrowerAggregateArgs>): Prisma.PrismaPromise<GetGrowerAggregateType<T>>

    /**
     * Group by Grower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GrowerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrowerGroupByArgs['orderBy'] }
        : { orderBy?: GrowerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GrowerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrowerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grower model
   */
  readonly fields: GrowerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grower.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrowerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buyerFirm<T extends BuyerFirmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BuyerFirmDefaultArgs<ExtArgs>>): Prisma__BuyerFirmClient<$Result.GetResult<Prisma.$BuyerFirmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Grower$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Grower$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Grower$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Grower$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Grower$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Grower$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agreements<T extends Grower$agreementsArgs<ExtArgs> = {}>(args?: Subset<T, Grower$agreementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgreementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    draftTransactions<T extends Grower$draftTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Grower$draftTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Grower model
   */
  interface GrowerFieldRefs {
    readonly id: FieldRef<"Grower", 'String'>
    readonly name: FieldRef<"Grower", 'String'>
    readonly mobile: FieldRef<"Grower", 'String'>
    readonly address: FieldRef<"Grower", 'String'>
    readonly buyerFirmId: FieldRef<"Grower", 'String'>
    readonly createdAt: FieldRef<"Grower", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Grower findUnique
   */
  export type GrowerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grower
     */
    select?: GrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grower
     */
    omit?: GrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrowerInclude<ExtArgs> | null
    /**
     * Filter, which Grower to fetch.
     */
    where: GrowerWhereUniqueInput
  }

  /**
   * Grower findUniqueOrThrow
   */
  export type GrowerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grower
     */
    select?: GrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grower
     */
    omit?: GrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrowerInclude<ExtArgs> | null
    /**
     * Filter, which Grower to fetch.
     */
    where: GrowerWhereUniqueInput
  }

  /**
   * Grower findFirst
   */
  export type GrowerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grower
     */
    select?: GrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grower
     */
    omit?: GrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrowerInclude<ExtArgs> | null
    /**
     * Filter, which Grower to fetch.
     */
    where?: GrowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Growers to fetch.
     */
    orderBy?: GrowerOrderByWithRelationInput | GrowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Growers.
     */
    cursor?: GrowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Growers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Growers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Growers.
     */
    distinct?: GrowerScalarFieldEnum | GrowerScalarFieldEnum[]
  }

  /**
   * Grower findFirstOrThrow
   */
  export type GrowerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grower
     */
    select?: GrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grower
     */
    omit?: GrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrowerInclude<ExtArgs> | null
    /**
     * Filter, which Grower to fetch.
     */
    where?: GrowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Growers to fetch.
     */
    orderBy?: GrowerOrderByWithRelationInput | GrowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Growers.
     */
    cursor?: GrowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Growers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Growers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Growers.
     */
    distinct?: GrowerScalarFieldEnum | GrowerScalarFieldEnum[]
  }

  /**
   * Grower findMany
   */
  export type GrowerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grower
     */
    select?: GrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grower
     */
    omit?: GrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrowerInclude<ExtArgs> | null
    /**
     * Filter, which Growers to fetch.
     */
    where?: GrowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Growers to fetch.
     */
    orderBy?: GrowerOrderByWithRelationInput | GrowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Growers.
     */
    cursor?: GrowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Growers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Growers.
     */
    skip?: number
    distinct?: GrowerScalarFieldEnum | GrowerScalarFieldEnum[]
  }

  /**
   * Grower create
   */
  export type GrowerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grower
     */
    select?: GrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grower
     */
    omit?: GrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrowerInclude<ExtArgs> | null
    /**
     * The data needed to create a Grower.
     */
    data: XOR<GrowerCreateInput, GrowerUncheckedCreateInput>
  }

  /**
   * Grower createMany
   */
  export type GrowerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Growers.
     */
    data: GrowerCreateManyInput | GrowerCreateManyInput[]
  }

  /**
   * Grower createManyAndReturn
   */
  export type GrowerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grower
     */
    select?: GrowerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grower
     */
    omit?: GrowerOmit<ExtArgs> | null
    /**
     * The data used to create many Growers.
     */
    data: GrowerCreateManyInput | GrowerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrowerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Grower update
   */
  export type GrowerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grower
     */
    select?: GrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grower
     */
    omit?: GrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrowerInclude<ExtArgs> | null
    /**
     * The data needed to update a Grower.
     */
    data: XOR<GrowerUpdateInput, GrowerUncheckedUpdateInput>
    /**
     * Choose, which Grower to update.
     */
    where: GrowerWhereUniqueInput
  }

  /**
   * Grower updateMany
   */
  export type GrowerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Growers.
     */
    data: XOR<GrowerUpdateManyMutationInput, GrowerUncheckedUpdateManyInput>
    /**
     * Filter which Growers to update
     */
    where?: GrowerWhereInput
    /**
     * Limit how many Growers to update.
     */
    limit?: number
  }

  /**
   * Grower updateManyAndReturn
   */
  export type GrowerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grower
     */
    select?: GrowerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grower
     */
    omit?: GrowerOmit<ExtArgs> | null
    /**
     * The data used to update Growers.
     */
    data: XOR<GrowerUpdateManyMutationInput, GrowerUncheckedUpdateManyInput>
    /**
     * Filter which Growers to update
     */
    where?: GrowerWhereInput
    /**
     * Limit how many Growers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrowerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Grower upsert
   */
  export type GrowerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grower
     */
    select?: GrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grower
     */
    omit?: GrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrowerInclude<ExtArgs> | null
    /**
     * The filter to search for the Grower to update in case it exists.
     */
    where: GrowerWhereUniqueInput
    /**
     * In case the Grower found by the `where` argument doesn't exist, create a new Grower with this data.
     */
    create: XOR<GrowerCreateInput, GrowerUncheckedCreateInput>
    /**
     * In case the Grower was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrowerUpdateInput, GrowerUncheckedUpdateInput>
  }

  /**
   * Grower delete
   */
  export type GrowerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grower
     */
    select?: GrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grower
     */
    omit?: GrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrowerInclude<ExtArgs> | null
    /**
     * Filter which Grower to delete.
     */
    where: GrowerWhereUniqueInput
  }

  /**
   * Grower deleteMany
   */
  export type GrowerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Growers to delete
     */
    where?: GrowerWhereInput
    /**
     * Limit how many Growers to delete.
     */
    limit?: number
  }

  /**
   * Grower.transactions
   */
  export type Grower$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Grower.payments
   */
  export type Grower$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Grower.notifications
   */
  export type Grower$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Grower.agreements
   */
  export type Grower$agreementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agreement
     */
    select?: AgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agreement
     */
    omit?: AgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementInclude<ExtArgs> | null
    where?: AgreementWhereInput
    orderBy?: AgreementOrderByWithRelationInput | AgreementOrderByWithRelationInput[]
    cursor?: AgreementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgreementScalarFieldEnum | AgreementScalarFieldEnum[]
  }

  /**
   * Grower.draftTransactions
   */
  export type Grower$draftTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftTransaction
     */
    select?: DraftTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftTransaction
     */
    omit?: DraftTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftTransactionInclude<ExtArgs> | null
    where?: DraftTransactionWhereInput
    orderBy?: DraftTransactionOrderByWithRelationInput | DraftTransactionOrderByWithRelationInput[]
    cursor?: DraftTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DraftTransactionScalarFieldEnum | DraftTransactionScalarFieldEnum[]
  }

  /**
   * Grower without action
   */
  export type GrowerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grower
     */
    select?: GrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grower
     */
    omit?: GrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrowerInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    quantity: number | null
    rate: number | null
    grossAmount: number | null
    commission: number | null
    labour: number | null
    freight: number | null
    association: number | null
    printing: number | null
    miscellaneous: number | null
    totalAmount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    quantity: number | null
    rate: number | null
    grossAmount: number | null
    commission: number | null
    labour: number | null
    freight: number | null
    association: number | null
    printing: number | null
    miscellaneous: number | null
    totalAmount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    growerId: string | null
    buyerFirmId: string | null
    fruitType: string | null
    quantity: number | null
    unit: string | null
    rate: number | null
    grossAmount: number | null
    commission: number | null
    labour: number | null
    freight: number | null
    association: number | null
    printing: number | null
    miscellaneous: number | null
    totalAmount: number | null
    receivedAt: Date | null
    notes: string | null
    notified: boolean | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    growerId: string | null
    buyerFirmId: string | null
    fruitType: string | null
    quantity: number | null
    unit: string | null
    rate: number | null
    grossAmount: number | null
    commission: number | null
    labour: number | null
    freight: number | null
    association: number | null
    printing: number | null
    miscellaneous: number | null
    totalAmount: number | null
    receivedAt: Date | null
    notes: string | null
    notified: boolean | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    growerId: number
    buyerFirmId: number
    fruitType: number
    quantity: number
    unit: number
    rate: number
    grossAmount: number
    commission: number
    labour: number
    freight: number
    association: number
    printing: number
    miscellaneous: number
    totalAmount: number
    receivedAt: number
    notes: number
    notified: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    quantity?: true
    rate?: true
    grossAmount?: true
    commission?: true
    labour?: true
    freight?: true
    association?: true
    printing?: true
    miscellaneous?: true
    totalAmount?: true
  }

  export type TransactionSumAggregateInputType = {
    quantity?: true
    rate?: true
    grossAmount?: true
    commission?: true
    labour?: true
    freight?: true
    association?: true
    printing?: true
    miscellaneous?: true
    totalAmount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    growerId?: true
    buyerFirmId?: true
    fruitType?: true
    quantity?: true
    unit?: true
    rate?: true
    grossAmount?: true
    commission?: true
    labour?: true
    freight?: true
    association?: true
    printing?: true
    miscellaneous?: true
    totalAmount?: true
    receivedAt?: true
    notes?: true
    notified?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    growerId?: true
    buyerFirmId?: true
    fruitType?: true
    quantity?: true
    unit?: true
    rate?: true
    grossAmount?: true
    commission?: true
    labour?: true
    freight?: true
    association?: true
    printing?: true
    miscellaneous?: true
    totalAmount?: true
    receivedAt?: true
    notes?: true
    notified?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    growerId?: true
    buyerFirmId?: true
    fruitType?: true
    quantity?: true
    unit?: true
    rate?: true
    grossAmount?: true
    commission?: true
    labour?: true
    freight?: true
    association?: true
    printing?: true
    miscellaneous?: true
    totalAmount?: true
    receivedAt?: true
    notes?: true
    notified?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    growerId: string
    buyerFirmId: string
    fruitType: string
    quantity: number
    unit: string
    rate: number
    grossAmount: number
    commission: number
    labour: number
    freight: number
    association: number
    printing: number
    miscellaneous: number
    totalAmount: number
    receivedAt: Date
    notes: string | null
    notified: boolean
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    growerId?: boolean
    buyerFirmId?: boolean
    fruitType?: boolean
    quantity?: boolean
    unit?: boolean
    rate?: boolean
    grossAmount?: boolean
    commission?: boolean
    labour?: boolean
    freight?: boolean
    association?: boolean
    printing?: boolean
    miscellaneous?: boolean
    totalAmount?: boolean
    receivedAt?: boolean
    notes?: boolean
    notified?: boolean
    createdAt?: boolean
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    growerId?: boolean
    buyerFirmId?: boolean
    fruitType?: boolean
    quantity?: boolean
    unit?: boolean
    rate?: boolean
    grossAmount?: boolean
    commission?: boolean
    labour?: boolean
    freight?: boolean
    association?: boolean
    printing?: boolean
    miscellaneous?: boolean
    totalAmount?: boolean
    receivedAt?: boolean
    notes?: boolean
    notified?: boolean
    createdAt?: boolean
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    growerId?: boolean
    buyerFirmId?: boolean
    fruitType?: boolean
    quantity?: boolean
    unit?: boolean
    rate?: boolean
    grossAmount?: boolean
    commission?: boolean
    labour?: boolean
    freight?: boolean
    association?: boolean
    printing?: boolean
    miscellaneous?: boolean
    totalAmount?: boolean
    receivedAt?: boolean
    notes?: boolean
    notified?: boolean
    createdAt?: boolean
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    growerId?: boolean
    buyerFirmId?: boolean
    fruitType?: boolean
    quantity?: boolean
    unit?: boolean
    rate?: boolean
    grossAmount?: boolean
    commission?: boolean
    labour?: boolean
    freight?: boolean
    association?: boolean
    printing?: boolean
    miscellaneous?: boolean
    totalAmount?: boolean
    receivedAt?: boolean
    notes?: boolean
    notified?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "growerId" | "buyerFirmId" | "fruitType" | "quantity" | "unit" | "rate" | "grossAmount" | "commission" | "labour" | "freight" | "association" | "printing" | "miscellaneous" | "totalAmount" | "receivedAt" | "notes" | "notified" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      grower: Prisma.$GrowerPayload<ExtArgs>
      buyerFirm: Prisma.$BuyerFirmPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      growerId: string
      buyerFirmId: string
      fruitType: string
      quantity: number
      unit: string
      rate: number
      grossAmount: number
      commission: number
      labour: number
      freight: number
      association: number
      printing: number
      miscellaneous: number
      totalAmount: number
      receivedAt: Date
      notes: string | null
      notified: boolean
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grower<T extends GrowerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GrowerDefaultArgs<ExtArgs>>): Prisma__GrowerClient<$Result.GetResult<Prisma.$GrowerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyerFirm<T extends BuyerFirmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BuyerFirmDefaultArgs<ExtArgs>>): Prisma__BuyerFirmClient<$Result.GetResult<Prisma.$BuyerFirmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly growerId: FieldRef<"Transaction", 'String'>
    readonly buyerFirmId: FieldRef<"Transaction", 'String'>
    readonly fruitType: FieldRef<"Transaction", 'String'>
    readonly quantity: FieldRef<"Transaction", 'Float'>
    readonly unit: FieldRef<"Transaction", 'String'>
    readonly rate: FieldRef<"Transaction", 'Float'>
    readonly grossAmount: FieldRef<"Transaction", 'Float'>
    readonly commission: FieldRef<"Transaction", 'Float'>
    readonly labour: FieldRef<"Transaction", 'Float'>
    readonly freight: FieldRef<"Transaction", 'Float'>
    readonly association: FieldRef<"Transaction", 'Float'>
    readonly printing: FieldRef<"Transaction", 'Float'>
    readonly miscellaneous: FieldRef<"Transaction", 'Float'>
    readonly totalAmount: FieldRef<"Transaction", 'Float'>
    readonly receivedAt: FieldRef<"Transaction", 'DateTime'>
    readonly notes: FieldRef<"Transaction", 'String'>
    readonly notified: FieldRef<"Transaction", 'Boolean'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    growerId: string | null
    buyerFirmId: string | null
    amount: number | null
    notes: string | null
    paidAt: Date | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    growerId: string | null
    buyerFirmId: string | null
    amount: number | null
    notes: string | null
    paidAt: Date | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    growerId: number
    buyerFirmId: number
    amount: number
    notes: number
    paidAt: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    growerId?: true
    buyerFirmId?: true
    amount?: true
    notes?: true
    paidAt?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    growerId?: true
    buyerFirmId?: true
    amount?: true
    notes?: true
    paidAt?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    growerId?: true
    buyerFirmId?: true
    amount?: true
    notes?: true
    paidAt?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    growerId: string
    buyerFirmId: string
    amount: number
    notes: string | null
    paidAt: Date
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    growerId?: boolean
    buyerFirmId?: boolean
    amount?: boolean
    notes?: boolean
    paidAt?: boolean
    createdAt?: boolean
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    growerId?: boolean
    buyerFirmId?: boolean
    amount?: boolean
    notes?: boolean
    paidAt?: boolean
    createdAt?: boolean
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    growerId?: boolean
    buyerFirmId?: boolean
    amount?: boolean
    notes?: boolean
    paidAt?: boolean
    createdAt?: boolean
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    growerId?: boolean
    buyerFirmId?: boolean
    amount?: boolean
    notes?: boolean
    paidAt?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "growerId" | "buyerFirmId" | "amount" | "notes" | "paidAt" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      grower: Prisma.$GrowerPayload<ExtArgs>
      buyerFirm: Prisma.$BuyerFirmPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      growerId: string
      buyerFirmId: string
      amount: number
      notes: string | null
      paidAt: Date
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grower<T extends GrowerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GrowerDefaultArgs<ExtArgs>>): Prisma__GrowerClient<$Result.GetResult<Prisma.$GrowerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyerFirm<T extends BuyerFirmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BuyerFirmDefaultArgs<ExtArgs>>): Prisma__BuyerFirmClient<$Result.GetResult<Prisma.$BuyerFirmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly growerId: FieldRef<"Payment", 'String'>
    readonly buyerFirmId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly notes: FieldRef<"Payment", 'String'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpMinAggregateOutputType = {
    id: string | null
    mobile: string | null
    otpHash: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OtpMaxAggregateOutputType = {
    id: string | null
    mobile: string | null
    otpHash: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OtpCountAggregateOutputType = {
    id: number
    mobile: number
    otpHash: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type OtpMinAggregateInputType = {
    id?: true
    mobile?: true
    otpHash?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OtpMaxAggregateInputType = {
    id?: true
    mobile?: true
    otpHash?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OtpCountAggregateInputType = {
    id?: true
    mobile?: true
    otpHash?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type OtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: OtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    id: string
    mobile: string
    otpHash: string
    expiresAt: Date
    createdAt: Date
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type OtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mobile?: boolean
    otpHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mobile?: boolean
    otpHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mobile?: boolean
    otpHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectScalar = {
    id?: boolean
    mobile?: boolean
    otpHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type OtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mobile" | "otpHash" | "expiresAt" | "createdAt", ExtArgs["result"]["otp"]>

  export type $OtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Otp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mobile: string
      otpHash: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = $Result.GetResult<Prisma.$OtpPayload, S>

  type OtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface OtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Otp'], meta: { name: 'Otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpFindUniqueArgs>(args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpFindFirstArgs>(args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpFindManyArgs>(args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends OtpCreateArgs>(args: SelectSubset<T, OtpCreateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otps.
     * @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpCreateManyArgs>(args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Otps and returns the data saved in the database.
     * @param {OtpCreateManyAndReturnArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends OtpDeleteArgs>(args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpUpdateArgs>(args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpDeleteManyArgs>(args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpUpdateManyArgs>(args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps and returns the data updated in the database.
     * @param {OtpUpdateManyAndReturnArgs} args - Arguments to update many Otps.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OtpUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends OtpUpsertArgs>(args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Otp model
   */
  readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Otp model
   */
  interface OtpFieldRefs {
    readonly id: FieldRef<"Otp", 'String'>
    readonly mobile: FieldRef<"Otp", 'String'>
    readonly otpHash: FieldRef<"Otp", 'String'>
    readonly expiresAt: FieldRef<"Otp", 'DateTime'>
    readonly createdAt: FieldRef<"Otp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp create
   */
  export type OtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>
  }

  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
  }

  /**
   * Otp createManyAndReturn
   */
  export type OtpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
  }

  /**
   * Otp update
   */
  export type OtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp updateManyAndReturn
   */
  export type OtpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
  }

  /**
   * Otp delete
   */
  export type OtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to delete.
     */
    limit?: number
  }

  /**
   * Otp without action
   */
  export type OtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    growerId: string | null
    message: string | null
    sentAt: Date | null
    status: string | null
    type: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    growerId: string | null
    message: string | null
    sentAt: Date | null
    status: string | null
    type: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    growerId: number
    message: number
    sentAt: number
    status: number
    type: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    growerId?: true
    message?: true
    sentAt?: true
    status?: true
    type?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    growerId?: true
    message?: true
    sentAt?: true
    status?: true
    type?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    growerId?: true
    message?: true
    sentAt?: true
    status?: true
    type?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    growerId: string
    message: string
    sentAt: Date
    status: string
    type: string
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    growerId?: boolean
    message?: boolean
    sentAt?: boolean
    status?: boolean
    type?: boolean
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    growerId?: boolean
    message?: boolean
    sentAt?: boolean
    status?: boolean
    type?: boolean
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    growerId?: boolean
    message?: boolean
    sentAt?: boolean
    status?: boolean
    type?: boolean
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    growerId?: boolean
    message?: boolean
    sentAt?: boolean
    status?: boolean
    type?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "growerId" | "message" | "sentAt" | "status" | "type", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      grower: Prisma.$GrowerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      growerId: string
      message: string
      sentAt: Date
      status: string
      type: string
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grower<T extends GrowerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GrowerDefaultArgs<ExtArgs>>): Prisma__GrowerClient<$Result.GetResult<Prisma.$GrowerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly growerId: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly sentAt: FieldRef<"Notification", 'DateTime'>
    readonly status: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Agreement
   */

  export type AggregateAgreement = {
    _count: AgreementCountAggregateOutputType | null
    _min: AgreementMinAggregateOutputType | null
    _max: AgreementMaxAggregateOutputType | null
  }

  export type AgreementMinAggregateOutputType = {
    id: string | null
    growerId: string | null
    pledgedProduce: string | null
    paymentTerms: string | null
    installments: string | null
    buyerSign: string | null
    validUntil: Date | null
    signedAt: Date | null
    createdAt: Date | null
  }

  export type AgreementMaxAggregateOutputType = {
    id: string | null
    growerId: string | null
    pledgedProduce: string | null
    paymentTerms: string | null
    installments: string | null
    buyerSign: string | null
    validUntil: Date | null
    signedAt: Date | null
    createdAt: Date | null
  }

  export type AgreementCountAggregateOutputType = {
    id: number
    growerId: number
    pledgedProduce: number
    paymentTerms: number
    installments: number
    buyerSign: number
    validUntil: number
    signedAt: number
    createdAt: number
    _all: number
  }


  export type AgreementMinAggregateInputType = {
    id?: true
    growerId?: true
    pledgedProduce?: true
    paymentTerms?: true
    installments?: true
    buyerSign?: true
    validUntil?: true
    signedAt?: true
    createdAt?: true
  }

  export type AgreementMaxAggregateInputType = {
    id?: true
    growerId?: true
    pledgedProduce?: true
    paymentTerms?: true
    installments?: true
    buyerSign?: true
    validUntil?: true
    signedAt?: true
    createdAt?: true
  }

  export type AgreementCountAggregateInputType = {
    id?: true
    growerId?: true
    pledgedProduce?: true
    paymentTerms?: true
    installments?: true
    buyerSign?: true
    validUntil?: true
    signedAt?: true
    createdAt?: true
    _all?: true
  }

  export type AgreementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agreement to aggregate.
     */
    where?: AgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agreements to fetch.
     */
    orderBy?: AgreementOrderByWithRelationInput | AgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agreements
    **/
    _count?: true | AgreementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgreementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgreementMaxAggregateInputType
  }

  export type GetAgreementAggregateType<T extends AgreementAggregateArgs> = {
        [P in keyof T & keyof AggregateAgreement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgreement[P]>
      : GetScalarType<T[P], AggregateAgreement[P]>
  }




  export type AgreementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgreementWhereInput
    orderBy?: AgreementOrderByWithAggregationInput | AgreementOrderByWithAggregationInput[]
    by: AgreementScalarFieldEnum[] | AgreementScalarFieldEnum
    having?: AgreementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgreementCountAggregateInputType | true
    _min?: AgreementMinAggregateInputType
    _max?: AgreementMaxAggregateInputType
  }

  export type AgreementGroupByOutputType = {
    id: string
    growerId: string
    pledgedProduce: string
    paymentTerms: string
    installments: string
    buyerSign: string
    validUntil: Date | null
    signedAt: Date
    createdAt: Date
    _count: AgreementCountAggregateOutputType | null
    _min: AgreementMinAggregateOutputType | null
    _max: AgreementMaxAggregateOutputType | null
  }

  type GetAgreementGroupByPayload<T extends AgreementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgreementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgreementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgreementGroupByOutputType[P]>
            : GetScalarType<T[P], AgreementGroupByOutputType[P]>
        }
      >
    >


  export type AgreementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    growerId?: boolean
    pledgedProduce?: boolean
    paymentTerms?: boolean
    installments?: boolean
    buyerSign?: boolean
    validUntil?: boolean
    signedAt?: boolean
    createdAt?: boolean
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agreement"]>

  export type AgreementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    growerId?: boolean
    pledgedProduce?: boolean
    paymentTerms?: boolean
    installments?: boolean
    buyerSign?: boolean
    validUntil?: boolean
    signedAt?: boolean
    createdAt?: boolean
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agreement"]>

  export type AgreementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    growerId?: boolean
    pledgedProduce?: boolean
    paymentTerms?: boolean
    installments?: boolean
    buyerSign?: boolean
    validUntil?: boolean
    signedAt?: boolean
    createdAt?: boolean
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agreement"]>

  export type AgreementSelectScalar = {
    id?: boolean
    growerId?: boolean
    pledgedProduce?: boolean
    paymentTerms?: boolean
    installments?: boolean
    buyerSign?: boolean
    validUntil?: boolean
    signedAt?: boolean
    createdAt?: boolean
  }

  export type AgreementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "growerId" | "pledgedProduce" | "paymentTerms" | "installments" | "buyerSign" | "validUntil" | "signedAt" | "createdAt", ExtArgs["result"]["agreement"]>
  export type AgreementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
  }
  export type AgreementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
  }
  export type AgreementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
  }

  export type $AgreementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agreement"
    objects: {
      grower: Prisma.$GrowerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      growerId: string
      pledgedProduce: string
      paymentTerms: string
      installments: string
      buyerSign: string
      validUntil: Date | null
      signedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["agreement"]>
    composites: {}
  }

  type AgreementGetPayload<S extends boolean | null | undefined | AgreementDefaultArgs> = $Result.GetResult<Prisma.$AgreementPayload, S>

  type AgreementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgreementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgreementCountAggregateInputType | true
    }

  export interface AgreementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agreement'], meta: { name: 'Agreement' } }
    /**
     * Find zero or one Agreement that matches the filter.
     * @param {AgreementFindUniqueArgs} args - Arguments to find a Agreement
     * @example
     * // Get one Agreement
     * const agreement = await prisma.agreement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgreementFindUniqueArgs>(args: SelectSubset<T, AgreementFindUniqueArgs<ExtArgs>>): Prisma__AgreementClient<$Result.GetResult<Prisma.$AgreementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agreement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgreementFindUniqueOrThrowArgs} args - Arguments to find a Agreement
     * @example
     * // Get one Agreement
     * const agreement = await prisma.agreement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgreementFindUniqueOrThrowArgs>(args: SelectSubset<T, AgreementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgreementClient<$Result.GetResult<Prisma.$AgreementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agreement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementFindFirstArgs} args - Arguments to find a Agreement
     * @example
     * // Get one Agreement
     * const agreement = await prisma.agreement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgreementFindFirstArgs>(args?: SelectSubset<T, AgreementFindFirstArgs<ExtArgs>>): Prisma__AgreementClient<$Result.GetResult<Prisma.$AgreementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agreement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementFindFirstOrThrowArgs} args - Arguments to find a Agreement
     * @example
     * // Get one Agreement
     * const agreement = await prisma.agreement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgreementFindFirstOrThrowArgs>(args?: SelectSubset<T, AgreementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgreementClient<$Result.GetResult<Prisma.$AgreementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agreements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agreements
     * const agreements = await prisma.agreement.findMany()
     * 
     * // Get first 10 Agreements
     * const agreements = await prisma.agreement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agreementWithIdOnly = await prisma.agreement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgreementFindManyArgs>(args?: SelectSubset<T, AgreementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgreementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agreement.
     * @param {AgreementCreateArgs} args - Arguments to create a Agreement.
     * @example
     * // Create one Agreement
     * const Agreement = await prisma.agreement.create({
     *   data: {
     *     // ... data to create a Agreement
     *   }
     * })
     * 
     */
    create<T extends AgreementCreateArgs>(args: SelectSubset<T, AgreementCreateArgs<ExtArgs>>): Prisma__AgreementClient<$Result.GetResult<Prisma.$AgreementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agreements.
     * @param {AgreementCreateManyArgs} args - Arguments to create many Agreements.
     * @example
     * // Create many Agreements
     * const agreement = await prisma.agreement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgreementCreateManyArgs>(args?: SelectSubset<T, AgreementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agreements and returns the data saved in the database.
     * @param {AgreementCreateManyAndReturnArgs} args - Arguments to create many Agreements.
     * @example
     * // Create many Agreements
     * const agreement = await prisma.agreement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agreements and only return the `id`
     * const agreementWithIdOnly = await prisma.agreement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgreementCreateManyAndReturnArgs>(args?: SelectSubset<T, AgreementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgreementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agreement.
     * @param {AgreementDeleteArgs} args - Arguments to delete one Agreement.
     * @example
     * // Delete one Agreement
     * const Agreement = await prisma.agreement.delete({
     *   where: {
     *     // ... filter to delete one Agreement
     *   }
     * })
     * 
     */
    delete<T extends AgreementDeleteArgs>(args: SelectSubset<T, AgreementDeleteArgs<ExtArgs>>): Prisma__AgreementClient<$Result.GetResult<Prisma.$AgreementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agreement.
     * @param {AgreementUpdateArgs} args - Arguments to update one Agreement.
     * @example
     * // Update one Agreement
     * const agreement = await prisma.agreement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgreementUpdateArgs>(args: SelectSubset<T, AgreementUpdateArgs<ExtArgs>>): Prisma__AgreementClient<$Result.GetResult<Prisma.$AgreementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agreements.
     * @param {AgreementDeleteManyArgs} args - Arguments to filter Agreements to delete.
     * @example
     * // Delete a few Agreements
     * const { count } = await prisma.agreement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgreementDeleteManyArgs>(args?: SelectSubset<T, AgreementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agreements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agreements
     * const agreement = await prisma.agreement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgreementUpdateManyArgs>(args: SelectSubset<T, AgreementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agreements and returns the data updated in the database.
     * @param {AgreementUpdateManyAndReturnArgs} args - Arguments to update many Agreements.
     * @example
     * // Update many Agreements
     * const agreement = await prisma.agreement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agreements and only return the `id`
     * const agreementWithIdOnly = await prisma.agreement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgreementUpdateManyAndReturnArgs>(args: SelectSubset<T, AgreementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgreementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agreement.
     * @param {AgreementUpsertArgs} args - Arguments to update or create a Agreement.
     * @example
     * // Update or create a Agreement
     * const agreement = await prisma.agreement.upsert({
     *   create: {
     *     // ... data to create a Agreement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agreement we want to update
     *   }
     * })
     */
    upsert<T extends AgreementUpsertArgs>(args: SelectSubset<T, AgreementUpsertArgs<ExtArgs>>): Prisma__AgreementClient<$Result.GetResult<Prisma.$AgreementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agreements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementCountArgs} args - Arguments to filter Agreements to count.
     * @example
     * // Count the number of Agreements
     * const count = await prisma.agreement.count({
     *   where: {
     *     // ... the filter for the Agreements we want to count
     *   }
     * })
    **/
    count<T extends AgreementCountArgs>(
      args?: Subset<T, AgreementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgreementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agreement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgreementAggregateArgs>(args: Subset<T, AgreementAggregateArgs>): Prisma.PrismaPromise<GetAgreementAggregateType<T>>

    /**
     * Group by Agreement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgreementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgreementGroupByArgs['orderBy'] }
        : { orderBy?: AgreementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgreementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgreementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agreement model
   */
  readonly fields: AgreementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agreement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgreementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grower<T extends GrowerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GrowerDefaultArgs<ExtArgs>>): Prisma__GrowerClient<$Result.GetResult<Prisma.$GrowerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agreement model
   */
  interface AgreementFieldRefs {
    readonly id: FieldRef<"Agreement", 'String'>
    readonly growerId: FieldRef<"Agreement", 'String'>
    readonly pledgedProduce: FieldRef<"Agreement", 'String'>
    readonly paymentTerms: FieldRef<"Agreement", 'String'>
    readonly installments: FieldRef<"Agreement", 'String'>
    readonly buyerSign: FieldRef<"Agreement", 'String'>
    readonly validUntil: FieldRef<"Agreement", 'DateTime'>
    readonly signedAt: FieldRef<"Agreement", 'DateTime'>
    readonly createdAt: FieldRef<"Agreement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agreement findUnique
   */
  export type AgreementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agreement
     */
    select?: AgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agreement
     */
    omit?: AgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementInclude<ExtArgs> | null
    /**
     * Filter, which Agreement to fetch.
     */
    where: AgreementWhereUniqueInput
  }

  /**
   * Agreement findUniqueOrThrow
   */
  export type AgreementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agreement
     */
    select?: AgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agreement
     */
    omit?: AgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementInclude<ExtArgs> | null
    /**
     * Filter, which Agreement to fetch.
     */
    where: AgreementWhereUniqueInput
  }

  /**
   * Agreement findFirst
   */
  export type AgreementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agreement
     */
    select?: AgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agreement
     */
    omit?: AgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementInclude<ExtArgs> | null
    /**
     * Filter, which Agreement to fetch.
     */
    where?: AgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agreements to fetch.
     */
    orderBy?: AgreementOrderByWithRelationInput | AgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agreements.
     */
    cursor?: AgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agreements.
     */
    distinct?: AgreementScalarFieldEnum | AgreementScalarFieldEnum[]
  }

  /**
   * Agreement findFirstOrThrow
   */
  export type AgreementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agreement
     */
    select?: AgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agreement
     */
    omit?: AgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementInclude<ExtArgs> | null
    /**
     * Filter, which Agreement to fetch.
     */
    where?: AgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agreements to fetch.
     */
    orderBy?: AgreementOrderByWithRelationInput | AgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agreements.
     */
    cursor?: AgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agreements.
     */
    distinct?: AgreementScalarFieldEnum | AgreementScalarFieldEnum[]
  }

  /**
   * Agreement findMany
   */
  export type AgreementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agreement
     */
    select?: AgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agreement
     */
    omit?: AgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementInclude<ExtArgs> | null
    /**
     * Filter, which Agreements to fetch.
     */
    where?: AgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agreements to fetch.
     */
    orderBy?: AgreementOrderByWithRelationInput | AgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agreements.
     */
    cursor?: AgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agreements.
     */
    skip?: number
    distinct?: AgreementScalarFieldEnum | AgreementScalarFieldEnum[]
  }

  /**
   * Agreement create
   */
  export type AgreementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agreement
     */
    select?: AgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agreement
     */
    omit?: AgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementInclude<ExtArgs> | null
    /**
     * The data needed to create a Agreement.
     */
    data: XOR<AgreementCreateInput, AgreementUncheckedCreateInput>
  }

  /**
   * Agreement createMany
   */
  export type AgreementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agreements.
     */
    data: AgreementCreateManyInput | AgreementCreateManyInput[]
  }

  /**
   * Agreement createManyAndReturn
   */
  export type AgreementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agreement
     */
    select?: AgreementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agreement
     */
    omit?: AgreementOmit<ExtArgs> | null
    /**
     * The data used to create many Agreements.
     */
    data: AgreementCreateManyInput | AgreementCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agreement update
   */
  export type AgreementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agreement
     */
    select?: AgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agreement
     */
    omit?: AgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementInclude<ExtArgs> | null
    /**
     * The data needed to update a Agreement.
     */
    data: XOR<AgreementUpdateInput, AgreementUncheckedUpdateInput>
    /**
     * Choose, which Agreement to update.
     */
    where: AgreementWhereUniqueInput
  }

  /**
   * Agreement updateMany
   */
  export type AgreementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agreements.
     */
    data: XOR<AgreementUpdateManyMutationInput, AgreementUncheckedUpdateManyInput>
    /**
     * Filter which Agreements to update
     */
    where?: AgreementWhereInput
    /**
     * Limit how many Agreements to update.
     */
    limit?: number
  }

  /**
   * Agreement updateManyAndReturn
   */
  export type AgreementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agreement
     */
    select?: AgreementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agreement
     */
    omit?: AgreementOmit<ExtArgs> | null
    /**
     * The data used to update Agreements.
     */
    data: XOR<AgreementUpdateManyMutationInput, AgreementUncheckedUpdateManyInput>
    /**
     * Filter which Agreements to update
     */
    where?: AgreementWhereInput
    /**
     * Limit how many Agreements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agreement upsert
   */
  export type AgreementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agreement
     */
    select?: AgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agreement
     */
    omit?: AgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementInclude<ExtArgs> | null
    /**
     * The filter to search for the Agreement to update in case it exists.
     */
    where: AgreementWhereUniqueInput
    /**
     * In case the Agreement found by the `where` argument doesn't exist, create a new Agreement with this data.
     */
    create: XOR<AgreementCreateInput, AgreementUncheckedCreateInput>
    /**
     * In case the Agreement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgreementUpdateInput, AgreementUncheckedUpdateInput>
  }

  /**
   * Agreement delete
   */
  export type AgreementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agreement
     */
    select?: AgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agreement
     */
    omit?: AgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementInclude<ExtArgs> | null
    /**
     * Filter which Agreement to delete.
     */
    where: AgreementWhereUniqueInput
  }

  /**
   * Agreement deleteMany
   */
  export type AgreementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agreements to delete
     */
    where?: AgreementWhereInput
    /**
     * Limit how many Agreements to delete.
     */
    limit?: number
  }

  /**
   * Agreement without action
   */
  export type AgreementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agreement
     */
    select?: AgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agreement
     */
    omit?: AgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementInclude<ExtArgs> | null
  }


  /**
   * Model DraftTransaction
   */

  export type AggregateDraftTransaction = {
    _count: DraftTransactionCountAggregateOutputType | null
    _avg: DraftTransactionAvgAggregateOutputType | null
    _sum: DraftTransactionSumAggregateOutputType | null
    _min: DraftTransactionMinAggregateOutputType | null
    _max: DraftTransactionMaxAggregateOutputType | null
  }

  export type DraftTransactionAvgAggregateOutputType = {
    quantity: number | null
    rate: number | null
  }

  export type DraftTransactionSumAggregateOutputType = {
    quantity: number | null
    rate: number | null
  }

  export type DraftTransactionMinAggregateOutputType = {
    id: string | null
    growerId: string | null
    buyerFirmId: string | null
    fruitType: string | null
    quantity: number | null
    unit: string | null
    rate: number | null
    notes: string | null
    createdById: string | null
    status: string | null
    createdAt: Date | null
  }

  export type DraftTransactionMaxAggregateOutputType = {
    id: string | null
    growerId: string | null
    buyerFirmId: string | null
    fruitType: string | null
    quantity: number | null
    unit: string | null
    rate: number | null
    notes: string | null
    createdById: string | null
    status: string | null
    createdAt: Date | null
  }

  export type DraftTransactionCountAggregateOutputType = {
    id: number
    growerId: number
    buyerFirmId: number
    fruitType: number
    quantity: number
    unit: number
    rate: number
    notes: number
    createdById: number
    status: number
    createdAt: number
    _all: number
  }


  export type DraftTransactionAvgAggregateInputType = {
    quantity?: true
    rate?: true
  }

  export type DraftTransactionSumAggregateInputType = {
    quantity?: true
    rate?: true
  }

  export type DraftTransactionMinAggregateInputType = {
    id?: true
    growerId?: true
    buyerFirmId?: true
    fruitType?: true
    quantity?: true
    unit?: true
    rate?: true
    notes?: true
    createdById?: true
    status?: true
    createdAt?: true
  }

  export type DraftTransactionMaxAggregateInputType = {
    id?: true
    growerId?: true
    buyerFirmId?: true
    fruitType?: true
    quantity?: true
    unit?: true
    rate?: true
    notes?: true
    createdById?: true
    status?: true
    createdAt?: true
  }

  export type DraftTransactionCountAggregateInputType = {
    id?: true
    growerId?: true
    buyerFirmId?: true
    fruitType?: true
    quantity?: true
    unit?: true
    rate?: true
    notes?: true
    createdById?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type DraftTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DraftTransaction to aggregate.
     */
    where?: DraftTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DraftTransactions to fetch.
     */
    orderBy?: DraftTransactionOrderByWithRelationInput | DraftTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DraftTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DraftTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DraftTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DraftTransactions
    **/
    _count?: true | DraftTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DraftTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DraftTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DraftTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DraftTransactionMaxAggregateInputType
  }

  export type GetDraftTransactionAggregateType<T extends DraftTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateDraftTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDraftTransaction[P]>
      : GetScalarType<T[P], AggregateDraftTransaction[P]>
  }




  export type DraftTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DraftTransactionWhereInput
    orderBy?: DraftTransactionOrderByWithAggregationInput | DraftTransactionOrderByWithAggregationInput[]
    by: DraftTransactionScalarFieldEnum[] | DraftTransactionScalarFieldEnum
    having?: DraftTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DraftTransactionCountAggregateInputType | true
    _avg?: DraftTransactionAvgAggregateInputType
    _sum?: DraftTransactionSumAggregateInputType
    _min?: DraftTransactionMinAggregateInputType
    _max?: DraftTransactionMaxAggregateInputType
  }

  export type DraftTransactionGroupByOutputType = {
    id: string
    growerId: string
    buyerFirmId: string
    fruitType: string
    quantity: number
    unit: string
    rate: number
    notes: string | null
    createdById: string
    status: string
    createdAt: Date
    _count: DraftTransactionCountAggregateOutputType | null
    _avg: DraftTransactionAvgAggregateOutputType | null
    _sum: DraftTransactionSumAggregateOutputType | null
    _min: DraftTransactionMinAggregateOutputType | null
    _max: DraftTransactionMaxAggregateOutputType | null
  }

  type GetDraftTransactionGroupByPayload<T extends DraftTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DraftTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DraftTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DraftTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], DraftTransactionGroupByOutputType[P]>
        }
      >
    >


  export type DraftTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    growerId?: boolean
    buyerFirmId?: boolean
    fruitType?: boolean
    quantity?: boolean
    unit?: boolean
    rate?: boolean
    notes?: boolean
    createdById?: boolean
    status?: boolean
    createdAt?: boolean
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draftTransaction"]>

  export type DraftTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    growerId?: boolean
    buyerFirmId?: boolean
    fruitType?: boolean
    quantity?: boolean
    unit?: boolean
    rate?: boolean
    notes?: boolean
    createdById?: boolean
    status?: boolean
    createdAt?: boolean
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draftTransaction"]>

  export type DraftTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    growerId?: boolean
    buyerFirmId?: boolean
    fruitType?: boolean
    quantity?: boolean
    unit?: boolean
    rate?: boolean
    notes?: boolean
    createdById?: boolean
    status?: boolean
    createdAt?: boolean
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draftTransaction"]>

  export type DraftTransactionSelectScalar = {
    id?: boolean
    growerId?: boolean
    buyerFirmId?: boolean
    fruitType?: boolean
    quantity?: boolean
    unit?: boolean
    rate?: boolean
    notes?: boolean
    createdById?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type DraftTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "growerId" | "buyerFirmId" | "fruitType" | "quantity" | "unit" | "rate" | "notes" | "createdById" | "status" | "createdAt", ExtArgs["result"]["draftTransaction"]>
  export type DraftTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DraftTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DraftTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grower?: boolean | GrowerDefaultArgs<ExtArgs>
    buyerFirm?: boolean | BuyerFirmDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DraftTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DraftTransaction"
    objects: {
      grower: Prisma.$GrowerPayload<ExtArgs>
      buyerFirm: Prisma.$BuyerFirmPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      growerId: string
      buyerFirmId: string
      fruitType: string
      quantity: number
      unit: string
      rate: number
      notes: string | null
      createdById: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["draftTransaction"]>
    composites: {}
  }

  type DraftTransactionGetPayload<S extends boolean | null | undefined | DraftTransactionDefaultArgs> = $Result.GetResult<Prisma.$DraftTransactionPayload, S>

  type DraftTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DraftTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DraftTransactionCountAggregateInputType | true
    }

  export interface DraftTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DraftTransaction'], meta: { name: 'DraftTransaction' } }
    /**
     * Find zero or one DraftTransaction that matches the filter.
     * @param {DraftTransactionFindUniqueArgs} args - Arguments to find a DraftTransaction
     * @example
     * // Get one DraftTransaction
     * const draftTransaction = await prisma.draftTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DraftTransactionFindUniqueArgs>(args: SelectSubset<T, DraftTransactionFindUniqueArgs<ExtArgs>>): Prisma__DraftTransactionClient<$Result.GetResult<Prisma.$DraftTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DraftTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DraftTransactionFindUniqueOrThrowArgs} args - Arguments to find a DraftTransaction
     * @example
     * // Get one DraftTransaction
     * const draftTransaction = await prisma.draftTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DraftTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, DraftTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DraftTransactionClient<$Result.GetResult<Prisma.$DraftTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DraftTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftTransactionFindFirstArgs} args - Arguments to find a DraftTransaction
     * @example
     * // Get one DraftTransaction
     * const draftTransaction = await prisma.draftTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DraftTransactionFindFirstArgs>(args?: SelectSubset<T, DraftTransactionFindFirstArgs<ExtArgs>>): Prisma__DraftTransactionClient<$Result.GetResult<Prisma.$DraftTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DraftTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftTransactionFindFirstOrThrowArgs} args - Arguments to find a DraftTransaction
     * @example
     * // Get one DraftTransaction
     * const draftTransaction = await prisma.draftTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DraftTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, DraftTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DraftTransactionClient<$Result.GetResult<Prisma.$DraftTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DraftTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DraftTransactions
     * const draftTransactions = await prisma.draftTransaction.findMany()
     * 
     * // Get first 10 DraftTransactions
     * const draftTransactions = await prisma.draftTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const draftTransactionWithIdOnly = await prisma.draftTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DraftTransactionFindManyArgs>(args?: SelectSubset<T, DraftTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DraftTransaction.
     * @param {DraftTransactionCreateArgs} args - Arguments to create a DraftTransaction.
     * @example
     * // Create one DraftTransaction
     * const DraftTransaction = await prisma.draftTransaction.create({
     *   data: {
     *     // ... data to create a DraftTransaction
     *   }
     * })
     * 
     */
    create<T extends DraftTransactionCreateArgs>(args: SelectSubset<T, DraftTransactionCreateArgs<ExtArgs>>): Prisma__DraftTransactionClient<$Result.GetResult<Prisma.$DraftTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DraftTransactions.
     * @param {DraftTransactionCreateManyArgs} args - Arguments to create many DraftTransactions.
     * @example
     * // Create many DraftTransactions
     * const draftTransaction = await prisma.draftTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DraftTransactionCreateManyArgs>(args?: SelectSubset<T, DraftTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DraftTransactions and returns the data saved in the database.
     * @param {DraftTransactionCreateManyAndReturnArgs} args - Arguments to create many DraftTransactions.
     * @example
     * // Create many DraftTransactions
     * const draftTransaction = await prisma.draftTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DraftTransactions and only return the `id`
     * const draftTransactionWithIdOnly = await prisma.draftTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DraftTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, DraftTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DraftTransaction.
     * @param {DraftTransactionDeleteArgs} args - Arguments to delete one DraftTransaction.
     * @example
     * // Delete one DraftTransaction
     * const DraftTransaction = await prisma.draftTransaction.delete({
     *   where: {
     *     // ... filter to delete one DraftTransaction
     *   }
     * })
     * 
     */
    delete<T extends DraftTransactionDeleteArgs>(args: SelectSubset<T, DraftTransactionDeleteArgs<ExtArgs>>): Prisma__DraftTransactionClient<$Result.GetResult<Prisma.$DraftTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DraftTransaction.
     * @param {DraftTransactionUpdateArgs} args - Arguments to update one DraftTransaction.
     * @example
     * // Update one DraftTransaction
     * const draftTransaction = await prisma.draftTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DraftTransactionUpdateArgs>(args: SelectSubset<T, DraftTransactionUpdateArgs<ExtArgs>>): Prisma__DraftTransactionClient<$Result.GetResult<Prisma.$DraftTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DraftTransactions.
     * @param {DraftTransactionDeleteManyArgs} args - Arguments to filter DraftTransactions to delete.
     * @example
     * // Delete a few DraftTransactions
     * const { count } = await prisma.draftTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DraftTransactionDeleteManyArgs>(args?: SelectSubset<T, DraftTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DraftTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DraftTransactions
     * const draftTransaction = await prisma.draftTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DraftTransactionUpdateManyArgs>(args: SelectSubset<T, DraftTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DraftTransactions and returns the data updated in the database.
     * @param {DraftTransactionUpdateManyAndReturnArgs} args - Arguments to update many DraftTransactions.
     * @example
     * // Update many DraftTransactions
     * const draftTransaction = await prisma.draftTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DraftTransactions and only return the `id`
     * const draftTransactionWithIdOnly = await prisma.draftTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DraftTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, DraftTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DraftTransaction.
     * @param {DraftTransactionUpsertArgs} args - Arguments to update or create a DraftTransaction.
     * @example
     * // Update or create a DraftTransaction
     * const draftTransaction = await prisma.draftTransaction.upsert({
     *   create: {
     *     // ... data to create a DraftTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DraftTransaction we want to update
     *   }
     * })
     */
    upsert<T extends DraftTransactionUpsertArgs>(args: SelectSubset<T, DraftTransactionUpsertArgs<ExtArgs>>): Prisma__DraftTransactionClient<$Result.GetResult<Prisma.$DraftTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DraftTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftTransactionCountArgs} args - Arguments to filter DraftTransactions to count.
     * @example
     * // Count the number of DraftTransactions
     * const count = await prisma.draftTransaction.count({
     *   where: {
     *     // ... the filter for the DraftTransactions we want to count
     *   }
     * })
    **/
    count<T extends DraftTransactionCountArgs>(
      args?: Subset<T, DraftTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DraftTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DraftTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DraftTransactionAggregateArgs>(args: Subset<T, DraftTransactionAggregateArgs>): Prisma.PrismaPromise<GetDraftTransactionAggregateType<T>>

    /**
     * Group by DraftTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DraftTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DraftTransactionGroupByArgs['orderBy'] }
        : { orderBy?: DraftTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DraftTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDraftTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DraftTransaction model
   */
  readonly fields: DraftTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DraftTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DraftTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grower<T extends GrowerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GrowerDefaultArgs<ExtArgs>>): Prisma__GrowerClient<$Result.GetResult<Prisma.$GrowerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyerFirm<T extends BuyerFirmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BuyerFirmDefaultArgs<ExtArgs>>): Prisma__BuyerFirmClient<$Result.GetResult<Prisma.$BuyerFirmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DraftTransaction model
   */
  interface DraftTransactionFieldRefs {
    readonly id: FieldRef<"DraftTransaction", 'String'>
    readonly growerId: FieldRef<"DraftTransaction", 'String'>
    readonly buyerFirmId: FieldRef<"DraftTransaction", 'String'>
    readonly fruitType: FieldRef<"DraftTransaction", 'String'>
    readonly quantity: FieldRef<"DraftTransaction", 'Float'>
    readonly unit: FieldRef<"DraftTransaction", 'String'>
    readonly rate: FieldRef<"DraftTransaction", 'Float'>
    readonly notes: FieldRef<"DraftTransaction", 'String'>
    readonly createdById: FieldRef<"DraftTransaction", 'String'>
    readonly status: FieldRef<"DraftTransaction", 'String'>
    readonly createdAt: FieldRef<"DraftTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DraftTransaction findUnique
   */
  export type DraftTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftTransaction
     */
    select?: DraftTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftTransaction
     */
    omit?: DraftTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DraftTransaction to fetch.
     */
    where: DraftTransactionWhereUniqueInput
  }

  /**
   * DraftTransaction findUniqueOrThrow
   */
  export type DraftTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftTransaction
     */
    select?: DraftTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftTransaction
     */
    omit?: DraftTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DraftTransaction to fetch.
     */
    where: DraftTransactionWhereUniqueInput
  }

  /**
   * DraftTransaction findFirst
   */
  export type DraftTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftTransaction
     */
    select?: DraftTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftTransaction
     */
    omit?: DraftTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DraftTransaction to fetch.
     */
    where?: DraftTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DraftTransactions to fetch.
     */
    orderBy?: DraftTransactionOrderByWithRelationInput | DraftTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DraftTransactions.
     */
    cursor?: DraftTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DraftTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DraftTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DraftTransactions.
     */
    distinct?: DraftTransactionScalarFieldEnum | DraftTransactionScalarFieldEnum[]
  }

  /**
   * DraftTransaction findFirstOrThrow
   */
  export type DraftTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftTransaction
     */
    select?: DraftTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftTransaction
     */
    omit?: DraftTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DraftTransaction to fetch.
     */
    where?: DraftTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DraftTransactions to fetch.
     */
    orderBy?: DraftTransactionOrderByWithRelationInput | DraftTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DraftTransactions.
     */
    cursor?: DraftTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DraftTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DraftTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DraftTransactions.
     */
    distinct?: DraftTransactionScalarFieldEnum | DraftTransactionScalarFieldEnum[]
  }

  /**
   * DraftTransaction findMany
   */
  export type DraftTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftTransaction
     */
    select?: DraftTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftTransaction
     */
    omit?: DraftTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DraftTransactions to fetch.
     */
    where?: DraftTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DraftTransactions to fetch.
     */
    orderBy?: DraftTransactionOrderByWithRelationInput | DraftTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DraftTransactions.
     */
    cursor?: DraftTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DraftTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DraftTransactions.
     */
    skip?: number
    distinct?: DraftTransactionScalarFieldEnum | DraftTransactionScalarFieldEnum[]
  }

  /**
   * DraftTransaction create
   */
  export type DraftTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftTransaction
     */
    select?: DraftTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftTransaction
     */
    omit?: DraftTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a DraftTransaction.
     */
    data: XOR<DraftTransactionCreateInput, DraftTransactionUncheckedCreateInput>
  }

  /**
   * DraftTransaction createMany
   */
  export type DraftTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DraftTransactions.
     */
    data: DraftTransactionCreateManyInput | DraftTransactionCreateManyInput[]
  }

  /**
   * DraftTransaction createManyAndReturn
   */
  export type DraftTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftTransaction
     */
    select?: DraftTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DraftTransaction
     */
    omit?: DraftTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many DraftTransactions.
     */
    data: DraftTransactionCreateManyInput | DraftTransactionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DraftTransaction update
   */
  export type DraftTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftTransaction
     */
    select?: DraftTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftTransaction
     */
    omit?: DraftTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a DraftTransaction.
     */
    data: XOR<DraftTransactionUpdateInput, DraftTransactionUncheckedUpdateInput>
    /**
     * Choose, which DraftTransaction to update.
     */
    where: DraftTransactionWhereUniqueInput
  }

  /**
   * DraftTransaction updateMany
   */
  export type DraftTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DraftTransactions.
     */
    data: XOR<DraftTransactionUpdateManyMutationInput, DraftTransactionUncheckedUpdateManyInput>
    /**
     * Filter which DraftTransactions to update
     */
    where?: DraftTransactionWhereInput
    /**
     * Limit how many DraftTransactions to update.
     */
    limit?: number
  }

  /**
   * DraftTransaction updateManyAndReturn
   */
  export type DraftTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftTransaction
     */
    select?: DraftTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DraftTransaction
     */
    omit?: DraftTransactionOmit<ExtArgs> | null
    /**
     * The data used to update DraftTransactions.
     */
    data: XOR<DraftTransactionUpdateManyMutationInput, DraftTransactionUncheckedUpdateManyInput>
    /**
     * Filter which DraftTransactions to update
     */
    where?: DraftTransactionWhereInput
    /**
     * Limit how many DraftTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DraftTransaction upsert
   */
  export type DraftTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftTransaction
     */
    select?: DraftTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftTransaction
     */
    omit?: DraftTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the DraftTransaction to update in case it exists.
     */
    where: DraftTransactionWhereUniqueInput
    /**
     * In case the DraftTransaction found by the `where` argument doesn't exist, create a new DraftTransaction with this data.
     */
    create: XOR<DraftTransactionCreateInput, DraftTransactionUncheckedCreateInput>
    /**
     * In case the DraftTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DraftTransactionUpdateInput, DraftTransactionUncheckedUpdateInput>
  }

  /**
   * DraftTransaction delete
   */
  export type DraftTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftTransaction
     */
    select?: DraftTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftTransaction
     */
    omit?: DraftTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftTransactionInclude<ExtArgs> | null
    /**
     * Filter which DraftTransaction to delete.
     */
    where: DraftTransactionWhereUniqueInput
  }

  /**
   * DraftTransaction deleteMany
   */
  export type DraftTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DraftTransactions to delete
     */
    where?: DraftTransactionWhereInput
    /**
     * Limit how many DraftTransactions to delete.
     */
    limit?: number
  }

  /**
   * DraftTransaction without action
   */
  export type DraftTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftTransaction
     */
    select?: DraftTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftTransaction
     */
    omit?: DraftTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftTransactionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BuyerFirmScalarFieldEnum: {
    id: 'id',
    uniqueId: 'uniqueId',
    firmName: 'firmName',
    ownerName: 'ownerName',
    mobile: 'mobile',
    subscriptionPlan: 'subscriptionPlan',
    subscriptionExpiry: 'subscriptionExpiry',
    createdAt: 'createdAt',
    logoUrl: 'logoUrl'
  };

  export type BuyerFirmScalarFieldEnum = (typeof BuyerFirmScalarFieldEnum)[keyof typeof BuyerFirmScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    mobile: 'mobile',
    name: 'name',
    role: 'role',
    buyerFirmId: 'buyerFirmId',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GrowerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mobile: 'mobile',
    address: 'address',
    buyerFirmId: 'buyerFirmId',
    createdAt: 'createdAt'
  };

  export type GrowerScalarFieldEnum = (typeof GrowerScalarFieldEnum)[keyof typeof GrowerScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    growerId: 'growerId',
    buyerFirmId: 'buyerFirmId',
    fruitType: 'fruitType',
    quantity: 'quantity',
    unit: 'unit',
    rate: 'rate',
    grossAmount: 'grossAmount',
    commission: 'commission',
    labour: 'labour',
    freight: 'freight',
    association: 'association',
    printing: 'printing',
    miscellaneous: 'miscellaneous',
    totalAmount: 'totalAmount',
    receivedAt: 'receivedAt',
    notes: 'notes',
    notified: 'notified',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    growerId: 'growerId',
    buyerFirmId: 'buyerFirmId',
    amount: 'amount',
    notes: 'notes',
    paidAt: 'paidAt',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    id: 'id',
    mobile: 'mobile',
    otpHash: 'otpHash',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    growerId: 'growerId',
    message: 'message',
    sentAt: 'sentAt',
    status: 'status',
    type: 'type'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const AgreementScalarFieldEnum: {
    id: 'id',
    growerId: 'growerId',
    pledgedProduce: 'pledgedProduce',
    paymentTerms: 'paymentTerms',
    installments: 'installments',
    buyerSign: 'buyerSign',
    validUntil: 'validUntil',
    signedAt: 'signedAt',
    createdAt: 'createdAt'
  };

  export type AgreementScalarFieldEnum = (typeof AgreementScalarFieldEnum)[keyof typeof AgreementScalarFieldEnum]


  export const DraftTransactionScalarFieldEnum: {
    id: 'id',
    growerId: 'growerId',
    buyerFirmId: 'buyerFirmId',
    fruitType: 'fruitType',
    quantity: 'quantity',
    unit: 'unit',
    rate: 'rate',
    notes: 'notes',
    createdById: 'createdById',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type DraftTransactionScalarFieldEnum = (typeof DraftTransactionScalarFieldEnum)[keyof typeof DraftTransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type BuyerFirmWhereInput = {
    AND?: BuyerFirmWhereInput | BuyerFirmWhereInput[]
    OR?: BuyerFirmWhereInput[]
    NOT?: BuyerFirmWhereInput | BuyerFirmWhereInput[]
    id?: StringFilter<"BuyerFirm"> | string
    uniqueId?: StringFilter<"BuyerFirm"> | string
    firmName?: StringFilter<"BuyerFirm"> | string
    ownerName?: StringFilter<"BuyerFirm"> | string
    mobile?: StringFilter<"BuyerFirm"> | string
    subscriptionPlan?: StringFilter<"BuyerFirm"> | string
    subscriptionExpiry?: DateTimeNullableFilter<"BuyerFirm"> | Date | string | null
    createdAt?: DateTimeFilter<"BuyerFirm"> | Date | string
    logoUrl?: StringNullableFilter<"BuyerFirm"> | string | null
    users?: UserListRelationFilter
    growers?: GrowerListRelationFilter
    transactions?: TransactionListRelationFilter
    payments?: PaymentListRelationFilter
    draftTransactions?: DraftTransactionListRelationFilter
  }

  export type BuyerFirmOrderByWithRelationInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    firmName?: SortOrder
    ownerName?: SortOrder
    mobile?: SortOrder
    subscriptionPlan?: SortOrder
    subscriptionExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    growers?: GrowerOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    draftTransactions?: DraftTransactionOrderByRelationAggregateInput
  }

  export type BuyerFirmWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uniqueId?: string
    mobile?: string
    AND?: BuyerFirmWhereInput | BuyerFirmWhereInput[]
    OR?: BuyerFirmWhereInput[]
    NOT?: BuyerFirmWhereInput | BuyerFirmWhereInput[]
    firmName?: StringFilter<"BuyerFirm"> | string
    ownerName?: StringFilter<"BuyerFirm"> | string
    subscriptionPlan?: StringFilter<"BuyerFirm"> | string
    subscriptionExpiry?: DateTimeNullableFilter<"BuyerFirm"> | Date | string | null
    createdAt?: DateTimeFilter<"BuyerFirm"> | Date | string
    logoUrl?: StringNullableFilter<"BuyerFirm"> | string | null
    users?: UserListRelationFilter
    growers?: GrowerListRelationFilter
    transactions?: TransactionListRelationFilter
    payments?: PaymentListRelationFilter
    draftTransactions?: DraftTransactionListRelationFilter
  }, "id" | "uniqueId" | "mobile">

  export type BuyerFirmOrderByWithAggregationInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    firmName?: SortOrder
    ownerName?: SortOrder
    mobile?: SortOrder
    subscriptionPlan?: SortOrder
    subscriptionExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    _count?: BuyerFirmCountOrderByAggregateInput
    _max?: BuyerFirmMaxOrderByAggregateInput
    _min?: BuyerFirmMinOrderByAggregateInput
  }

  export type BuyerFirmScalarWhereWithAggregatesInput = {
    AND?: BuyerFirmScalarWhereWithAggregatesInput | BuyerFirmScalarWhereWithAggregatesInput[]
    OR?: BuyerFirmScalarWhereWithAggregatesInput[]
    NOT?: BuyerFirmScalarWhereWithAggregatesInput | BuyerFirmScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BuyerFirm"> | string
    uniqueId?: StringWithAggregatesFilter<"BuyerFirm"> | string
    firmName?: StringWithAggregatesFilter<"BuyerFirm"> | string
    ownerName?: StringWithAggregatesFilter<"BuyerFirm"> | string
    mobile?: StringWithAggregatesFilter<"BuyerFirm"> | string
    subscriptionPlan?: StringWithAggregatesFilter<"BuyerFirm"> | string
    subscriptionExpiry?: DateTimeNullableWithAggregatesFilter<"BuyerFirm"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BuyerFirm"> | Date | string
    logoUrl?: StringNullableWithAggregatesFilter<"BuyerFirm"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    buyerFirmId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    buyerFirm?: XOR<BuyerFirmScalarRelationFilter, BuyerFirmWhereInput>
    draftTransactions?: DraftTransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    mobile?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    buyerFirmId?: SortOrder
    createdAt?: SortOrder
    buyerFirm?: BuyerFirmOrderByWithRelationInput
    draftTransactions?: DraftTransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mobile_buyerFirmId?: UserMobileBuyerFirmIdCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    mobile?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    buyerFirmId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    buyerFirm?: XOR<BuyerFirmScalarRelationFilter, BuyerFirmWhereInput>
    draftTransactions?: DraftTransactionListRelationFilter
  }, "id" | "mobile_buyerFirmId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    mobile?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    buyerFirmId?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    mobile?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    buyerFirmId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GrowerWhereInput = {
    AND?: GrowerWhereInput | GrowerWhereInput[]
    OR?: GrowerWhereInput[]
    NOT?: GrowerWhereInput | GrowerWhereInput[]
    id?: StringFilter<"Grower"> | string
    name?: StringFilter<"Grower"> | string
    mobile?: StringFilter<"Grower"> | string
    address?: StringNullableFilter<"Grower"> | string | null
    buyerFirmId?: StringFilter<"Grower"> | string
    createdAt?: DateTimeFilter<"Grower"> | Date | string
    buyerFirm?: XOR<BuyerFirmScalarRelationFilter, BuyerFirmWhereInput>
    transactions?: TransactionListRelationFilter
    payments?: PaymentListRelationFilter
    notifications?: NotificationListRelationFilter
    agreements?: AgreementListRelationFilter
    draftTransactions?: DraftTransactionListRelationFilter
  }

  export type GrowerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    address?: SortOrderInput | SortOrder
    buyerFirmId?: SortOrder
    createdAt?: SortOrder
    buyerFirm?: BuyerFirmOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    agreements?: AgreementOrderByRelationAggregateInput
    draftTransactions?: DraftTransactionOrderByRelationAggregateInput
  }

  export type GrowerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mobile_buyerFirmId?: GrowerMobileBuyerFirmIdCompoundUniqueInput
    AND?: GrowerWhereInput | GrowerWhereInput[]
    OR?: GrowerWhereInput[]
    NOT?: GrowerWhereInput | GrowerWhereInput[]
    name?: StringFilter<"Grower"> | string
    mobile?: StringFilter<"Grower"> | string
    address?: StringNullableFilter<"Grower"> | string | null
    buyerFirmId?: StringFilter<"Grower"> | string
    createdAt?: DateTimeFilter<"Grower"> | Date | string
    buyerFirm?: XOR<BuyerFirmScalarRelationFilter, BuyerFirmWhereInput>
    transactions?: TransactionListRelationFilter
    payments?: PaymentListRelationFilter
    notifications?: NotificationListRelationFilter
    agreements?: AgreementListRelationFilter
    draftTransactions?: DraftTransactionListRelationFilter
  }, "id" | "mobile_buyerFirmId">

  export type GrowerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    address?: SortOrderInput | SortOrder
    buyerFirmId?: SortOrder
    createdAt?: SortOrder
    _count?: GrowerCountOrderByAggregateInput
    _max?: GrowerMaxOrderByAggregateInput
    _min?: GrowerMinOrderByAggregateInput
  }

  export type GrowerScalarWhereWithAggregatesInput = {
    AND?: GrowerScalarWhereWithAggregatesInput | GrowerScalarWhereWithAggregatesInput[]
    OR?: GrowerScalarWhereWithAggregatesInput[]
    NOT?: GrowerScalarWhereWithAggregatesInput | GrowerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Grower"> | string
    name?: StringWithAggregatesFilter<"Grower"> | string
    mobile?: StringWithAggregatesFilter<"Grower"> | string
    address?: StringNullableWithAggregatesFilter<"Grower"> | string | null
    buyerFirmId?: StringWithAggregatesFilter<"Grower"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Grower"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    growerId?: StringFilter<"Transaction"> | string
    buyerFirmId?: StringFilter<"Transaction"> | string
    fruitType?: StringFilter<"Transaction"> | string
    quantity?: FloatFilter<"Transaction"> | number
    unit?: StringFilter<"Transaction"> | string
    rate?: FloatFilter<"Transaction"> | number
    grossAmount?: FloatFilter<"Transaction"> | number
    commission?: FloatFilter<"Transaction"> | number
    labour?: FloatFilter<"Transaction"> | number
    freight?: FloatFilter<"Transaction"> | number
    association?: FloatFilter<"Transaction"> | number
    printing?: FloatFilter<"Transaction"> | number
    miscellaneous?: FloatFilter<"Transaction"> | number
    totalAmount?: FloatFilter<"Transaction"> | number
    receivedAt?: DateTimeFilter<"Transaction"> | Date | string
    notes?: StringNullableFilter<"Transaction"> | string | null
    notified?: BoolFilter<"Transaction"> | boolean
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    grower?: XOR<GrowerScalarRelationFilter, GrowerWhereInput>
    buyerFirm?: XOR<BuyerFirmScalarRelationFilter, BuyerFirmWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    growerId?: SortOrder
    buyerFirmId?: SortOrder
    fruitType?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    rate?: SortOrder
    grossAmount?: SortOrder
    commission?: SortOrder
    labour?: SortOrder
    freight?: SortOrder
    association?: SortOrder
    printing?: SortOrder
    miscellaneous?: SortOrder
    totalAmount?: SortOrder
    receivedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    notified?: SortOrder
    createdAt?: SortOrder
    grower?: GrowerOrderByWithRelationInput
    buyerFirm?: BuyerFirmOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    growerId?: StringFilter<"Transaction"> | string
    buyerFirmId?: StringFilter<"Transaction"> | string
    fruitType?: StringFilter<"Transaction"> | string
    quantity?: FloatFilter<"Transaction"> | number
    unit?: StringFilter<"Transaction"> | string
    rate?: FloatFilter<"Transaction"> | number
    grossAmount?: FloatFilter<"Transaction"> | number
    commission?: FloatFilter<"Transaction"> | number
    labour?: FloatFilter<"Transaction"> | number
    freight?: FloatFilter<"Transaction"> | number
    association?: FloatFilter<"Transaction"> | number
    printing?: FloatFilter<"Transaction"> | number
    miscellaneous?: FloatFilter<"Transaction"> | number
    totalAmount?: FloatFilter<"Transaction"> | number
    receivedAt?: DateTimeFilter<"Transaction"> | Date | string
    notes?: StringNullableFilter<"Transaction"> | string | null
    notified?: BoolFilter<"Transaction"> | boolean
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    grower?: XOR<GrowerScalarRelationFilter, GrowerWhereInput>
    buyerFirm?: XOR<BuyerFirmScalarRelationFilter, BuyerFirmWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    growerId?: SortOrder
    buyerFirmId?: SortOrder
    fruitType?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    rate?: SortOrder
    grossAmount?: SortOrder
    commission?: SortOrder
    labour?: SortOrder
    freight?: SortOrder
    association?: SortOrder
    printing?: SortOrder
    miscellaneous?: SortOrder
    totalAmount?: SortOrder
    receivedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    notified?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    growerId?: StringWithAggregatesFilter<"Transaction"> | string
    buyerFirmId?: StringWithAggregatesFilter<"Transaction"> | string
    fruitType?: StringWithAggregatesFilter<"Transaction"> | string
    quantity?: FloatWithAggregatesFilter<"Transaction"> | number
    unit?: StringWithAggregatesFilter<"Transaction"> | string
    rate?: FloatWithAggregatesFilter<"Transaction"> | number
    grossAmount?: FloatWithAggregatesFilter<"Transaction"> | number
    commission?: FloatWithAggregatesFilter<"Transaction"> | number
    labour?: FloatWithAggregatesFilter<"Transaction"> | number
    freight?: FloatWithAggregatesFilter<"Transaction"> | number
    association?: FloatWithAggregatesFilter<"Transaction"> | number
    printing?: FloatWithAggregatesFilter<"Transaction"> | number
    miscellaneous?: FloatWithAggregatesFilter<"Transaction"> | number
    totalAmount?: FloatWithAggregatesFilter<"Transaction"> | number
    receivedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    notified?: BoolWithAggregatesFilter<"Transaction"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    growerId?: StringFilter<"Payment"> | string
    buyerFirmId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    notes?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    grower?: XOR<GrowerScalarRelationFilter, GrowerWhereInput>
    buyerFirm?: XOR<BuyerFirmScalarRelationFilter, BuyerFirmWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    growerId?: SortOrder
    buyerFirmId?: SortOrder
    amount?: SortOrder
    notes?: SortOrderInput | SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    grower?: GrowerOrderByWithRelationInput
    buyerFirm?: BuyerFirmOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    growerId?: StringFilter<"Payment"> | string
    buyerFirmId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    notes?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    grower?: XOR<GrowerScalarRelationFilter, GrowerWhereInput>
    buyerFirm?: XOR<BuyerFirmScalarRelationFilter, BuyerFirmWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    growerId?: SortOrder
    buyerFirmId?: SortOrder
    amount?: SortOrder
    notes?: SortOrderInput | SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    growerId?: StringWithAggregatesFilter<"Payment"> | string
    buyerFirmId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    notes?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paidAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    id?: StringFilter<"Otp"> | string
    mobile?: StringFilter<"Otp"> | string
    otpHash?: StringFilter<"Otp"> | string
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
    createdAt?: DateTimeFilter<"Otp"> | Date | string
  }

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder
    mobile?: SortOrder
    otpHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    mobile?: StringFilter<"Otp"> | string
    otpHash?: StringFilter<"Otp"> | string
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
    createdAt?: DateTimeFilter<"Otp"> | Date | string
  }, "id">

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder
    mobile?: SortOrder
    otpHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: OtpCountOrderByAggregateInput
    _max?: OtpMaxOrderByAggregateInput
    _min?: OtpMinOrderByAggregateInput
  }

  export type OtpScalarWhereWithAggregatesInput = {
    AND?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    OR?: OtpScalarWhereWithAggregatesInput[]
    NOT?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Otp"> | string
    mobile?: StringWithAggregatesFilter<"Otp"> | string
    otpHash?: StringWithAggregatesFilter<"Otp"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    growerId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    sentAt?: DateTimeFilter<"Notification"> | Date | string
    status?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    grower?: XOR<GrowerScalarRelationFilter, GrowerWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    growerId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    type?: SortOrder
    grower?: GrowerOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    growerId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    sentAt?: DateTimeFilter<"Notification"> | Date | string
    status?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    grower?: XOR<GrowerScalarRelationFilter, GrowerWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    growerId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    type?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    growerId?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    sentAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    status?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
  }

  export type AgreementWhereInput = {
    AND?: AgreementWhereInput | AgreementWhereInput[]
    OR?: AgreementWhereInput[]
    NOT?: AgreementWhereInput | AgreementWhereInput[]
    id?: StringFilter<"Agreement"> | string
    growerId?: StringFilter<"Agreement"> | string
    pledgedProduce?: StringFilter<"Agreement"> | string
    paymentTerms?: StringFilter<"Agreement"> | string
    installments?: StringFilter<"Agreement"> | string
    buyerSign?: StringFilter<"Agreement"> | string
    validUntil?: DateTimeNullableFilter<"Agreement"> | Date | string | null
    signedAt?: DateTimeFilter<"Agreement"> | Date | string
    createdAt?: DateTimeFilter<"Agreement"> | Date | string
    grower?: XOR<GrowerScalarRelationFilter, GrowerWhereInput>
  }

  export type AgreementOrderByWithRelationInput = {
    id?: SortOrder
    growerId?: SortOrder
    pledgedProduce?: SortOrder
    paymentTerms?: SortOrder
    installments?: SortOrder
    buyerSign?: SortOrder
    validUntil?: SortOrderInput | SortOrder
    signedAt?: SortOrder
    createdAt?: SortOrder
    grower?: GrowerOrderByWithRelationInput
  }

  export type AgreementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgreementWhereInput | AgreementWhereInput[]
    OR?: AgreementWhereInput[]
    NOT?: AgreementWhereInput | AgreementWhereInput[]
    growerId?: StringFilter<"Agreement"> | string
    pledgedProduce?: StringFilter<"Agreement"> | string
    paymentTerms?: StringFilter<"Agreement"> | string
    installments?: StringFilter<"Agreement"> | string
    buyerSign?: StringFilter<"Agreement"> | string
    validUntil?: DateTimeNullableFilter<"Agreement"> | Date | string | null
    signedAt?: DateTimeFilter<"Agreement"> | Date | string
    createdAt?: DateTimeFilter<"Agreement"> | Date | string
    grower?: XOR<GrowerScalarRelationFilter, GrowerWhereInput>
  }, "id">

  export type AgreementOrderByWithAggregationInput = {
    id?: SortOrder
    growerId?: SortOrder
    pledgedProduce?: SortOrder
    paymentTerms?: SortOrder
    installments?: SortOrder
    buyerSign?: SortOrder
    validUntil?: SortOrderInput | SortOrder
    signedAt?: SortOrder
    createdAt?: SortOrder
    _count?: AgreementCountOrderByAggregateInput
    _max?: AgreementMaxOrderByAggregateInput
    _min?: AgreementMinOrderByAggregateInput
  }

  export type AgreementScalarWhereWithAggregatesInput = {
    AND?: AgreementScalarWhereWithAggregatesInput | AgreementScalarWhereWithAggregatesInput[]
    OR?: AgreementScalarWhereWithAggregatesInput[]
    NOT?: AgreementScalarWhereWithAggregatesInput | AgreementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agreement"> | string
    growerId?: StringWithAggregatesFilter<"Agreement"> | string
    pledgedProduce?: StringWithAggregatesFilter<"Agreement"> | string
    paymentTerms?: StringWithAggregatesFilter<"Agreement"> | string
    installments?: StringWithAggregatesFilter<"Agreement"> | string
    buyerSign?: StringWithAggregatesFilter<"Agreement"> | string
    validUntil?: DateTimeNullableWithAggregatesFilter<"Agreement"> | Date | string | null
    signedAt?: DateTimeWithAggregatesFilter<"Agreement"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Agreement"> | Date | string
  }

  export type DraftTransactionWhereInput = {
    AND?: DraftTransactionWhereInput | DraftTransactionWhereInput[]
    OR?: DraftTransactionWhereInput[]
    NOT?: DraftTransactionWhereInput | DraftTransactionWhereInput[]
    id?: StringFilter<"DraftTransaction"> | string
    growerId?: StringFilter<"DraftTransaction"> | string
    buyerFirmId?: StringFilter<"DraftTransaction"> | string
    fruitType?: StringFilter<"DraftTransaction"> | string
    quantity?: FloatFilter<"DraftTransaction"> | number
    unit?: StringFilter<"DraftTransaction"> | string
    rate?: FloatFilter<"DraftTransaction"> | number
    notes?: StringNullableFilter<"DraftTransaction"> | string | null
    createdById?: StringFilter<"DraftTransaction"> | string
    status?: StringFilter<"DraftTransaction"> | string
    createdAt?: DateTimeFilter<"DraftTransaction"> | Date | string
    grower?: XOR<GrowerScalarRelationFilter, GrowerWhereInput>
    buyerFirm?: XOR<BuyerFirmScalarRelationFilter, BuyerFirmWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DraftTransactionOrderByWithRelationInput = {
    id?: SortOrder
    growerId?: SortOrder
    buyerFirmId?: SortOrder
    fruitType?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    rate?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdById?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    grower?: GrowerOrderByWithRelationInput
    buyerFirm?: BuyerFirmOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type DraftTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DraftTransactionWhereInput | DraftTransactionWhereInput[]
    OR?: DraftTransactionWhereInput[]
    NOT?: DraftTransactionWhereInput | DraftTransactionWhereInput[]
    growerId?: StringFilter<"DraftTransaction"> | string
    buyerFirmId?: StringFilter<"DraftTransaction"> | string
    fruitType?: StringFilter<"DraftTransaction"> | string
    quantity?: FloatFilter<"DraftTransaction"> | number
    unit?: StringFilter<"DraftTransaction"> | string
    rate?: FloatFilter<"DraftTransaction"> | number
    notes?: StringNullableFilter<"DraftTransaction"> | string | null
    createdById?: StringFilter<"DraftTransaction"> | string
    status?: StringFilter<"DraftTransaction"> | string
    createdAt?: DateTimeFilter<"DraftTransaction"> | Date | string
    grower?: XOR<GrowerScalarRelationFilter, GrowerWhereInput>
    buyerFirm?: XOR<BuyerFirmScalarRelationFilter, BuyerFirmWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DraftTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    growerId?: SortOrder
    buyerFirmId?: SortOrder
    fruitType?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    rate?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdById?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: DraftTransactionCountOrderByAggregateInput
    _avg?: DraftTransactionAvgOrderByAggregateInput
    _max?: DraftTransactionMaxOrderByAggregateInput
    _min?: DraftTransactionMinOrderByAggregateInput
    _sum?: DraftTransactionSumOrderByAggregateInput
  }

  export type DraftTransactionScalarWhereWithAggregatesInput = {
    AND?: DraftTransactionScalarWhereWithAggregatesInput | DraftTransactionScalarWhereWithAggregatesInput[]
    OR?: DraftTransactionScalarWhereWithAggregatesInput[]
    NOT?: DraftTransactionScalarWhereWithAggregatesInput | DraftTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DraftTransaction"> | string
    growerId?: StringWithAggregatesFilter<"DraftTransaction"> | string
    buyerFirmId?: StringWithAggregatesFilter<"DraftTransaction"> | string
    fruitType?: StringWithAggregatesFilter<"DraftTransaction"> | string
    quantity?: FloatWithAggregatesFilter<"DraftTransaction"> | number
    unit?: StringWithAggregatesFilter<"DraftTransaction"> | string
    rate?: FloatWithAggregatesFilter<"DraftTransaction"> | number
    notes?: StringNullableWithAggregatesFilter<"DraftTransaction"> | string | null
    createdById?: StringWithAggregatesFilter<"DraftTransaction"> | string
    status?: StringWithAggregatesFilter<"DraftTransaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DraftTransaction"> | Date | string
  }

  export type BuyerFirmCreateInput = {
    id?: string
    uniqueId: string
    firmName: string
    ownerName: string
    mobile: string
    subscriptionPlan?: string
    subscriptionExpiry?: Date | string | null
    createdAt?: Date | string
    logoUrl?: string | null
    users?: UserCreateNestedManyWithoutBuyerFirmInput
    growers?: GrowerCreateNestedManyWithoutBuyerFirmInput
    transactions?: TransactionCreateNestedManyWithoutBuyerFirmInput
    payments?: PaymentCreateNestedManyWithoutBuyerFirmInput
    draftTransactions?: DraftTransactionCreateNestedManyWithoutBuyerFirmInput
  }

  export type BuyerFirmUncheckedCreateInput = {
    id?: string
    uniqueId: string
    firmName: string
    ownerName: string
    mobile: string
    subscriptionPlan?: string
    subscriptionExpiry?: Date | string | null
    createdAt?: Date | string
    logoUrl?: string | null
    users?: UserUncheckedCreateNestedManyWithoutBuyerFirmInput
    growers?: GrowerUncheckedCreateNestedManyWithoutBuyerFirmInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutBuyerFirmInput
    payments?: PaymentUncheckedCreateNestedManyWithoutBuyerFirmInput
    draftTransactions?: DraftTransactionUncheckedCreateNestedManyWithoutBuyerFirmInput
  }

  export type BuyerFirmUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    subscriptionExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutBuyerFirmNestedInput
    growers?: GrowerUpdateManyWithoutBuyerFirmNestedInput
    transactions?: TransactionUpdateManyWithoutBuyerFirmNestedInput
    payments?: PaymentUpdateManyWithoutBuyerFirmNestedInput
    draftTransactions?: DraftTransactionUpdateManyWithoutBuyerFirmNestedInput
  }

  export type BuyerFirmUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    subscriptionExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutBuyerFirmNestedInput
    growers?: GrowerUncheckedUpdateManyWithoutBuyerFirmNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutBuyerFirmNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutBuyerFirmNestedInput
    draftTransactions?: DraftTransactionUncheckedUpdateManyWithoutBuyerFirmNestedInput
  }

  export type BuyerFirmCreateManyInput = {
    id?: string
    uniqueId: string
    firmName: string
    ownerName: string
    mobile: string
    subscriptionPlan?: string
    subscriptionExpiry?: Date | string | null
    createdAt?: Date | string
    logoUrl?: string | null
  }

  export type BuyerFirmUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    subscriptionExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BuyerFirmUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    subscriptionExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    mobile: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    buyerFirm: BuyerFirmCreateNestedOneWithoutUsersInput
    draftTransactions?: DraftTransactionCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    mobile: string
    name?: string | null
    role?: string
    buyerFirmId: string
    createdAt?: Date | string
    draftTransactions?: DraftTransactionUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerFirm?: BuyerFirmUpdateOneRequiredWithoutUsersNestedInput
    draftTransactions?: DraftTransactionUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draftTransactions?: DraftTransactionUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    mobile: string
    name?: string | null
    role?: string
    buyerFirmId: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrowerCreateInput = {
    id?: string
    name: string
    mobile: string
    address?: string | null
    createdAt?: Date | string
    buyerFirm: BuyerFirmCreateNestedOneWithoutGrowersInput
    transactions?: TransactionCreateNestedManyWithoutGrowerInput
    payments?: PaymentCreateNestedManyWithoutGrowerInput
    notifications?: NotificationCreateNestedManyWithoutGrowerInput
    agreements?: AgreementCreateNestedManyWithoutGrowerInput
    draftTransactions?: DraftTransactionCreateNestedManyWithoutGrowerInput
  }

  export type GrowerUncheckedCreateInput = {
    id?: string
    name: string
    mobile: string
    address?: string | null
    buyerFirmId: string
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutGrowerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutGrowerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutGrowerInput
    agreements?: AgreementUncheckedCreateNestedManyWithoutGrowerInput
    draftTransactions?: DraftTransactionUncheckedCreateNestedManyWithoutGrowerInput
  }

  export type GrowerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerFirm?: BuyerFirmUpdateOneRequiredWithoutGrowersNestedInput
    transactions?: TransactionUpdateManyWithoutGrowerNestedInput
    payments?: PaymentUpdateManyWithoutGrowerNestedInput
    notifications?: NotificationUpdateManyWithoutGrowerNestedInput
    agreements?: AgreementUpdateManyWithoutGrowerNestedInput
    draftTransactions?: DraftTransactionUpdateManyWithoutGrowerNestedInput
  }

  export type GrowerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutGrowerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutGrowerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutGrowerNestedInput
    agreements?: AgreementUncheckedUpdateManyWithoutGrowerNestedInput
    draftTransactions?: DraftTransactionUncheckedUpdateManyWithoutGrowerNestedInput
  }

  export type GrowerCreateManyInput = {
    id?: string
    name: string
    mobile: string
    address?: string | null
    buyerFirmId: string
    createdAt?: Date | string
  }

  export type GrowerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrowerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    grossAmount?: number
    commission?: number
    labour?: number
    freight?: number
    association?: number
    printing?: number
    miscellaneous?: number
    totalAmount: number
    receivedAt?: Date | string
    notes?: string | null
    notified?: boolean
    createdAt?: Date | string
    grower: GrowerCreateNestedOneWithoutTransactionsInput
    buyerFirm: BuyerFirmCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    growerId: string
    buyerFirmId: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    grossAmount?: number
    commission?: number
    labour?: number
    freight?: number
    association?: number
    printing?: number
    miscellaneous?: number
    totalAmount: number
    receivedAt?: Date | string
    notes?: string | null
    notified?: boolean
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    grossAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    labour?: FloatFieldUpdateOperationsInput | number
    freight?: FloatFieldUpdateOperationsInput | number
    association?: FloatFieldUpdateOperationsInput | number
    printing?: FloatFieldUpdateOperationsInput | number
    miscellaneous?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grower?: GrowerUpdateOneRequiredWithoutTransactionsNestedInput
    buyerFirm?: BuyerFirmUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    growerId?: StringFieldUpdateOperationsInput | string
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    grossAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    labour?: FloatFieldUpdateOperationsInput | number
    freight?: FloatFieldUpdateOperationsInput | number
    association?: FloatFieldUpdateOperationsInput | number
    printing?: FloatFieldUpdateOperationsInput | number
    miscellaneous?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    growerId: string
    buyerFirmId: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    grossAmount?: number
    commission?: number
    labour?: number
    freight?: number
    association?: number
    printing?: number
    miscellaneous?: number
    totalAmount: number
    receivedAt?: Date | string
    notes?: string | null
    notified?: boolean
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    grossAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    labour?: FloatFieldUpdateOperationsInput | number
    freight?: FloatFieldUpdateOperationsInput | number
    association?: FloatFieldUpdateOperationsInput | number
    printing?: FloatFieldUpdateOperationsInput | number
    miscellaneous?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    growerId?: StringFieldUpdateOperationsInput | string
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    grossAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    labour?: FloatFieldUpdateOperationsInput | number
    freight?: FloatFieldUpdateOperationsInput | number
    association?: FloatFieldUpdateOperationsInput | number
    printing?: FloatFieldUpdateOperationsInput | number
    miscellaneous?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    notes?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
    grower: GrowerCreateNestedOneWithoutPaymentsInput
    buyerFirm: BuyerFirmCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    growerId: string
    buyerFirmId: string
    amount: number
    notes?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grower?: GrowerUpdateOneRequiredWithoutPaymentsNestedInput
    buyerFirm?: BuyerFirmUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    growerId?: StringFieldUpdateOperationsInput | string
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    growerId: string
    buyerFirmId: string
    amount: number
    notes?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    growerId?: StringFieldUpdateOperationsInput | string
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateInput = {
    id?: string
    mobile: string
    otpHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OtpUncheckedCreateInput = {
    id?: string
    mobile: string
    otpHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OtpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateManyInput = {
    id?: string
    mobile: string
    otpHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OtpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    message: string
    sentAt?: Date | string
    status?: string
    type?: string
    grower: GrowerCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    growerId: string
    message: string
    sentAt?: Date | string
    status?: string
    type?: string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    grower?: GrowerUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    growerId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    growerId: string
    message: string
    sentAt?: Date | string
    status?: string
    type?: string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    growerId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type AgreementCreateInput = {
    id?: string
    pledgedProduce: string
    paymentTerms: string
    installments: string
    buyerSign: string
    validUntil?: Date | string | null
    signedAt?: Date | string
    createdAt?: Date | string
    grower: GrowerCreateNestedOneWithoutAgreementsInput
  }

  export type AgreementUncheckedCreateInput = {
    id?: string
    growerId: string
    pledgedProduce: string
    paymentTerms: string
    installments: string
    buyerSign: string
    validUntil?: Date | string | null
    signedAt?: Date | string
    createdAt?: Date | string
  }

  export type AgreementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pledgedProduce?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    installments?: StringFieldUpdateOperationsInput | string
    buyerSign?: StringFieldUpdateOperationsInput | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grower?: GrowerUpdateOneRequiredWithoutAgreementsNestedInput
  }

  export type AgreementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    growerId?: StringFieldUpdateOperationsInput | string
    pledgedProduce?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    installments?: StringFieldUpdateOperationsInput | string
    buyerSign?: StringFieldUpdateOperationsInput | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgreementCreateManyInput = {
    id?: string
    growerId: string
    pledgedProduce: string
    paymentTerms: string
    installments: string
    buyerSign: string
    validUntil?: Date | string | null
    signedAt?: Date | string
    createdAt?: Date | string
  }

  export type AgreementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pledgedProduce?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    installments?: StringFieldUpdateOperationsInput | string
    buyerSign?: StringFieldUpdateOperationsInput | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgreementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    growerId?: StringFieldUpdateOperationsInput | string
    pledgedProduce?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    installments?: StringFieldUpdateOperationsInput | string
    buyerSign?: StringFieldUpdateOperationsInput | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftTransactionCreateInput = {
    id?: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    notes?: string | null
    status?: string
    createdAt?: Date | string
    grower: GrowerCreateNestedOneWithoutDraftTransactionsInput
    buyerFirm: BuyerFirmCreateNestedOneWithoutDraftTransactionsInput
    createdBy: UserCreateNestedOneWithoutDraftTransactionsInput
  }

  export type DraftTransactionUncheckedCreateInput = {
    id?: string
    growerId: string
    buyerFirmId: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    notes?: string | null
    createdById: string
    status?: string
    createdAt?: Date | string
  }

  export type DraftTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grower?: GrowerUpdateOneRequiredWithoutDraftTransactionsNestedInput
    buyerFirm?: BuyerFirmUpdateOneRequiredWithoutDraftTransactionsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutDraftTransactionsNestedInput
  }

  export type DraftTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    growerId?: StringFieldUpdateOperationsInput | string
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftTransactionCreateManyInput = {
    id?: string
    growerId: string
    buyerFirmId: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    notes?: string | null
    createdById: string
    status?: string
    createdAt?: Date | string
  }

  export type DraftTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    growerId?: StringFieldUpdateOperationsInput | string
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type GrowerListRelationFilter = {
    every?: GrowerWhereInput
    some?: GrowerWhereInput
    none?: GrowerWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type DraftTransactionListRelationFilter = {
    every?: DraftTransactionWhereInput
    some?: DraftTransactionWhereInput
    none?: DraftTransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GrowerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DraftTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BuyerFirmCountOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    firmName?: SortOrder
    ownerName?: SortOrder
    mobile?: SortOrder
    subscriptionPlan?: SortOrder
    subscriptionExpiry?: SortOrder
    createdAt?: SortOrder
    logoUrl?: SortOrder
  }

  export type BuyerFirmMaxOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    firmName?: SortOrder
    ownerName?: SortOrder
    mobile?: SortOrder
    subscriptionPlan?: SortOrder
    subscriptionExpiry?: SortOrder
    createdAt?: SortOrder
    logoUrl?: SortOrder
  }

  export type BuyerFirmMinOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    firmName?: SortOrder
    ownerName?: SortOrder
    mobile?: SortOrder
    subscriptionPlan?: SortOrder
    subscriptionExpiry?: SortOrder
    createdAt?: SortOrder
    logoUrl?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BuyerFirmScalarRelationFilter = {
    is?: BuyerFirmWhereInput
    isNot?: BuyerFirmWhereInput
  }

  export type UserMobileBuyerFirmIdCompoundUniqueInput = {
    mobile: string
    buyerFirmId: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    name?: SortOrder
    role?: SortOrder
    buyerFirmId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    name?: SortOrder
    role?: SortOrder
    buyerFirmId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    name?: SortOrder
    role?: SortOrder
    buyerFirmId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type AgreementListRelationFilter = {
    every?: AgreementWhereInput
    some?: AgreementWhereInput
    none?: AgreementWhereInput
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgreementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GrowerMobileBuyerFirmIdCompoundUniqueInput = {
    mobile: string
    buyerFirmId: string
  }

  export type GrowerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    address?: SortOrder
    buyerFirmId?: SortOrder
    createdAt?: SortOrder
  }

  export type GrowerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    address?: SortOrder
    buyerFirmId?: SortOrder
    createdAt?: SortOrder
  }

  export type GrowerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    address?: SortOrder
    buyerFirmId?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GrowerScalarRelationFilter = {
    is?: GrowerWhereInput
    isNot?: GrowerWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    growerId?: SortOrder
    buyerFirmId?: SortOrder
    fruitType?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    rate?: SortOrder
    grossAmount?: SortOrder
    commission?: SortOrder
    labour?: SortOrder
    freight?: SortOrder
    association?: SortOrder
    printing?: SortOrder
    miscellaneous?: SortOrder
    totalAmount?: SortOrder
    receivedAt?: SortOrder
    notes?: SortOrder
    notified?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    quantity?: SortOrder
    rate?: SortOrder
    grossAmount?: SortOrder
    commission?: SortOrder
    labour?: SortOrder
    freight?: SortOrder
    association?: SortOrder
    printing?: SortOrder
    miscellaneous?: SortOrder
    totalAmount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    growerId?: SortOrder
    buyerFirmId?: SortOrder
    fruitType?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    rate?: SortOrder
    grossAmount?: SortOrder
    commission?: SortOrder
    labour?: SortOrder
    freight?: SortOrder
    association?: SortOrder
    printing?: SortOrder
    miscellaneous?: SortOrder
    totalAmount?: SortOrder
    receivedAt?: SortOrder
    notes?: SortOrder
    notified?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    growerId?: SortOrder
    buyerFirmId?: SortOrder
    fruitType?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    rate?: SortOrder
    grossAmount?: SortOrder
    commission?: SortOrder
    labour?: SortOrder
    freight?: SortOrder
    association?: SortOrder
    printing?: SortOrder
    miscellaneous?: SortOrder
    totalAmount?: SortOrder
    receivedAt?: SortOrder
    notes?: SortOrder
    notified?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    quantity?: SortOrder
    rate?: SortOrder
    grossAmount?: SortOrder
    commission?: SortOrder
    labour?: SortOrder
    freight?: SortOrder
    association?: SortOrder
    printing?: SortOrder
    miscellaneous?: SortOrder
    totalAmount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    growerId?: SortOrder
    buyerFirmId?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    growerId?: SortOrder
    buyerFirmId?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    growerId?: SortOrder
    buyerFirmId?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    otpHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    otpHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    otpHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    growerId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    type?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    growerId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    type?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    growerId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    type?: SortOrder
  }

  export type AgreementCountOrderByAggregateInput = {
    id?: SortOrder
    growerId?: SortOrder
    pledgedProduce?: SortOrder
    paymentTerms?: SortOrder
    installments?: SortOrder
    buyerSign?: SortOrder
    validUntil?: SortOrder
    signedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AgreementMaxOrderByAggregateInput = {
    id?: SortOrder
    growerId?: SortOrder
    pledgedProduce?: SortOrder
    paymentTerms?: SortOrder
    installments?: SortOrder
    buyerSign?: SortOrder
    validUntil?: SortOrder
    signedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AgreementMinOrderByAggregateInput = {
    id?: SortOrder
    growerId?: SortOrder
    pledgedProduce?: SortOrder
    paymentTerms?: SortOrder
    installments?: SortOrder
    buyerSign?: SortOrder
    validUntil?: SortOrder
    signedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DraftTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    growerId?: SortOrder
    buyerFirmId?: SortOrder
    fruitType?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    rate?: SortOrder
    notes?: SortOrder
    createdById?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type DraftTransactionAvgOrderByAggregateInput = {
    quantity?: SortOrder
    rate?: SortOrder
  }

  export type DraftTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    growerId?: SortOrder
    buyerFirmId?: SortOrder
    fruitType?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    rate?: SortOrder
    notes?: SortOrder
    createdById?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type DraftTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    growerId?: SortOrder
    buyerFirmId?: SortOrder
    fruitType?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    rate?: SortOrder
    notes?: SortOrder
    createdById?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type DraftTransactionSumOrderByAggregateInput = {
    quantity?: SortOrder
    rate?: SortOrder
  }

  export type UserCreateNestedManyWithoutBuyerFirmInput = {
    create?: XOR<UserCreateWithoutBuyerFirmInput, UserUncheckedCreateWithoutBuyerFirmInput> | UserCreateWithoutBuyerFirmInput[] | UserUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBuyerFirmInput | UserCreateOrConnectWithoutBuyerFirmInput[]
    createMany?: UserCreateManyBuyerFirmInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GrowerCreateNestedManyWithoutBuyerFirmInput = {
    create?: XOR<GrowerCreateWithoutBuyerFirmInput, GrowerUncheckedCreateWithoutBuyerFirmInput> | GrowerCreateWithoutBuyerFirmInput[] | GrowerUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: GrowerCreateOrConnectWithoutBuyerFirmInput | GrowerCreateOrConnectWithoutBuyerFirmInput[]
    createMany?: GrowerCreateManyBuyerFirmInputEnvelope
    connect?: GrowerWhereUniqueInput | GrowerWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutBuyerFirmInput = {
    create?: XOR<TransactionCreateWithoutBuyerFirmInput, TransactionUncheckedCreateWithoutBuyerFirmInput> | TransactionCreateWithoutBuyerFirmInput[] | TransactionUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBuyerFirmInput | TransactionCreateOrConnectWithoutBuyerFirmInput[]
    createMany?: TransactionCreateManyBuyerFirmInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutBuyerFirmInput = {
    create?: XOR<PaymentCreateWithoutBuyerFirmInput, PaymentUncheckedCreateWithoutBuyerFirmInput> | PaymentCreateWithoutBuyerFirmInput[] | PaymentUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBuyerFirmInput | PaymentCreateOrConnectWithoutBuyerFirmInput[]
    createMany?: PaymentCreateManyBuyerFirmInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type DraftTransactionCreateNestedManyWithoutBuyerFirmInput = {
    create?: XOR<DraftTransactionCreateWithoutBuyerFirmInput, DraftTransactionUncheckedCreateWithoutBuyerFirmInput> | DraftTransactionCreateWithoutBuyerFirmInput[] | DraftTransactionUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: DraftTransactionCreateOrConnectWithoutBuyerFirmInput | DraftTransactionCreateOrConnectWithoutBuyerFirmInput[]
    createMany?: DraftTransactionCreateManyBuyerFirmInputEnvelope
    connect?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBuyerFirmInput = {
    create?: XOR<UserCreateWithoutBuyerFirmInput, UserUncheckedCreateWithoutBuyerFirmInput> | UserCreateWithoutBuyerFirmInput[] | UserUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBuyerFirmInput | UserCreateOrConnectWithoutBuyerFirmInput[]
    createMany?: UserCreateManyBuyerFirmInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GrowerUncheckedCreateNestedManyWithoutBuyerFirmInput = {
    create?: XOR<GrowerCreateWithoutBuyerFirmInput, GrowerUncheckedCreateWithoutBuyerFirmInput> | GrowerCreateWithoutBuyerFirmInput[] | GrowerUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: GrowerCreateOrConnectWithoutBuyerFirmInput | GrowerCreateOrConnectWithoutBuyerFirmInput[]
    createMany?: GrowerCreateManyBuyerFirmInputEnvelope
    connect?: GrowerWhereUniqueInput | GrowerWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutBuyerFirmInput = {
    create?: XOR<TransactionCreateWithoutBuyerFirmInput, TransactionUncheckedCreateWithoutBuyerFirmInput> | TransactionCreateWithoutBuyerFirmInput[] | TransactionUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBuyerFirmInput | TransactionCreateOrConnectWithoutBuyerFirmInput[]
    createMany?: TransactionCreateManyBuyerFirmInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutBuyerFirmInput = {
    create?: XOR<PaymentCreateWithoutBuyerFirmInput, PaymentUncheckedCreateWithoutBuyerFirmInput> | PaymentCreateWithoutBuyerFirmInput[] | PaymentUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBuyerFirmInput | PaymentCreateOrConnectWithoutBuyerFirmInput[]
    createMany?: PaymentCreateManyBuyerFirmInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type DraftTransactionUncheckedCreateNestedManyWithoutBuyerFirmInput = {
    create?: XOR<DraftTransactionCreateWithoutBuyerFirmInput, DraftTransactionUncheckedCreateWithoutBuyerFirmInput> | DraftTransactionCreateWithoutBuyerFirmInput[] | DraftTransactionUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: DraftTransactionCreateOrConnectWithoutBuyerFirmInput | DraftTransactionCreateOrConnectWithoutBuyerFirmInput[]
    createMany?: DraftTransactionCreateManyBuyerFirmInputEnvelope
    connect?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateManyWithoutBuyerFirmNestedInput = {
    create?: XOR<UserCreateWithoutBuyerFirmInput, UserUncheckedCreateWithoutBuyerFirmInput> | UserCreateWithoutBuyerFirmInput[] | UserUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBuyerFirmInput | UserCreateOrConnectWithoutBuyerFirmInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBuyerFirmInput | UserUpsertWithWhereUniqueWithoutBuyerFirmInput[]
    createMany?: UserCreateManyBuyerFirmInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBuyerFirmInput | UserUpdateWithWhereUniqueWithoutBuyerFirmInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBuyerFirmInput | UserUpdateManyWithWhereWithoutBuyerFirmInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GrowerUpdateManyWithoutBuyerFirmNestedInput = {
    create?: XOR<GrowerCreateWithoutBuyerFirmInput, GrowerUncheckedCreateWithoutBuyerFirmInput> | GrowerCreateWithoutBuyerFirmInput[] | GrowerUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: GrowerCreateOrConnectWithoutBuyerFirmInput | GrowerCreateOrConnectWithoutBuyerFirmInput[]
    upsert?: GrowerUpsertWithWhereUniqueWithoutBuyerFirmInput | GrowerUpsertWithWhereUniqueWithoutBuyerFirmInput[]
    createMany?: GrowerCreateManyBuyerFirmInputEnvelope
    set?: GrowerWhereUniqueInput | GrowerWhereUniqueInput[]
    disconnect?: GrowerWhereUniqueInput | GrowerWhereUniqueInput[]
    delete?: GrowerWhereUniqueInput | GrowerWhereUniqueInput[]
    connect?: GrowerWhereUniqueInput | GrowerWhereUniqueInput[]
    update?: GrowerUpdateWithWhereUniqueWithoutBuyerFirmInput | GrowerUpdateWithWhereUniqueWithoutBuyerFirmInput[]
    updateMany?: GrowerUpdateManyWithWhereWithoutBuyerFirmInput | GrowerUpdateManyWithWhereWithoutBuyerFirmInput[]
    deleteMany?: GrowerScalarWhereInput | GrowerScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutBuyerFirmNestedInput = {
    create?: XOR<TransactionCreateWithoutBuyerFirmInput, TransactionUncheckedCreateWithoutBuyerFirmInput> | TransactionCreateWithoutBuyerFirmInput[] | TransactionUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBuyerFirmInput | TransactionCreateOrConnectWithoutBuyerFirmInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBuyerFirmInput | TransactionUpsertWithWhereUniqueWithoutBuyerFirmInput[]
    createMany?: TransactionCreateManyBuyerFirmInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBuyerFirmInput | TransactionUpdateWithWhereUniqueWithoutBuyerFirmInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBuyerFirmInput | TransactionUpdateManyWithWhereWithoutBuyerFirmInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutBuyerFirmNestedInput = {
    create?: XOR<PaymentCreateWithoutBuyerFirmInput, PaymentUncheckedCreateWithoutBuyerFirmInput> | PaymentCreateWithoutBuyerFirmInput[] | PaymentUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBuyerFirmInput | PaymentCreateOrConnectWithoutBuyerFirmInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBuyerFirmInput | PaymentUpsertWithWhereUniqueWithoutBuyerFirmInput[]
    createMany?: PaymentCreateManyBuyerFirmInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBuyerFirmInput | PaymentUpdateWithWhereUniqueWithoutBuyerFirmInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBuyerFirmInput | PaymentUpdateManyWithWhereWithoutBuyerFirmInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type DraftTransactionUpdateManyWithoutBuyerFirmNestedInput = {
    create?: XOR<DraftTransactionCreateWithoutBuyerFirmInput, DraftTransactionUncheckedCreateWithoutBuyerFirmInput> | DraftTransactionCreateWithoutBuyerFirmInput[] | DraftTransactionUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: DraftTransactionCreateOrConnectWithoutBuyerFirmInput | DraftTransactionCreateOrConnectWithoutBuyerFirmInput[]
    upsert?: DraftTransactionUpsertWithWhereUniqueWithoutBuyerFirmInput | DraftTransactionUpsertWithWhereUniqueWithoutBuyerFirmInput[]
    createMany?: DraftTransactionCreateManyBuyerFirmInputEnvelope
    set?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    disconnect?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    delete?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    connect?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    update?: DraftTransactionUpdateWithWhereUniqueWithoutBuyerFirmInput | DraftTransactionUpdateWithWhereUniqueWithoutBuyerFirmInput[]
    updateMany?: DraftTransactionUpdateManyWithWhereWithoutBuyerFirmInput | DraftTransactionUpdateManyWithWhereWithoutBuyerFirmInput[]
    deleteMany?: DraftTransactionScalarWhereInput | DraftTransactionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBuyerFirmNestedInput = {
    create?: XOR<UserCreateWithoutBuyerFirmInput, UserUncheckedCreateWithoutBuyerFirmInput> | UserCreateWithoutBuyerFirmInput[] | UserUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBuyerFirmInput | UserCreateOrConnectWithoutBuyerFirmInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBuyerFirmInput | UserUpsertWithWhereUniqueWithoutBuyerFirmInput[]
    createMany?: UserCreateManyBuyerFirmInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBuyerFirmInput | UserUpdateWithWhereUniqueWithoutBuyerFirmInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBuyerFirmInput | UserUpdateManyWithWhereWithoutBuyerFirmInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GrowerUncheckedUpdateManyWithoutBuyerFirmNestedInput = {
    create?: XOR<GrowerCreateWithoutBuyerFirmInput, GrowerUncheckedCreateWithoutBuyerFirmInput> | GrowerCreateWithoutBuyerFirmInput[] | GrowerUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: GrowerCreateOrConnectWithoutBuyerFirmInput | GrowerCreateOrConnectWithoutBuyerFirmInput[]
    upsert?: GrowerUpsertWithWhereUniqueWithoutBuyerFirmInput | GrowerUpsertWithWhereUniqueWithoutBuyerFirmInput[]
    createMany?: GrowerCreateManyBuyerFirmInputEnvelope
    set?: GrowerWhereUniqueInput | GrowerWhereUniqueInput[]
    disconnect?: GrowerWhereUniqueInput | GrowerWhereUniqueInput[]
    delete?: GrowerWhereUniqueInput | GrowerWhereUniqueInput[]
    connect?: GrowerWhereUniqueInput | GrowerWhereUniqueInput[]
    update?: GrowerUpdateWithWhereUniqueWithoutBuyerFirmInput | GrowerUpdateWithWhereUniqueWithoutBuyerFirmInput[]
    updateMany?: GrowerUpdateManyWithWhereWithoutBuyerFirmInput | GrowerUpdateManyWithWhereWithoutBuyerFirmInput[]
    deleteMany?: GrowerScalarWhereInput | GrowerScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutBuyerFirmNestedInput = {
    create?: XOR<TransactionCreateWithoutBuyerFirmInput, TransactionUncheckedCreateWithoutBuyerFirmInput> | TransactionCreateWithoutBuyerFirmInput[] | TransactionUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBuyerFirmInput | TransactionCreateOrConnectWithoutBuyerFirmInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBuyerFirmInput | TransactionUpsertWithWhereUniqueWithoutBuyerFirmInput[]
    createMany?: TransactionCreateManyBuyerFirmInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBuyerFirmInput | TransactionUpdateWithWhereUniqueWithoutBuyerFirmInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBuyerFirmInput | TransactionUpdateManyWithWhereWithoutBuyerFirmInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutBuyerFirmNestedInput = {
    create?: XOR<PaymentCreateWithoutBuyerFirmInput, PaymentUncheckedCreateWithoutBuyerFirmInput> | PaymentCreateWithoutBuyerFirmInput[] | PaymentUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBuyerFirmInput | PaymentCreateOrConnectWithoutBuyerFirmInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBuyerFirmInput | PaymentUpsertWithWhereUniqueWithoutBuyerFirmInput[]
    createMany?: PaymentCreateManyBuyerFirmInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBuyerFirmInput | PaymentUpdateWithWhereUniqueWithoutBuyerFirmInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBuyerFirmInput | PaymentUpdateManyWithWhereWithoutBuyerFirmInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type DraftTransactionUncheckedUpdateManyWithoutBuyerFirmNestedInput = {
    create?: XOR<DraftTransactionCreateWithoutBuyerFirmInput, DraftTransactionUncheckedCreateWithoutBuyerFirmInput> | DraftTransactionCreateWithoutBuyerFirmInput[] | DraftTransactionUncheckedCreateWithoutBuyerFirmInput[]
    connectOrCreate?: DraftTransactionCreateOrConnectWithoutBuyerFirmInput | DraftTransactionCreateOrConnectWithoutBuyerFirmInput[]
    upsert?: DraftTransactionUpsertWithWhereUniqueWithoutBuyerFirmInput | DraftTransactionUpsertWithWhereUniqueWithoutBuyerFirmInput[]
    createMany?: DraftTransactionCreateManyBuyerFirmInputEnvelope
    set?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    disconnect?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    delete?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    connect?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    update?: DraftTransactionUpdateWithWhereUniqueWithoutBuyerFirmInput | DraftTransactionUpdateWithWhereUniqueWithoutBuyerFirmInput[]
    updateMany?: DraftTransactionUpdateManyWithWhereWithoutBuyerFirmInput | DraftTransactionUpdateManyWithWhereWithoutBuyerFirmInput[]
    deleteMany?: DraftTransactionScalarWhereInput | DraftTransactionScalarWhereInput[]
  }

  export type BuyerFirmCreateNestedOneWithoutUsersInput = {
    create?: XOR<BuyerFirmCreateWithoutUsersInput, BuyerFirmUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BuyerFirmCreateOrConnectWithoutUsersInput
    connect?: BuyerFirmWhereUniqueInput
  }

  export type DraftTransactionCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DraftTransactionCreateWithoutCreatedByInput, DraftTransactionUncheckedCreateWithoutCreatedByInput> | DraftTransactionCreateWithoutCreatedByInput[] | DraftTransactionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DraftTransactionCreateOrConnectWithoutCreatedByInput | DraftTransactionCreateOrConnectWithoutCreatedByInput[]
    createMany?: DraftTransactionCreateManyCreatedByInputEnvelope
    connect?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
  }

  export type DraftTransactionUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DraftTransactionCreateWithoutCreatedByInput, DraftTransactionUncheckedCreateWithoutCreatedByInput> | DraftTransactionCreateWithoutCreatedByInput[] | DraftTransactionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DraftTransactionCreateOrConnectWithoutCreatedByInput | DraftTransactionCreateOrConnectWithoutCreatedByInput[]
    createMany?: DraftTransactionCreateManyCreatedByInputEnvelope
    connect?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
  }

  export type BuyerFirmUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<BuyerFirmCreateWithoutUsersInput, BuyerFirmUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BuyerFirmCreateOrConnectWithoutUsersInput
    upsert?: BuyerFirmUpsertWithoutUsersInput
    connect?: BuyerFirmWhereUniqueInput
    update?: XOR<XOR<BuyerFirmUpdateToOneWithWhereWithoutUsersInput, BuyerFirmUpdateWithoutUsersInput>, BuyerFirmUncheckedUpdateWithoutUsersInput>
  }

  export type DraftTransactionUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DraftTransactionCreateWithoutCreatedByInput, DraftTransactionUncheckedCreateWithoutCreatedByInput> | DraftTransactionCreateWithoutCreatedByInput[] | DraftTransactionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DraftTransactionCreateOrConnectWithoutCreatedByInput | DraftTransactionCreateOrConnectWithoutCreatedByInput[]
    upsert?: DraftTransactionUpsertWithWhereUniqueWithoutCreatedByInput | DraftTransactionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DraftTransactionCreateManyCreatedByInputEnvelope
    set?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    disconnect?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    delete?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    connect?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    update?: DraftTransactionUpdateWithWhereUniqueWithoutCreatedByInput | DraftTransactionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DraftTransactionUpdateManyWithWhereWithoutCreatedByInput | DraftTransactionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DraftTransactionScalarWhereInput | DraftTransactionScalarWhereInput[]
  }

  export type DraftTransactionUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DraftTransactionCreateWithoutCreatedByInput, DraftTransactionUncheckedCreateWithoutCreatedByInput> | DraftTransactionCreateWithoutCreatedByInput[] | DraftTransactionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DraftTransactionCreateOrConnectWithoutCreatedByInput | DraftTransactionCreateOrConnectWithoutCreatedByInput[]
    upsert?: DraftTransactionUpsertWithWhereUniqueWithoutCreatedByInput | DraftTransactionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DraftTransactionCreateManyCreatedByInputEnvelope
    set?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    disconnect?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    delete?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    connect?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    update?: DraftTransactionUpdateWithWhereUniqueWithoutCreatedByInput | DraftTransactionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DraftTransactionUpdateManyWithWhereWithoutCreatedByInput | DraftTransactionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DraftTransactionScalarWhereInput | DraftTransactionScalarWhereInput[]
  }

  export type BuyerFirmCreateNestedOneWithoutGrowersInput = {
    create?: XOR<BuyerFirmCreateWithoutGrowersInput, BuyerFirmUncheckedCreateWithoutGrowersInput>
    connectOrCreate?: BuyerFirmCreateOrConnectWithoutGrowersInput
    connect?: BuyerFirmWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutGrowerInput = {
    create?: XOR<TransactionCreateWithoutGrowerInput, TransactionUncheckedCreateWithoutGrowerInput> | TransactionCreateWithoutGrowerInput[] | TransactionUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutGrowerInput | TransactionCreateOrConnectWithoutGrowerInput[]
    createMany?: TransactionCreateManyGrowerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutGrowerInput = {
    create?: XOR<PaymentCreateWithoutGrowerInput, PaymentUncheckedCreateWithoutGrowerInput> | PaymentCreateWithoutGrowerInput[] | PaymentUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutGrowerInput | PaymentCreateOrConnectWithoutGrowerInput[]
    createMany?: PaymentCreateManyGrowerInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutGrowerInput = {
    create?: XOR<NotificationCreateWithoutGrowerInput, NotificationUncheckedCreateWithoutGrowerInput> | NotificationCreateWithoutGrowerInput[] | NotificationUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutGrowerInput | NotificationCreateOrConnectWithoutGrowerInput[]
    createMany?: NotificationCreateManyGrowerInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AgreementCreateNestedManyWithoutGrowerInput = {
    create?: XOR<AgreementCreateWithoutGrowerInput, AgreementUncheckedCreateWithoutGrowerInput> | AgreementCreateWithoutGrowerInput[] | AgreementUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: AgreementCreateOrConnectWithoutGrowerInput | AgreementCreateOrConnectWithoutGrowerInput[]
    createMany?: AgreementCreateManyGrowerInputEnvelope
    connect?: AgreementWhereUniqueInput | AgreementWhereUniqueInput[]
  }

  export type DraftTransactionCreateNestedManyWithoutGrowerInput = {
    create?: XOR<DraftTransactionCreateWithoutGrowerInput, DraftTransactionUncheckedCreateWithoutGrowerInput> | DraftTransactionCreateWithoutGrowerInput[] | DraftTransactionUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: DraftTransactionCreateOrConnectWithoutGrowerInput | DraftTransactionCreateOrConnectWithoutGrowerInput[]
    createMany?: DraftTransactionCreateManyGrowerInputEnvelope
    connect?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutGrowerInput = {
    create?: XOR<TransactionCreateWithoutGrowerInput, TransactionUncheckedCreateWithoutGrowerInput> | TransactionCreateWithoutGrowerInput[] | TransactionUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutGrowerInput | TransactionCreateOrConnectWithoutGrowerInput[]
    createMany?: TransactionCreateManyGrowerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutGrowerInput = {
    create?: XOR<PaymentCreateWithoutGrowerInput, PaymentUncheckedCreateWithoutGrowerInput> | PaymentCreateWithoutGrowerInput[] | PaymentUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutGrowerInput | PaymentCreateOrConnectWithoutGrowerInput[]
    createMany?: PaymentCreateManyGrowerInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutGrowerInput = {
    create?: XOR<NotificationCreateWithoutGrowerInput, NotificationUncheckedCreateWithoutGrowerInput> | NotificationCreateWithoutGrowerInput[] | NotificationUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutGrowerInput | NotificationCreateOrConnectWithoutGrowerInput[]
    createMany?: NotificationCreateManyGrowerInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AgreementUncheckedCreateNestedManyWithoutGrowerInput = {
    create?: XOR<AgreementCreateWithoutGrowerInput, AgreementUncheckedCreateWithoutGrowerInput> | AgreementCreateWithoutGrowerInput[] | AgreementUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: AgreementCreateOrConnectWithoutGrowerInput | AgreementCreateOrConnectWithoutGrowerInput[]
    createMany?: AgreementCreateManyGrowerInputEnvelope
    connect?: AgreementWhereUniqueInput | AgreementWhereUniqueInput[]
  }

  export type DraftTransactionUncheckedCreateNestedManyWithoutGrowerInput = {
    create?: XOR<DraftTransactionCreateWithoutGrowerInput, DraftTransactionUncheckedCreateWithoutGrowerInput> | DraftTransactionCreateWithoutGrowerInput[] | DraftTransactionUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: DraftTransactionCreateOrConnectWithoutGrowerInput | DraftTransactionCreateOrConnectWithoutGrowerInput[]
    createMany?: DraftTransactionCreateManyGrowerInputEnvelope
    connect?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
  }

  export type BuyerFirmUpdateOneRequiredWithoutGrowersNestedInput = {
    create?: XOR<BuyerFirmCreateWithoutGrowersInput, BuyerFirmUncheckedCreateWithoutGrowersInput>
    connectOrCreate?: BuyerFirmCreateOrConnectWithoutGrowersInput
    upsert?: BuyerFirmUpsertWithoutGrowersInput
    connect?: BuyerFirmWhereUniqueInput
    update?: XOR<XOR<BuyerFirmUpdateToOneWithWhereWithoutGrowersInput, BuyerFirmUpdateWithoutGrowersInput>, BuyerFirmUncheckedUpdateWithoutGrowersInput>
  }

  export type TransactionUpdateManyWithoutGrowerNestedInput = {
    create?: XOR<TransactionCreateWithoutGrowerInput, TransactionUncheckedCreateWithoutGrowerInput> | TransactionCreateWithoutGrowerInput[] | TransactionUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutGrowerInput | TransactionCreateOrConnectWithoutGrowerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutGrowerInput | TransactionUpsertWithWhereUniqueWithoutGrowerInput[]
    createMany?: TransactionCreateManyGrowerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutGrowerInput | TransactionUpdateWithWhereUniqueWithoutGrowerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutGrowerInput | TransactionUpdateManyWithWhereWithoutGrowerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutGrowerNestedInput = {
    create?: XOR<PaymentCreateWithoutGrowerInput, PaymentUncheckedCreateWithoutGrowerInput> | PaymentCreateWithoutGrowerInput[] | PaymentUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutGrowerInput | PaymentCreateOrConnectWithoutGrowerInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutGrowerInput | PaymentUpsertWithWhereUniqueWithoutGrowerInput[]
    createMany?: PaymentCreateManyGrowerInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutGrowerInput | PaymentUpdateWithWhereUniqueWithoutGrowerInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutGrowerInput | PaymentUpdateManyWithWhereWithoutGrowerInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutGrowerNestedInput = {
    create?: XOR<NotificationCreateWithoutGrowerInput, NotificationUncheckedCreateWithoutGrowerInput> | NotificationCreateWithoutGrowerInput[] | NotificationUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutGrowerInput | NotificationCreateOrConnectWithoutGrowerInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutGrowerInput | NotificationUpsertWithWhereUniqueWithoutGrowerInput[]
    createMany?: NotificationCreateManyGrowerInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutGrowerInput | NotificationUpdateWithWhereUniqueWithoutGrowerInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutGrowerInput | NotificationUpdateManyWithWhereWithoutGrowerInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AgreementUpdateManyWithoutGrowerNestedInput = {
    create?: XOR<AgreementCreateWithoutGrowerInput, AgreementUncheckedCreateWithoutGrowerInput> | AgreementCreateWithoutGrowerInput[] | AgreementUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: AgreementCreateOrConnectWithoutGrowerInput | AgreementCreateOrConnectWithoutGrowerInput[]
    upsert?: AgreementUpsertWithWhereUniqueWithoutGrowerInput | AgreementUpsertWithWhereUniqueWithoutGrowerInput[]
    createMany?: AgreementCreateManyGrowerInputEnvelope
    set?: AgreementWhereUniqueInput | AgreementWhereUniqueInput[]
    disconnect?: AgreementWhereUniqueInput | AgreementWhereUniqueInput[]
    delete?: AgreementWhereUniqueInput | AgreementWhereUniqueInput[]
    connect?: AgreementWhereUniqueInput | AgreementWhereUniqueInput[]
    update?: AgreementUpdateWithWhereUniqueWithoutGrowerInput | AgreementUpdateWithWhereUniqueWithoutGrowerInput[]
    updateMany?: AgreementUpdateManyWithWhereWithoutGrowerInput | AgreementUpdateManyWithWhereWithoutGrowerInput[]
    deleteMany?: AgreementScalarWhereInput | AgreementScalarWhereInput[]
  }

  export type DraftTransactionUpdateManyWithoutGrowerNestedInput = {
    create?: XOR<DraftTransactionCreateWithoutGrowerInput, DraftTransactionUncheckedCreateWithoutGrowerInput> | DraftTransactionCreateWithoutGrowerInput[] | DraftTransactionUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: DraftTransactionCreateOrConnectWithoutGrowerInput | DraftTransactionCreateOrConnectWithoutGrowerInput[]
    upsert?: DraftTransactionUpsertWithWhereUniqueWithoutGrowerInput | DraftTransactionUpsertWithWhereUniqueWithoutGrowerInput[]
    createMany?: DraftTransactionCreateManyGrowerInputEnvelope
    set?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    disconnect?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    delete?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    connect?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    update?: DraftTransactionUpdateWithWhereUniqueWithoutGrowerInput | DraftTransactionUpdateWithWhereUniqueWithoutGrowerInput[]
    updateMany?: DraftTransactionUpdateManyWithWhereWithoutGrowerInput | DraftTransactionUpdateManyWithWhereWithoutGrowerInput[]
    deleteMany?: DraftTransactionScalarWhereInput | DraftTransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutGrowerNestedInput = {
    create?: XOR<TransactionCreateWithoutGrowerInput, TransactionUncheckedCreateWithoutGrowerInput> | TransactionCreateWithoutGrowerInput[] | TransactionUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutGrowerInput | TransactionCreateOrConnectWithoutGrowerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutGrowerInput | TransactionUpsertWithWhereUniqueWithoutGrowerInput[]
    createMany?: TransactionCreateManyGrowerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutGrowerInput | TransactionUpdateWithWhereUniqueWithoutGrowerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutGrowerInput | TransactionUpdateManyWithWhereWithoutGrowerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutGrowerNestedInput = {
    create?: XOR<PaymentCreateWithoutGrowerInput, PaymentUncheckedCreateWithoutGrowerInput> | PaymentCreateWithoutGrowerInput[] | PaymentUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutGrowerInput | PaymentCreateOrConnectWithoutGrowerInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutGrowerInput | PaymentUpsertWithWhereUniqueWithoutGrowerInput[]
    createMany?: PaymentCreateManyGrowerInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutGrowerInput | PaymentUpdateWithWhereUniqueWithoutGrowerInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutGrowerInput | PaymentUpdateManyWithWhereWithoutGrowerInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutGrowerNestedInput = {
    create?: XOR<NotificationCreateWithoutGrowerInput, NotificationUncheckedCreateWithoutGrowerInput> | NotificationCreateWithoutGrowerInput[] | NotificationUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutGrowerInput | NotificationCreateOrConnectWithoutGrowerInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutGrowerInput | NotificationUpsertWithWhereUniqueWithoutGrowerInput[]
    createMany?: NotificationCreateManyGrowerInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutGrowerInput | NotificationUpdateWithWhereUniqueWithoutGrowerInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutGrowerInput | NotificationUpdateManyWithWhereWithoutGrowerInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AgreementUncheckedUpdateManyWithoutGrowerNestedInput = {
    create?: XOR<AgreementCreateWithoutGrowerInput, AgreementUncheckedCreateWithoutGrowerInput> | AgreementCreateWithoutGrowerInput[] | AgreementUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: AgreementCreateOrConnectWithoutGrowerInput | AgreementCreateOrConnectWithoutGrowerInput[]
    upsert?: AgreementUpsertWithWhereUniqueWithoutGrowerInput | AgreementUpsertWithWhereUniqueWithoutGrowerInput[]
    createMany?: AgreementCreateManyGrowerInputEnvelope
    set?: AgreementWhereUniqueInput | AgreementWhereUniqueInput[]
    disconnect?: AgreementWhereUniqueInput | AgreementWhereUniqueInput[]
    delete?: AgreementWhereUniqueInput | AgreementWhereUniqueInput[]
    connect?: AgreementWhereUniqueInput | AgreementWhereUniqueInput[]
    update?: AgreementUpdateWithWhereUniqueWithoutGrowerInput | AgreementUpdateWithWhereUniqueWithoutGrowerInput[]
    updateMany?: AgreementUpdateManyWithWhereWithoutGrowerInput | AgreementUpdateManyWithWhereWithoutGrowerInput[]
    deleteMany?: AgreementScalarWhereInput | AgreementScalarWhereInput[]
  }

  export type DraftTransactionUncheckedUpdateManyWithoutGrowerNestedInput = {
    create?: XOR<DraftTransactionCreateWithoutGrowerInput, DraftTransactionUncheckedCreateWithoutGrowerInput> | DraftTransactionCreateWithoutGrowerInput[] | DraftTransactionUncheckedCreateWithoutGrowerInput[]
    connectOrCreate?: DraftTransactionCreateOrConnectWithoutGrowerInput | DraftTransactionCreateOrConnectWithoutGrowerInput[]
    upsert?: DraftTransactionUpsertWithWhereUniqueWithoutGrowerInput | DraftTransactionUpsertWithWhereUniqueWithoutGrowerInput[]
    createMany?: DraftTransactionCreateManyGrowerInputEnvelope
    set?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    disconnect?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    delete?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    connect?: DraftTransactionWhereUniqueInput | DraftTransactionWhereUniqueInput[]
    update?: DraftTransactionUpdateWithWhereUniqueWithoutGrowerInput | DraftTransactionUpdateWithWhereUniqueWithoutGrowerInput[]
    updateMany?: DraftTransactionUpdateManyWithWhereWithoutGrowerInput | DraftTransactionUpdateManyWithWhereWithoutGrowerInput[]
    deleteMany?: DraftTransactionScalarWhereInput | DraftTransactionScalarWhereInput[]
  }

  export type GrowerCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<GrowerCreateWithoutTransactionsInput, GrowerUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: GrowerCreateOrConnectWithoutTransactionsInput
    connect?: GrowerWhereUniqueInput
  }

  export type BuyerFirmCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<BuyerFirmCreateWithoutTransactionsInput, BuyerFirmUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: BuyerFirmCreateOrConnectWithoutTransactionsInput
    connect?: BuyerFirmWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GrowerUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<GrowerCreateWithoutTransactionsInput, GrowerUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: GrowerCreateOrConnectWithoutTransactionsInput
    upsert?: GrowerUpsertWithoutTransactionsInput
    connect?: GrowerWhereUniqueInput
    update?: XOR<XOR<GrowerUpdateToOneWithWhereWithoutTransactionsInput, GrowerUpdateWithoutTransactionsInput>, GrowerUncheckedUpdateWithoutTransactionsInput>
  }

  export type BuyerFirmUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<BuyerFirmCreateWithoutTransactionsInput, BuyerFirmUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: BuyerFirmCreateOrConnectWithoutTransactionsInput
    upsert?: BuyerFirmUpsertWithoutTransactionsInput
    connect?: BuyerFirmWhereUniqueInput
    update?: XOR<XOR<BuyerFirmUpdateToOneWithWhereWithoutTransactionsInput, BuyerFirmUpdateWithoutTransactionsInput>, BuyerFirmUncheckedUpdateWithoutTransactionsInput>
  }

  export type GrowerCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<GrowerCreateWithoutPaymentsInput, GrowerUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: GrowerCreateOrConnectWithoutPaymentsInput
    connect?: GrowerWhereUniqueInput
  }

  export type BuyerFirmCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<BuyerFirmCreateWithoutPaymentsInput, BuyerFirmUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BuyerFirmCreateOrConnectWithoutPaymentsInput
    connect?: BuyerFirmWhereUniqueInput
  }

  export type GrowerUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<GrowerCreateWithoutPaymentsInput, GrowerUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: GrowerCreateOrConnectWithoutPaymentsInput
    upsert?: GrowerUpsertWithoutPaymentsInput
    connect?: GrowerWhereUniqueInput
    update?: XOR<XOR<GrowerUpdateToOneWithWhereWithoutPaymentsInput, GrowerUpdateWithoutPaymentsInput>, GrowerUncheckedUpdateWithoutPaymentsInput>
  }

  export type BuyerFirmUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<BuyerFirmCreateWithoutPaymentsInput, BuyerFirmUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BuyerFirmCreateOrConnectWithoutPaymentsInput
    upsert?: BuyerFirmUpsertWithoutPaymentsInput
    connect?: BuyerFirmWhereUniqueInput
    update?: XOR<XOR<BuyerFirmUpdateToOneWithWhereWithoutPaymentsInput, BuyerFirmUpdateWithoutPaymentsInput>, BuyerFirmUncheckedUpdateWithoutPaymentsInput>
  }

  export type GrowerCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<GrowerCreateWithoutNotificationsInput, GrowerUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: GrowerCreateOrConnectWithoutNotificationsInput
    connect?: GrowerWhereUniqueInput
  }

  export type GrowerUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<GrowerCreateWithoutNotificationsInput, GrowerUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: GrowerCreateOrConnectWithoutNotificationsInput
    upsert?: GrowerUpsertWithoutNotificationsInput
    connect?: GrowerWhereUniqueInput
    update?: XOR<XOR<GrowerUpdateToOneWithWhereWithoutNotificationsInput, GrowerUpdateWithoutNotificationsInput>, GrowerUncheckedUpdateWithoutNotificationsInput>
  }

  export type GrowerCreateNestedOneWithoutAgreementsInput = {
    create?: XOR<GrowerCreateWithoutAgreementsInput, GrowerUncheckedCreateWithoutAgreementsInput>
    connectOrCreate?: GrowerCreateOrConnectWithoutAgreementsInput
    connect?: GrowerWhereUniqueInput
  }

  export type GrowerUpdateOneRequiredWithoutAgreementsNestedInput = {
    create?: XOR<GrowerCreateWithoutAgreementsInput, GrowerUncheckedCreateWithoutAgreementsInput>
    connectOrCreate?: GrowerCreateOrConnectWithoutAgreementsInput
    upsert?: GrowerUpsertWithoutAgreementsInput
    connect?: GrowerWhereUniqueInput
    update?: XOR<XOR<GrowerUpdateToOneWithWhereWithoutAgreementsInput, GrowerUpdateWithoutAgreementsInput>, GrowerUncheckedUpdateWithoutAgreementsInput>
  }

  export type GrowerCreateNestedOneWithoutDraftTransactionsInput = {
    create?: XOR<GrowerCreateWithoutDraftTransactionsInput, GrowerUncheckedCreateWithoutDraftTransactionsInput>
    connectOrCreate?: GrowerCreateOrConnectWithoutDraftTransactionsInput
    connect?: GrowerWhereUniqueInput
  }

  export type BuyerFirmCreateNestedOneWithoutDraftTransactionsInput = {
    create?: XOR<BuyerFirmCreateWithoutDraftTransactionsInput, BuyerFirmUncheckedCreateWithoutDraftTransactionsInput>
    connectOrCreate?: BuyerFirmCreateOrConnectWithoutDraftTransactionsInput
    connect?: BuyerFirmWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDraftTransactionsInput = {
    create?: XOR<UserCreateWithoutDraftTransactionsInput, UserUncheckedCreateWithoutDraftTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDraftTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type GrowerUpdateOneRequiredWithoutDraftTransactionsNestedInput = {
    create?: XOR<GrowerCreateWithoutDraftTransactionsInput, GrowerUncheckedCreateWithoutDraftTransactionsInput>
    connectOrCreate?: GrowerCreateOrConnectWithoutDraftTransactionsInput
    upsert?: GrowerUpsertWithoutDraftTransactionsInput
    connect?: GrowerWhereUniqueInput
    update?: XOR<XOR<GrowerUpdateToOneWithWhereWithoutDraftTransactionsInput, GrowerUpdateWithoutDraftTransactionsInput>, GrowerUncheckedUpdateWithoutDraftTransactionsInput>
  }

  export type BuyerFirmUpdateOneRequiredWithoutDraftTransactionsNestedInput = {
    create?: XOR<BuyerFirmCreateWithoutDraftTransactionsInput, BuyerFirmUncheckedCreateWithoutDraftTransactionsInput>
    connectOrCreate?: BuyerFirmCreateOrConnectWithoutDraftTransactionsInput
    upsert?: BuyerFirmUpsertWithoutDraftTransactionsInput
    connect?: BuyerFirmWhereUniqueInput
    update?: XOR<XOR<BuyerFirmUpdateToOneWithWhereWithoutDraftTransactionsInput, BuyerFirmUpdateWithoutDraftTransactionsInput>, BuyerFirmUncheckedUpdateWithoutDraftTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutDraftTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutDraftTransactionsInput, UserUncheckedCreateWithoutDraftTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDraftTransactionsInput
    upsert?: UserUpsertWithoutDraftTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDraftTransactionsInput, UserUpdateWithoutDraftTransactionsInput>, UserUncheckedUpdateWithoutDraftTransactionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutBuyerFirmInput = {
    id?: string
    mobile: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    draftTransactions?: DraftTransactionCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutBuyerFirmInput = {
    id?: string
    mobile: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    draftTransactions?: DraftTransactionUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutBuyerFirmInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBuyerFirmInput, UserUncheckedCreateWithoutBuyerFirmInput>
  }

  export type UserCreateManyBuyerFirmInputEnvelope = {
    data: UserCreateManyBuyerFirmInput | UserCreateManyBuyerFirmInput[]
  }

  export type GrowerCreateWithoutBuyerFirmInput = {
    id?: string
    name: string
    mobile: string
    address?: string | null
    createdAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutGrowerInput
    payments?: PaymentCreateNestedManyWithoutGrowerInput
    notifications?: NotificationCreateNestedManyWithoutGrowerInput
    agreements?: AgreementCreateNestedManyWithoutGrowerInput
    draftTransactions?: DraftTransactionCreateNestedManyWithoutGrowerInput
  }

  export type GrowerUncheckedCreateWithoutBuyerFirmInput = {
    id?: string
    name: string
    mobile: string
    address?: string | null
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutGrowerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutGrowerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutGrowerInput
    agreements?: AgreementUncheckedCreateNestedManyWithoutGrowerInput
    draftTransactions?: DraftTransactionUncheckedCreateNestedManyWithoutGrowerInput
  }

  export type GrowerCreateOrConnectWithoutBuyerFirmInput = {
    where: GrowerWhereUniqueInput
    create: XOR<GrowerCreateWithoutBuyerFirmInput, GrowerUncheckedCreateWithoutBuyerFirmInput>
  }

  export type GrowerCreateManyBuyerFirmInputEnvelope = {
    data: GrowerCreateManyBuyerFirmInput | GrowerCreateManyBuyerFirmInput[]
  }

  export type TransactionCreateWithoutBuyerFirmInput = {
    id?: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    grossAmount?: number
    commission?: number
    labour?: number
    freight?: number
    association?: number
    printing?: number
    miscellaneous?: number
    totalAmount: number
    receivedAt?: Date | string
    notes?: string | null
    notified?: boolean
    createdAt?: Date | string
    grower: GrowerCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutBuyerFirmInput = {
    id?: string
    growerId: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    grossAmount?: number
    commission?: number
    labour?: number
    freight?: number
    association?: number
    printing?: number
    miscellaneous?: number
    totalAmount: number
    receivedAt?: Date | string
    notes?: string | null
    notified?: boolean
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutBuyerFirmInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutBuyerFirmInput, TransactionUncheckedCreateWithoutBuyerFirmInput>
  }

  export type TransactionCreateManyBuyerFirmInputEnvelope = {
    data: TransactionCreateManyBuyerFirmInput | TransactionCreateManyBuyerFirmInput[]
  }

  export type PaymentCreateWithoutBuyerFirmInput = {
    id?: string
    amount: number
    notes?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
    grower: GrowerCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutBuyerFirmInput = {
    id?: string
    growerId: string
    amount: number
    notes?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutBuyerFirmInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBuyerFirmInput, PaymentUncheckedCreateWithoutBuyerFirmInput>
  }

  export type PaymentCreateManyBuyerFirmInputEnvelope = {
    data: PaymentCreateManyBuyerFirmInput | PaymentCreateManyBuyerFirmInput[]
  }

  export type DraftTransactionCreateWithoutBuyerFirmInput = {
    id?: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    notes?: string | null
    status?: string
    createdAt?: Date | string
    grower: GrowerCreateNestedOneWithoutDraftTransactionsInput
    createdBy: UserCreateNestedOneWithoutDraftTransactionsInput
  }

  export type DraftTransactionUncheckedCreateWithoutBuyerFirmInput = {
    id?: string
    growerId: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    notes?: string | null
    createdById: string
    status?: string
    createdAt?: Date | string
  }

  export type DraftTransactionCreateOrConnectWithoutBuyerFirmInput = {
    where: DraftTransactionWhereUniqueInput
    create: XOR<DraftTransactionCreateWithoutBuyerFirmInput, DraftTransactionUncheckedCreateWithoutBuyerFirmInput>
  }

  export type DraftTransactionCreateManyBuyerFirmInputEnvelope = {
    data: DraftTransactionCreateManyBuyerFirmInput | DraftTransactionCreateManyBuyerFirmInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutBuyerFirmInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBuyerFirmInput, UserUncheckedUpdateWithoutBuyerFirmInput>
    create: XOR<UserCreateWithoutBuyerFirmInput, UserUncheckedCreateWithoutBuyerFirmInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBuyerFirmInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBuyerFirmInput, UserUncheckedUpdateWithoutBuyerFirmInput>
  }

  export type UserUpdateManyWithWhereWithoutBuyerFirmInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBuyerFirmInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    buyerFirmId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type GrowerUpsertWithWhereUniqueWithoutBuyerFirmInput = {
    where: GrowerWhereUniqueInput
    update: XOR<GrowerUpdateWithoutBuyerFirmInput, GrowerUncheckedUpdateWithoutBuyerFirmInput>
    create: XOR<GrowerCreateWithoutBuyerFirmInput, GrowerUncheckedCreateWithoutBuyerFirmInput>
  }

  export type GrowerUpdateWithWhereUniqueWithoutBuyerFirmInput = {
    where: GrowerWhereUniqueInput
    data: XOR<GrowerUpdateWithoutBuyerFirmInput, GrowerUncheckedUpdateWithoutBuyerFirmInput>
  }

  export type GrowerUpdateManyWithWhereWithoutBuyerFirmInput = {
    where: GrowerScalarWhereInput
    data: XOR<GrowerUpdateManyMutationInput, GrowerUncheckedUpdateManyWithoutBuyerFirmInput>
  }

  export type GrowerScalarWhereInput = {
    AND?: GrowerScalarWhereInput | GrowerScalarWhereInput[]
    OR?: GrowerScalarWhereInput[]
    NOT?: GrowerScalarWhereInput | GrowerScalarWhereInput[]
    id?: StringFilter<"Grower"> | string
    name?: StringFilter<"Grower"> | string
    mobile?: StringFilter<"Grower"> | string
    address?: StringNullableFilter<"Grower"> | string | null
    buyerFirmId?: StringFilter<"Grower"> | string
    createdAt?: DateTimeFilter<"Grower"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutBuyerFirmInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutBuyerFirmInput, TransactionUncheckedUpdateWithoutBuyerFirmInput>
    create: XOR<TransactionCreateWithoutBuyerFirmInput, TransactionUncheckedCreateWithoutBuyerFirmInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutBuyerFirmInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutBuyerFirmInput, TransactionUncheckedUpdateWithoutBuyerFirmInput>
  }

  export type TransactionUpdateManyWithWhereWithoutBuyerFirmInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutBuyerFirmInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    growerId?: StringFilter<"Transaction"> | string
    buyerFirmId?: StringFilter<"Transaction"> | string
    fruitType?: StringFilter<"Transaction"> | string
    quantity?: FloatFilter<"Transaction"> | number
    unit?: StringFilter<"Transaction"> | string
    rate?: FloatFilter<"Transaction"> | number
    grossAmount?: FloatFilter<"Transaction"> | number
    commission?: FloatFilter<"Transaction"> | number
    labour?: FloatFilter<"Transaction"> | number
    freight?: FloatFilter<"Transaction"> | number
    association?: FloatFilter<"Transaction"> | number
    printing?: FloatFilter<"Transaction"> | number
    miscellaneous?: FloatFilter<"Transaction"> | number
    totalAmount?: FloatFilter<"Transaction"> | number
    receivedAt?: DateTimeFilter<"Transaction"> | Date | string
    notes?: StringNullableFilter<"Transaction"> | string | null
    notified?: BoolFilter<"Transaction"> | boolean
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutBuyerFirmInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutBuyerFirmInput, PaymentUncheckedUpdateWithoutBuyerFirmInput>
    create: XOR<PaymentCreateWithoutBuyerFirmInput, PaymentUncheckedCreateWithoutBuyerFirmInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutBuyerFirmInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutBuyerFirmInput, PaymentUncheckedUpdateWithoutBuyerFirmInput>
  }

  export type PaymentUpdateManyWithWhereWithoutBuyerFirmInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutBuyerFirmInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    growerId?: StringFilter<"Payment"> | string
    buyerFirmId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    notes?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type DraftTransactionUpsertWithWhereUniqueWithoutBuyerFirmInput = {
    where: DraftTransactionWhereUniqueInput
    update: XOR<DraftTransactionUpdateWithoutBuyerFirmInput, DraftTransactionUncheckedUpdateWithoutBuyerFirmInput>
    create: XOR<DraftTransactionCreateWithoutBuyerFirmInput, DraftTransactionUncheckedCreateWithoutBuyerFirmInput>
  }

  export type DraftTransactionUpdateWithWhereUniqueWithoutBuyerFirmInput = {
    where: DraftTransactionWhereUniqueInput
    data: XOR<DraftTransactionUpdateWithoutBuyerFirmInput, DraftTransactionUncheckedUpdateWithoutBuyerFirmInput>
  }

  export type DraftTransactionUpdateManyWithWhereWithoutBuyerFirmInput = {
    where: DraftTransactionScalarWhereInput
    data: XOR<DraftTransactionUpdateManyMutationInput, DraftTransactionUncheckedUpdateManyWithoutBuyerFirmInput>
  }

  export type DraftTransactionScalarWhereInput = {
    AND?: DraftTransactionScalarWhereInput | DraftTransactionScalarWhereInput[]
    OR?: DraftTransactionScalarWhereInput[]
    NOT?: DraftTransactionScalarWhereInput | DraftTransactionScalarWhereInput[]
    id?: StringFilter<"DraftTransaction"> | string
    growerId?: StringFilter<"DraftTransaction"> | string
    buyerFirmId?: StringFilter<"DraftTransaction"> | string
    fruitType?: StringFilter<"DraftTransaction"> | string
    quantity?: FloatFilter<"DraftTransaction"> | number
    unit?: StringFilter<"DraftTransaction"> | string
    rate?: FloatFilter<"DraftTransaction"> | number
    notes?: StringNullableFilter<"DraftTransaction"> | string | null
    createdById?: StringFilter<"DraftTransaction"> | string
    status?: StringFilter<"DraftTransaction"> | string
    createdAt?: DateTimeFilter<"DraftTransaction"> | Date | string
  }

  export type BuyerFirmCreateWithoutUsersInput = {
    id?: string
    uniqueId: string
    firmName: string
    ownerName: string
    mobile: string
    subscriptionPlan?: string
    subscriptionExpiry?: Date | string | null
    createdAt?: Date | string
    logoUrl?: string | null
    growers?: GrowerCreateNestedManyWithoutBuyerFirmInput
    transactions?: TransactionCreateNestedManyWithoutBuyerFirmInput
    payments?: PaymentCreateNestedManyWithoutBuyerFirmInput
    draftTransactions?: DraftTransactionCreateNestedManyWithoutBuyerFirmInput
  }

  export type BuyerFirmUncheckedCreateWithoutUsersInput = {
    id?: string
    uniqueId: string
    firmName: string
    ownerName: string
    mobile: string
    subscriptionPlan?: string
    subscriptionExpiry?: Date | string | null
    createdAt?: Date | string
    logoUrl?: string | null
    growers?: GrowerUncheckedCreateNestedManyWithoutBuyerFirmInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutBuyerFirmInput
    payments?: PaymentUncheckedCreateNestedManyWithoutBuyerFirmInput
    draftTransactions?: DraftTransactionUncheckedCreateNestedManyWithoutBuyerFirmInput
  }

  export type BuyerFirmCreateOrConnectWithoutUsersInput = {
    where: BuyerFirmWhereUniqueInput
    create: XOR<BuyerFirmCreateWithoutUsersInput, BuyerFirmUncheckedCreateWithoutUsersInput>
  }

  export type DraftTransactionCreateWithoutCreatedByInput = {
    id?: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    notes?: string | null
    status?: string
    createdAt?: Date | string
    grower: GrowerCreateNestedOneWithoutDraftTransactionsInput
    buyerFirm: BuyerFirmCreateNestedOneWithoutDraftTransactionsInput
  }

  export type DraftTransactionUncheckedCreateWithoutCreatedByInput = {
    id?: string
    growerId: string
    buyerFirmId: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    notes?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type DraftTransactionCreateOrConnectWithoutCreatedByInput = {
    where: DraftTransactionWhereUniqueInput
    create: XOR<DraftTransactionCreateWithoutCreatedByInput, DraftTransactionUncheckedCreateWithoutCreatedByInput>
  }

  export type DraftTransactionCreateManyCreatedByInputEnvelope = {
    data: DraftTransactionCreateManyCreatedByInput | DraftTransactionCreateManyCreatedByInput[]
  }

  export type BuyerFirmUpsertWithoutUsersInput = {
    update: XOR<BuyerFirmUpdateWithoutUsersInput, BuyerFirmUncheckedUpdateWithoutUsersInput>
    create: XOR<BuyerFirmCreateWithoutUsersInput, BuyerFirmUncheckedCreateWithoutUsersInput>
    where?: BuyerFirmWhereInput
  }

  export type BuyerFirmUpdateToOneWithWhereWithoutUsersInput = {
    where?: BuyerFirmWhereInput
    data: XOR<BuyerFirmUpdateWithoutUsersInput, BuyerFirmUncheckedUpdateWithoutUsersInput>
  }

  export type BuyerFirmUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    subscriptionExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    growers?: GrowerUpdateManyWithoutBuyerFirmNestedInput
    transactions?: TransactionUpdateManyWithoutBuyerFirmNestedInput
    payments?: PaymentUpdateManyWithoutBuyerFirmNestedInput
    draftTransactions?: DraftTransactionUpdateManyWithoutBuyerFirmNestedInput
  }

  export type BuyerFirmUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    subscriptionExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    growers?: GrowerUncheckedUpdateManyWithoutBuyerFirmNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutBuyerFirmNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutBuyerFirmNestedInput
    draftTransactions?: DraftTransactionUncheckedUpdateManyWithoutBuyerFirmNestedInput
  }

  export type DraftTransactionUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: DraftTransactionWhereUniqueInput
    update: XOR<DraftTransactionUpdateWithoutCreatedByInput, DraftTransactionUncheckedUpdateWithoutCreatedByInput>
    create: XOR<DraftTransactionCreateWithoutCreatedByInput, DraftTransactionUncheckedCreateWithoutCreatedByInput>
  }

  export type DraftTransactionUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: DraftTransactionWhereUniqueInput
    data: XOR<DraftTransactionUpdateWithoutCreatedByInput, DraftTransactionUncheckedUpdateWithoutCreatedByInput>
  }

  export type DraftTransactionUpdateManyWithWhereWithoutCreatedByInput = {
    where: DraftTransactionScalarWhereInput
    data: XOR<DraftTransactionUpdateManyMutationInput, DraftTransactionUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type BuyerFirmCreateWithoutGrowersInput = {
    id?: string
    uniqueId: string
    firmName: string
    ownerName: string
    mobile: string
    subscriptionPlan?: string
    subscriptionExpiry?: Date | string | null
    createdAt?: Date | string
    logoUrl?: string | null
    users?: UserCreateNestedManyWithoutBuyerFirmInput
    transactions?: TransactionCreateNestedManyWithoutBuyerFirmInput
    payments?: PaymentCreateNestedManyWithoutBuyerFirmInput
    draftTransactions?: DraftTransactionCreateNestedManyWithoutBuyerFirmInput
  }

  export type BuyerFirmUncheckedCreateWithoutGrowersInput = {
    id?: string
    uniqueId: string
    firmName: string
    ownerName: string
    mobile: string
    subscriptionPlan?: string
    subscriptionExpiry?: Date | string | null
    createdAt?: Date | string
    logoUrl?: string | null
    users?: UserUncheckedCreateNestedManyWithoutBuyerFirmInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutBuyerFirmInput
    payments?: PaymentUncheckedCreateNestedManyWithoutBuyerFirmInput
    draftTransactions?: DraftTransactionUncheckedCreateNestedManyWithoutBuyerFirmInput
  }

  export type BuyerFirmCreateOrConnectWithoutGrowersInput = {
    where: BuyerFirmWhereUniqueInput
    create: XOR<BuyerFirmCreateWithoutGrowersInput, BuyerFirmUncheckedCreateWithoutGrowersInput>
  }

  export type TransactionCreateWithoutGrowerInput = {
    id?: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    grossAmount?: number
    commission?: number
    labour?: number
    freight?: number
    association?: number
    printing?: number
    miscellaneous?: number
    totalAmount: number
    receivedAt?: Date | string
    notes?: string | null
    notified?: boolean
    createdAt?: Date | string
    buyerFirm: BuyerFirmCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutGrowerInput = {
    id?: string
    buyerFirmId: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    grossAmount?: number
    commission?: number
    labour?: number
    freight?: number
    association?: number
    printing?: number
    miscellaneous?: number
    totalAmount: number
    receivedAt?: Date | string
    notes?: string | null
    notified?: boolean
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutGrowerInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutGrowerInput, TransactionUncheckedCreateWithoutGrowerInput>
  }

  export type TransactionCreateManyGrowerInputEnvelope = {
    data: TransactionCreateManyGrowerInput | TransactionCreateManyGrowerInput[]
  }

  export type PaymentCreateWithoutGrowerInput = {
    id?: string
    amount: number
    notes?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
    buyerFirm: BuyerFirmCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutGrowerInput = {
    id?: string
    buyerFirmId: string
    amount: number
    notes?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutGrowerInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutGrowerInput, PaymentUncheckedCreateWithoutGrowerInput>
  }

  export type PaymentCreateManyGrowerInputEnvelope = {
    data: PaymentCreateManyGrowerInput | PaymentCreateManyGrowerInput[]
  }

  export type NotificationCreateWithoutGrowerInput = {
    id?: string
    message: string
    sentAt?: Date | string
    status?: string
    type?: string
  }

  export type NotificationUncheckedCreateWithoutGrowerInput = {
    id?: string
    message: string
    sentAt?: Date | string
    status?: string
    type?: string
  }

  export type NotificationCreateOrConnectWithoutGrowerInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutGrowerInput, NotificationUncheckedCreateWithoutGrowerInput>
  }

  export type NotificationCreateManyGrowerInputEnvelope = {
    data: NotificationCreateManyGrowerInput | NotificationCreateManyGrowerInput[]
  }

  export type AgreementCreateWithoutGrowerInput = {
    id?: string
    pledgedProduce: string
    paymentTerms: string
    installments: string
    buyerSign: string
    validUntil?: Date | string | null
    signedAt?: Date | string
    createdAt?: Date | string
  }

  export type AgreementUncheckedCreateWithoutGrowerInput = {
    id?: string
    pledgedProduce: string
    paymentTerms: string
    installments: string
    buyerSign: string
    validUntil?: Date | string | null
    signedAt?: Date | string
    createdAt?: Date | string
  }

  export type AgreementCreateOrConnectWithoutGrowerInput = {
    where: AgreementWhereUniqueInput
    create: XOR<AgreementCreateWithoutGrowerInput, AgreementUncheckedCreateWithoutGrowerInput>
  }

  export type AgreementCreateManyGrowerInputEnvelope = {
    data: AgreementCreateManyGrowerInput | AgreementCreateManyGrowerInput[]
  }

  export type DraftTransactionCreateWithoutGrowerInput = {
    id?: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    notes?: string | null
    status?: string
    createdAt?: Date | string
    buyerFirm: BuyerFirmCreateNestedOneWithoutDraftTransactionsInput
    createdBy: UserCreateNestedOneWithoutDraftTransactionsInput
  }

  export type DraftTransactionUncheckedCreateWithoutGrowerInput = {
    id?: string
    buyerFirmId: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    notes?: string | null
    createdById: string
    status?: string
    createdAt?: Date | string
  }

  export type DraftTransactionCreateOrConnectWithoutGrowerInput = {
    where: DraftTransactionWhereUniqueInput
    create: XOR<DraftTransactionCreateWithoutGrowerInput, DraftTransactionUncheckedCreateWithoutGrowerInput>
  }

  export type DraftTransactionCreateManyGrowerInputEnvelope = {
    data: DraftTransactionCreateManyGrowerInput | DraftTransactionCreateManyGrowerInput[]
  }

  export type BuyerFirmUpsertWithoutGrowersInput = {
    update: XOR<BuyerFirmUpdateWithoutGrowersInput, BuyerFirmUncheckedUpdateWithoutGrowersInput>
    create: XOR<BuyerFirmCreateWithoutGrowersInput, BuyerFirmUncheckedCreateWithoutGrowersInput>
    where?: BuyerFirmWhereInput
  }

  export type BuyerFirmUpdateToOneWithWhereWithoutGrowersInput = {
    where?: BuyerFirmWhereInput
    data: XOR<BuyerFirmUpdateWithoutGrowersInput, BuyerFirmUncheckedUpdateWithoutGrowersInput>
  }

  export type BuyerFirmUpdateWithoutGrowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    subscriptionExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutBuyerFirmNestedInput
    transactions?: TransactionUpdateManyWithoutBuyerFirmNestedInput
    payments?: PaymentUpdateManyWithoutBuyerFirmNestedInput
    draftTransactions?: DraftTransactionUpdateManyWithoutBuyerFirmNestedInput
  }

  export type BuyerFirmUncheckedUpdateWithoutGrowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    subscriptionExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutBuyerFirmNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutBuyerFirmNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutBuyerFirmNestedInput
    draftTransactions?: DraftTransactionUncheckedUpdateManyWithoutBuyerFirmNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutGrowerInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutGrowerInput, TransactionUncheckedUpdateWithoutGrowerInput>
    create: XOR<TransactionCreateWithoutGrowerInput, TransactionUncheckedCreateWithoutGrowerInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutGrowerInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutGrowerInput, TransactionUncheckedUpdateWithoutGrowerInput>
  }

  export type TransactionUpdateManyWithWhereWithoutGrowerInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutGrowerInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutGrowerInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutGrowerInput, PaymentUncheckedUpdateWithoutGrowerInput>
    create: XOR<PaymentCreateWithoutGrowerInput, PaymentUncheckedCreateWithoutGrowerInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutGrowerInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutGrowerInput, PaymentUncheckedUpdateWithoutGrowerInput>
  }

  export type PaymentUpdateManyWithWhereWithoutGrowerInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutGrowerInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutGrowerInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutGrowerInput, NotificationUncheckedUpdateWithoutGrowerInput>
    create: XOR<NotificationCreateWithoutGrowerInput, NotificationUncheckedCreateWithoutGrowerInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutGrowerInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutGrowerInput, NotificationUncheckedUpdateWithoutGrowerInput>
  }

  export type NotificationUpdateManyWithWhereWithoutGrowerInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutGrowerInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    growerId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    sentAt?: DateTimeFilter<"Notification"> | Date | string
    status?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
  }

  export type AgreementUpsertWithWhereUniqueWithoutGrowerInput = {
    where: AgreementWhereUniqueInput
    update: XOR<AgreementUpdateWithoutGrowerInput, AgreementUncheckedUpdateWithoutGrowerInput>
    create: XOR<AgreementCreateWithoutGrowerInput, AgreementUncheckedCreateWithoutGrowerInput>
  }

  export type AgreementUpdateWithWhereUniqueWithoutGrowerInput = {
    where: AgreementWhereUniqueInput
    data: XOR<AgreementUpdateWithoutGrowerInput, AgreementUncheckedUpdateWithoutGrowerInput>
  }

  export type AgreementUpdateManyWithWhereWithoutGrowerInput = {
    where: AgreementScalarWhereInput
    data: XOR<AgreementUpdateManyMutationInput, AgreementUncheckedUpdateManyWithoutGrowerInput>
  }

  export type AgreementScalarWhereInput = {
    AND?: AgreementScalarWhereInput | AgreementScalarWhereInput[]
    OR?: AgreementScalarWhereInput[]
    NOT?: AgreementScalarWhereInput | AgreementScalarWhereInput[]
    id?: StringFilter<"Agreement"> | string
    growerId?: StringFilter<"Agreement"> | string
    pledgedProduce?: StringFilter<"Agreement"> | string
    paymentTerms?: StringFilter<"Agreement"> | string
    installments?: StringFilter<"Agreement"> | string
    buyerSign?: StringFilter<"Agreement"> | string
    validUntil?: DateTimeNullableFilter<"Agreement"> | Date | string | null
    signedAt?: DateTimeFilter<"Agreement"> | Date | string
    createdAt?: DateTimeFilter<"Agreement"> | Date | string
  }

  export type DraftTransactionUpsertWithWhereUniqueWithoutGrowerInput = {
    where: DraftTransactionWhereUniqueInput
    update: XOR<DraftTransactionUpdateWithoutGrowerInput, DraftTransactionUncheckedUpdateWithoutGrowerInput>
    create: XOR<DraftTransactionCreateWithoutGrowerInput, DraftTransactionUncheckedCreateWithoutGrowerInput>
  }

  export type DraftTransactionUpdateWithWhereUniqueWithoutGrowerInput = {
    where: DraftTransactionWhereUniqueInput
    data: XOR<DraftTransactionUpdateWithoutGrowerInput, DraftTransactionUncheckedUpdateWithoutGrowerInput>
  }

  export type DraftTransactionUpdateManyWithWhereWithoutGrowerInput = {
    where: DraftTransactionScalarWhereInput
    data: XOR<DraftTransactionUpdateManyMutationInput, DraftTransactionUncheckedUpdateManyWithoutGrowerInput>
  }

  export type GrowerCreateWithoutTransactionsInput = {
    id?: string
    name: string
    mobile: string
    address?: string | null
    createdAt?: Date | string
    buyerFirm: BuyerFirmCreateNestedOneWithoutGrowersInput
    payments?: PaymentCreateNestedManyWithoutGrowerInput
    notifications?: NotificationCreateNestedManyWithoutGrowerInput
    agreements?: AgreementCreateNestedManyWithoutGrowerInput
    draftTransactions?: DraftTransactionCreateNestedManyWithoutGrowerInput
  }

  export type GrowerUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    mobile: string
    address?: string | null
    buyerFirmId: string
    createdAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutGrowerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutGrowerInput
    agreements?: AgreementUncheckedCreateNestedManyWithoutGrowerInput
    draftTransactions?: DraftTransactionUncheckedCreateNestedManyWithoutGrowerInput
  }

  export type GrowerCreateOrConnectWithoutTransactionsInput = {
    where: GrowerWhereUniqueInput
    create: XOR<GrowerCreateWithoutTransactionsInput, GrowerUncheckedCreateWithoutTransactionsInput>
  }

  export type BuyerFirmCreateWithoutTransactionsInput = {
    id?: string
    uniqueId: string
    firmName: string
    ownerName: string
    mobile: string
    subscriptionPlan?: string
    subscriptionExpiry?: Date | string | null
    createdAt?: Date | string
    logoUrl?: string | null
    users?: UserCreateNestedManyWithoutBuyerFirmInput
    growers?: GrowerCreateNestedManyWithoutBuyerFirmInput
    payments?: PaymentCreateNestedManyWithoutBuyerFirmInput
    draftTransactions?: DraftTransactionCreateNestedManyWithoutBuyerFirmInput
  }

  export type BuyerFirmUncheckedCreateWithoutTransactionsInput = {
    id?: string
    uniqueId: string
    firmName: string
    ownerName: string
    mobile: string
    subscriptionPlan?: string
    subscriptionExpiry?: Date | string | null
    createdAt?: Date | string
    logoUrl?: string | null
    users?: UserUncheckedCreateNestedManyWithoutBuyerFirmInput
    growers?: GrowerUncheckedCreateNestedManyWithoutBuyerFirmInput
    payments?: PaymentUncheckedCreateNestedManyWithoutBuyerFirmInput
    draftTransactions?: DraftTransactionUncheckedCreateNestedManyWithoutBuyerFirmInput
  }

  export type BuyerFirmCreateOrConnectWithoutTransactionsInput = {
    where: BuyerFirmWhereUniqueInput
    create: XOR<BuyerFirmCreateWithoutTransactionsInput, BuyerFirmUncheckedCreateWithoutTransactionsInput>
  }

  export type GrowerUpsertWithoutTransactionsInput = {
    update: XOR<GrowerUpdateWithoutTransactionsInput, GrowerUncheckedUpdateWithoutTransactionsInput>
    create: XOR<GrowerCreateWithoutTransactionsInput, GrowerUncheckedCreateWithoutTransactionsInput>
    where?: GrowerWhereInput
  }

  export type GrowerUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: GrowerWhereInput
    data: XOR<GrowerUpdateWithoutTransactionsInput, GrowerUncheckedUpdateWithoutTransactionsInput>
  }

  export type GrowerUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerFirm?: BuyerFirmUpdateOneRequiredWithoutGrowersNestedInput
    payments?: PaymentUpdateManyWithoutGrowerNestedInput
    notifications?: NotificationUpdateManyWithoutGrowerNestedInput
    agreements?: AgreementUpdateManyWithoutGrowerNestedInput
    draftTransactions?: DraftTransactionUpdateManyWithoutGrowerNestedInput
  }

  export type GrowerUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutGrowerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutGrowerNestedInput
    agreements?: AgreementUncheckedUpdateManyWithoutGrowerNestedInput
    draftTransactions?: DraftTransactionUncheckedUpdateManyWithoutGrowerNestedInput
  }

  export type BuyerFirmUpsertWithoutTransactionsInput = {
    update: XOR<BuyerFirmUpdateWithoutTransactionsInput, BuyerFirmUncheckedUpdateWithoutTransactionsInput>
    create: XOR<BuyerFirmCreateWithoutTransactionsInput, BuyerFirmUncheckedCreateWithoutTransactionsInput>
    where?: BuyerFirmWhereInput
  }

  export type BuyerFirmUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: BuyerFirmWhereInput
    data: XOR<BuyerFirmUpdateWithoutTransactionsInput, BuyerFirmUncheckedUpdateWithoutTransactionsInput>
  }

  export type BuyerFirmUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    subscriptionExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutBuyerFirmNestedInput
    growers?: GrowerUpdateManyWithoutBuyerFirmNestedInput
    payments?: PaymentUpdateManyWithoutBuyerFirmNestedInput
    draftTransactions?: DraftTransactionUpdateManyWithoutBuyerFirmNestedInput
  }

  export type BuyerFirmUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    subscriptionExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutBuyerFirmNestedInput
    growers?: GrowerUncheckedUpdateManyWithoutBuyerFirmNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutBuyerFirmNestedInput
    draftTransactions?: DraftTransactionUncheckedUpdateManyWithoutBuyerFirmNestedInput
  }

  export type GrowerCreateWithoutPaymentsInput = {
    id?: string
    name: string
    mobile: string
    address?: string | null
    createdAt?: Date | string
    buyerFirm: BuyerFirmCreateNestedOneWithoutGrowersInput
    transactions?: TransactionCreateNestedManyWithoutGrowerInput
    notifications?: NotificationCreateNestedManyWithoutGrowerInput
    agreements?: AgreementCreateNestedManyWithoutGrowerInput
    draftTransactions?: DraftTransactionCreateNestedManyWithoutGrowerInput
  }

  export type GrowerUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    mobile: string
    address?: string | null
    buyerFirmId: string
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutGrowerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutGrowerInput
    agreements?: AgreementUncheckedCreateNestedManyWithoutGrowerInput
    draftTransactions?: DraftTransactionUncheckedCreateNestedManyWithoutGrowerInput
  }

  export type GrowerCreateOrConnectWithoutPaymentsInput = {
    where: GrowerWhereUniqueInput
    create: XOR<GrowerCreateWithoutPaymentsInput, GrowerUncheckedCreateWithoutPaymentsInput>
  }

  export type BuyerFirmCreateWithoutPaymentsInput = {
    id?: string
    uniqueId: string
    firmName: string
    ownerName: string
    mobile: string
    subscriptionPlan?: string
    subscriptionExpiry?: Date | string | null
    createdAt?: Date | string
    logoUrl?: string | null
    users?: UserCreateNestedManyWithoutBuyerFirmInput
    growers?: GrowerCreateNestedManyWithoutBuyerFirmInput
    transactions?: TransactionCreateNestedManyWithoutBuyerFirmInput
    draftTransactions?: DraftTransactionCreateNestedManyWithoutBuyerFirmInput
  }

  export type BuyerFirmUncheckedCreateWithoutPaymentsInput = {
    id?: string
    uniqueId: string
    firmName: string
    ownerName: string
    mobile: string
    subscriptionPlan?: string
    subscriptionExpiry?: Date | string | null
    createdAt?: Date | string
    logoUrl?: string | null
    users?: UserUncheckedCreateNestedManyWithoutBuyerFirmInput
    growers?: GrowerUncheckedCreateNestedManyWithoutBuyerFirmInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutBuyerFirmInput
    draftTransactions?: DraftTransactionUncheckedCreateNestedManyWithoutBuyerFirmInput
  }

  export type BuyerFirmCreateOrConnectWithoutPaymentsInput = {
    where: BuyerFirmWhereUniqueInput
    create: XOR<BuyerFirmCreateWithoutPaymentsInput, BuyerFirmUncheckedCreateWithoutPaymentsInput>
  }

  export type GrowerUpsertWithoutPaymentsInput = {
    update: XOR<GrowerUpdateWithoutPaymentsInput, GrowerUncheckedUpdateWithoutPaymentsInput>
    create: XOR<GrowerCreateWithoutPaymentsInput, GrowerUncheckedCreateWithoutPaymentsInput>
    where?: GrowerWhereInput
  }

  export type GrowerUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: GrowerWhereInput
    data: XOR<GrowerUpdateWithoutPaymentsInput, GrowerUncheckedUpdateWithoutPaymentsInput>
  }

  export type GrowerUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerFirm?: BuyerFirmUpdateOneRequiredWithoutGrowersNestedInput
    transactions?: TransactionUpdateManyWithoutGrowerNestedInput
    notifications?: NotificationUpdateManyWithoutGrowerNestedInput
    agreements?: AgreementUpdateManyWithoutGrowerNestedInput
    draftTransactions?: DraftTransactionUpdateManyWithoutGrowerNestedInput
  }

  export type GrowerUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutGrowerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutGrowerNestedInput
    agreements?: AgreementUncheckedUpdateManyWithoutGrowerNestedInput
    draftTransactions?: DraftTransactionUncheckedUpdateManyWithoutGrowerNestedInput
  }

  export type BuyerFirmUpsertWithoutPaymentsInput = {
    update: XOR<BuyerFirmUpdateWithoutPaymentsInput, BuyerFirmUncheckedUpdateWithoutPaymentsInput>
    create: XOR<BuyerFirmCreateWithoutPaymentsInput, BuyerFirmUncheckedCreateWithoutPaymentsInput>
    where?: BuyerFirmWhereInput
  }

  export type BuyerFirmUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: BuyerFirmWhereInput
    data: XOR<BuyerFirmUpdateWithoutPaymentsInput, BuyerFirmUncheckedUpdateWithoutPaymentsInput>
  }

  export type BuyerFirmUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    subscriptionExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutBuyerFirmNestedInput
    growers?: GrowerUpdateManyWithoutBuyerFirmNestedInput
    transactions?: TransactionUpdateManyWithoutBuyerFirmNestedInput
    draftTransactions?: DraftTransactionUpdateManyWithoutBuyerFirmNestedInput
  }

  export type BuyerFirmUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    subscriptionExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutBuyerFirmNestedInput
    growers?: GrowerUncheckedUpdateManyWithoutBuyerFirmNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutBuyerFirmNestedInput
    draftTransactions?: DraftTransactionUncheckedUpdateManyWithoutBuyerFirmNestedInput
  }

  export type GrowerCreateWithoutNotificationsInput = {
    id?: string
    name: string
    mobile: string
    address?: string | null
    createdAt?: Date | string
    buyerFirm: BuyerFirmCreateNestedOneWithoutGrowersInput
    transactions?: TransactionCreateNestedManyWithoutGrowerInput
    payments?: PaymentCreateNestedManyWithoutGrowerInput
    agreements?: AgreementCreateNestedManyWithoutGrowerInput
    draftTransactions?: DraftTransactionCreateNestedManyWithoutGrowerInput
  }

  export type GrowerUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    mobile: string
    address?: string | null
    buyerFirmId: string
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutGrowerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutGrowerInput
    agreements?: AgreementUncheckedCreateNestedManyWithoutGrowerInput
    draftTransactions?: DraftTransactionUncheckedCreateNestedManyWithoutGrowerInput
  }

  export type GrowerCreateOrConnectWithoutNotificationsInput = {
    where: GrowerWhereUniqueInput
    create: XOR<GrowerCreateWithoutNotificationsInput, GrowerUncheckedCreateWithoutNotificationsInput>
  }

  export type GrowerUpsertWithoutNotificationsInput = {
    update: XOR<GrowerUpdateWithoutNotificationsInput, GrowerUncheckedUpdateWithoutNotificationsInput>
    create: XOR<GrowerCreateWithoutNotificationsInput, GrowerUncheckedCreateWithoutNotificationsInput>
    where?: GrowerWhereInput
  }

  export type GrowerUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: GrowerWhereInput
    data: XOR<GrowerUpdateWithoutNotificationsInput, GrowerUncheckedUpdateWithoutNotificationsInput>
  }

  export type GrowerUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerFirm?: BuyerFirmUpdateOneRequiredWithoutGrowersNestedInput
    transactions?: TransactionUpdateManyWithoutGrowerNestedInput
    payments?: PaymentUpdateManyWithoutGrowerNestedInput
    agreements?: AgreementUpdateManyWithoutGrowerNestedInput
    draftTransactions?: DraftTransactionUpdateManyWithoutGrowerNestedInput
  }

  export type GrowerUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutGrowerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutGrowerNestedInput
    agreements?: AgreementUncheckedUpdateManyWithoutGrowerNestedInput
    draftTransactions?: DraftTransactionUncheckedUpdateManyWithoutGrowerNestedInput
  }

  export type GrowerCreateWithoutAgreementsInput = {
    id?: string
    name: string
    mobile: string
    address?: string | null
    createdAt?: Date | string
    buyerFirm: BuyerFirmCreateNestedOneWithoutGrowersInput
    transactions?: TransactionCreateNestedManyWithoutGrowerInput
    payments?: PaymentCreateNestedManyWithoutGrowerInput
    notifications?: NotificationCreateNestedManyWithoutGrowerInput
    draftTransactions?: DraftTransactionCreateNestedManyWithoutGrowerInput
  }

  export type GrowerUncheckedCreateWithoutAgreementsInput = {
    id?: string
    name: string
    mobile: string
    address?: string | null
    buyerFirmId: string
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutGrowerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutGrowerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutGrowerInput
    draftTransactions?: DraftTransactionUncheckedCreateNestedManyWithoutGrowerInput
  }

  export type GrowerCreateOrConnectWithoutAgreementsInput = {
    where: GrowerWhereUniqueInput
    create: XOR<GrowerCreateWithoutAgreementsInput, GrowerUncheckedCreateWithoutAgreementsInput>
  }

  export type GrowerUpsertWithoutAgreementsInput = {
    update: XOR<GrowerUpdateWithoutAgreementsInput, GrowerUncheckedUpdateWithoutAgreementsInput>
    create: XOR<GrowerCreateWithoutAgreementsInput, GrowerUncheckedCreateWithoutAgreementsInput>
    where?: GrowerWhereInput
  }

  export type GrowerUpdateToOneWithWhereWithoutAgreementsInput = {
    where?: GrowerWhereInput
    data: XOR<GrowerUpdateWithoutAgreementsInput, GrowerUncheckedUpdateWithoutAgreementsInput>
  }

  export type GrowerUpdateWithoutAgreementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerFirm?: BuyerFirmUpdateOneRequiredWithoutGrowersNestedInput
    transactions?: TransactionUpdateManyWithoutGrowerNestedInput
    payments?: PaymentUpdateManyWithoutGrowerNestedInput
    notifications?: NotificationUpdateManyWithoutGrowerNestedInput
    draftTransactions?: DraftTransactionUpdateManyWithoutGrowerNestedInput
  }

  export type GrowerUncheckedUpdateWithoutAgreementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutGrowerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutGrowerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutGrowerNestedInput
    draftTransactions?: DraftTransactionUncheckedUpdateManyWithoutGrowerNestedInput
  }

  export type GrowerCreateWithoutDraftTransactionsInput = {
    id?: string
    name: string
    mobile: string
    address?: string | null
    createdAt?: Date | string
    buyerFirm: BuyerFirmCreateNestedOneWithoutGrowersInput
    transactions?: TransactionCreateNestedManyWithoutGrowerInput
    payments?: PaymentCreateNestedManyWithoutGrowerInput
    notifications?: NotificationCreateNestedManyWithoutGrowerInput
    agreements?: AgreementCreateNestedManyWithoutGrowerInput
  }

  export type GrowerUncheckedCreateWithoutDraftTransactionsInput = {
    id?: string
    name: string
    mobile: string
    address?: string | null
    buyerFirmId: string
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutGrowerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutGrowerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutGrowerInput
    agreements?: AgreementUncheckedCreateNestedManyWithoutGrowerInput
  }

  export type GrowerCreateOrConnectWithoutDraftTransactionsInput = {
    where: GrowerWhereUniqueInput
    create: XOR<GrowerCreateWithoutDraftTransactionsInput, GrowerUncheckedCreateWithoutDraftTransactionsInput>
  }

  export type BuyerFirmCreateWithoutDraftTransactionsInput = {
    id?: string
    uniqueId: string
    firmName: string
    ownerName: string
    mobile: string
    subscriptionPlan?: string
    subscriptionExpiry?: Date | string | null
    createdAt?: Date | string
    logoUrl?: string | null
    users?: UserCreateNestedManyWithoutBuyerFirmInput
    growers?: GrowerCreateNestedManyWithoutBuyerFirmInput
    transactions?: TransactionCreateNestedManyWithoutBuyerFirmInput
    payments?: PaymentCreateNestedManyWithoutBuyerFirmInput
  }

  export type BuyerFirmUncheckedCreateWithoutDraftTransactionsInput = {
    id?: string
    uniqueId: string
    firmName: string
    ownerName: string
    mobile: string
    subscriptionPlan?: string
    subscriptionExpiry?: Date | string | null
    createdAt?: Date | string
    logoUrl?: string | null
    users?: UserUncheckedCreateNestedManyWithoutBuyerFirmInput
    growers?: GrowerUncheckedCreateNestedManyWithoutBuyerFirmInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutBuyerFirmInput
    payments?: PaymentUncheckedCreateNestedManyWithoutBuyerFirmInput
  }

  export type BuyerFirmCreateOrConnectWithoutDraftTransactionsInput = {
    where: BuyerFirmWhereUniqueInput
    create: XOR<BuyerFirmCreateWithoutDraftTransactionsInput, BuyerFirmUncheckedCreateWithoutDraftTransactionsInput>
  }

  export type UserCreateWithoutDraftTransactionsInput = {
    id?: string
    mobile: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    buyerFirm: BuyerFirmCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutDraftTransactionsInput = {
    id?: string
    mobile: string
    name?: string | null
    role?: string
    buyerFirmId: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutDraftTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDraftTransactionsInput, UserUncheckedCreateWithoutDraftTransactionsInput>
  }

  export type GrowerUpsertWithoutDraftTransactionsInput = {
    update: XOR<GrowerUpdateWithoutDraftTransactionsInput, GrowerUncheckedUpdateWithoutDraftTransactionsInput>
    create: XOR<GrowerCreateWithoutDraftTransactionsInput, GrowerUncheckedCreateWithoutDraftTransactionsInput>
    where?: GrowerWhereInput
  }

  export type GrowerUpdateToOneWithWhereWithoutDraftTransactionsInput = {
    where?: GrowerWhereInput
    data: XOR<GrowerUpdateWithoutDraftTransactionsInput, GrowerUncheckedUpdateWithoutDraftTransactionsInput>
  }

  export type GrowerUpdateWithoutDraftTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerFirm?: BuyerFirmUpdateOneRequiredWithoutGrowersNestedInput
    transactions?: TransactionUpdateManyWithoutGrowerNestedInput
    payments?: PaymentUpdateManyWithoutGrowerNestedInput
    notifications?: NotificationUpdateManyWithoutGrowerNestedInput
    agreements?: AgreementUpdateManyWithoutGrowerNestedInput
  }

  export type GrowerUncheckedUpdateWithoutDraftTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutGrowerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutGrowerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutGrowerNestedInput
    agreements?: AgreementUncheckedUpdateManyWithoutGrowerNestedInput
  }

  export type BuyerFirmUpsertWithoutDraftTransactionsInput = {
    update: XOR<BuyerFirmUpdateWithoutDraftTransactionsInput, BuyerFirmUncheckedUpdateWithoutDraftTransactionsInput>
    create: XOR<BuyerFirmCreateWithoutDraftTransactionsInput, BuyerFirmUncheckedCreateWithoutDraftTransactionsInput>
    where?: BuyerFirmWhereInput
  }

  export type BuyerFirmUpdateToOneWithWhereWithoutDraftTransactionsInput = {
    where?: BuyerFirmWhereInput
    data: XOR<BuyerFirmUpdateWithoutDraftTransactionsInput, BuyerFirmUncheckedUpdateWithoutDraftTransactionsInput>
  }

  export type BuyerFirmUpdateWithoutDraftTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    subscriptionExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutBuyerFirmNestedInput
    growers?: GrowerUpdateManyWithoutBuyerFirmNestedInput
    transactions?: TransactionUpdateManyWithoutBuyerFirmNestedInput
    payments?: PaymentUpdateManyWithoutBuyerFirmNestedInput
  }

  export type BuyerFirmUncheckedUpdateWithoutDraftTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    firmName?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    subscriptionExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutBuyerFirmNestedInput
    growers?: GrowerUncheckedUpdateManyWithoutBuyerFirmNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutBuyerFirmNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutBuyerFirmNestedInput
  }

  export type UserUpsertWithoutDraftTransactionsInput = {
    update: XOR<UserUpdateWithoutDraftTransactionsInput, UserUncheckedUpdateWithoutDraftTransactionsInput>
    create: XOR<UserCreateWithoutDraftTransactionsInput, UserUncheckedCreateWithoutDraftTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDraftTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDraftTransactionsInput, UserUncheckedUpdateWithoutDraftTransactionsInput>
  }

  export type UserUpdateWithoutDraftTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerFirm?: BuyerFirmUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutDraftTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyBuyerFirmInput = {
    id?: string
    mobile: string
    name?: string | null
    role?: string
    createdAt?: Date | string
  }

  export type GrowerCreateManyBuyerFirmInput = {
    id?: string
    name: string
    mobile: string
    address?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateManyBuyerFirmInput = {
    id?: string
    growerId: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    grossAmount?: number
    commission?: number
    labour?: number
    freight?: number
    association?: number
    printing?: number
    miscellaneous?: number
    totalAmount: number
    receivedAt?: Date | string
    notes?: string | null
    notified?: boolean
    createdAt?: Date | string
  }

  export type PaymentCreateManyBuyerFirmInput = {
    id?: string
    growerId: string
    amount: number
    notes?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type DraftTransactionCreateManyBuyerFirmInput = {
    id?: string
    growerId: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    notes?: string | null
    createdById: string
    status?: string
    createdAt?: Date | string
  }

  export type UserUpdateWithoutBuyerFirmInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draftTransactions?: DraftTransactionUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutBuyerFirmInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draftTransactions?: DraftTransactionUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBuyerFirmInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrowerUpdateWithoutBuyerFirmInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutGrowerNestedInput
    payments?: PaymentUpdateManyWithoutGrowerNestedInput
    notifications?: NotificationUpdateManyWithoutGrowerNestedInput
    agreements?: AgreementUpdateManyWithoutGrowerNestedInput
    draftTransactions?: DraftTransactionUpdateManyWithoutGrowerNestedInput
  }

  export type GrowerUncheckedUpdateWithoutBuyerFirmInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutGrowerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutGrowerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutGrowerNestedInput
    agreements?: AgreementUncheckedUpdateManyWithoutGrowerNestedInput
    draftTransactions?: DraftTransactionUncheckedUpdateManyWithoutGrowerNestedInput
  }

  export type GrowerUncheckedUpdateManyWithoutBuyerFirmInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutBuyerFirmInput = {
    id?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    grossAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    labour?: FloatFieldUpdateOperationsInput | number
    freight?: FloatFieldUpdateOperationsInput | number
    association?: FloatFieldUpdateOperationsInput | number
    printing?: FloatFieldUpdateOperationsInput | number
    miscellaneous?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grower?: GrowerUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutBuyerFirmInput = {
    id?: StringFieldUpdateOperationsInput | string
    growerId?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    grossAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    labour?: FloatFieldUpdateOperationsInput | number
    freight?: FloatFieldUpdateOperationsInput | number
    association?: FloatFieldUpdateOperationsInput | number
    printing?: FloatFieldUpdateOperationsInput | number
    miscellaneous?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutBuyerFirmInput = {
    id?: StringFieldUpdateOperationsInput | string
    growerId?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    grossAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    labour?: FloatFieldUpdateOperationsInput | number
    freight?: FloatFieldUpdateOperationsInput | number
    association?: FloatFieldUpdateOperationsInput | number
    printing?: FloatFieldUpdateOperationsInput | number
    miscellaneous?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutBuyerFirmInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grower?: GrowerUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutBuyerFirmInput = {
    id?: StringFieldUpdateOperationsInput | string
    growerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutBuyerFirmInput = {
    id?: StringFieldUpdateOperationsInput | string
    growerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftTransactionUpdateWithoutBuyerFirmInput = {
    id?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grower?: GrowerUpdateOneRequiredWithoutDraftTransactionsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutDraftTransactionsNestedInput
  }

  export type DraftTransactionUncheckedUpdateWithoutBuyerFirmInput = {
    id?: StringFieldUpdateOperationsInput | string
    growerId?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftTransactionUncheckedUpdateManyWithoutBuyerFirmInput = {
    id?: StringFieldUpdateOperationsInput | string
    growerId?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftTransactionCreateManyCreatedByInput = {
    id?: string
    growerId: string
    buyerFirmId: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    notes?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type DraftTransactionUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grower?: GrowerUpdateOneRequiredWithoutDraftTransactionsNestedInput
    buyerFirm?: BuyerFirmUpdateOneRequiredWithoutDraftTransactionsNestedInput
  }

  export type DraftTransactionUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    growerId?: StringFieldUpdateOperationsInput | string
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftTransactionUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    growerId?: StringFieldUpdateOperationsInput | string
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyGrowerInput = {
    id?: string
    buyerFirmId: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    grossAmount?: number
    commission?: number
    labour?: number
    freight?: number
    association?: number
    printing?: number
    miscellaneous?: number
    totalAmount: number
    receivedAt?: Date | string
    notes?: string | null
    notified?: boolean
    createdAt?: Date | string
  }

  export type PaymentCreateManyGrowerInput = {
    id?: string
    buyerFirmId: string
    amount: number
    notes?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type NotificationCreateManyGrowerInput = {
    id?: string
    message: string
    sentAt?: Date | string
    status?: string
    type?: string
  }

  export type AgreementCreateManyGrowerInput = {
    id?: string
    pledgedProduce: string
    paymentTerms: string
    installments: string
    buyerSign: string
    validUntil?: Date | string | null
    signedAt?: Date | string
    createdAt?: Date | string
  }

  export type DraftTransactionCreateManyGrowerInput = {
    id?: string
    buyerFirmId: string
    fruitType: string
    quantity: number
    unit?: string
    rate: number
    notes?: string | null
    createdById: string
    status?: string
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutGrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    grossAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    labour?: FloatFieldUpdateOperationsInput | number
    freight?: FloatFieldUpdateOperationsInput | number
    association?: FloatFieldUpdateOperationsInput | number
    printing?: FloatFieldUpdateOperationsInput | number
    miscellaneous?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerFirm?: BuyerFirmUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutGrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    grossAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    labour?: FloatFieldUpdateOperationsInput | number
    freight?: FloatFieldUpdateOperationsInput | number
    association?: FloatFieldUpdateOperationsInput | number
    printing?: FloatFieldUpdateOperationsInput | number
    miscellaneous?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutGrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    grossAmount?: FloatFieldUpdateOperationsInput | number
    commission?: FloatFieldUpdateOperationsInput | number
    labour?: FloatFieldUpdateOperationsInput | number
    freight?: FloatFieldUpdateOperationsInput | number
    association?: FloatFieldUpdateOperationsInput | number
    printing?: FloatFieldUpdateOperationsInput | number
    miscellaneous?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutGrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerFirm?: BuyerFirmUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutGrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutGrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutGrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateWithoutGrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateManyWithoutGrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type AgreementUpdateWithoutGrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    pledgedProduce?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    installments?: StringFieldUpdateOperationsInput | string
    buyerSign?: StringFieldUpdateOperationsInput | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgreementUncheckedUpdateWithoutGrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    pledgedProduce?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    installments?: StringFieldUpdateOperationsInput | string
    buyerSign?: StringFieldUpdateOperationsInput | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgreementUncheckedUpdateManyWithoutGrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    pledgedProduce?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    installments?: StringFieldUpdateOperationsInput | string
    buyerSign?: StringFieldUpdateOperationsInput | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftTransactionUpdateWithoutGrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerFirm?: BuyerFirmUpdateOneRequiredWithoutDraftTransactionsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutDraftTransactionsNestedInput
  }

  export type DraftTransactionUncheckedUpdateWithoutGrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftTransactionUncheckedUpdateManyWithoutGrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerFirmId?: StringFieldUpdateOperationsInput | string
    fruitType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}