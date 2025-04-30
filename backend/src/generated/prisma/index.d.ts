
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Setor
 * 
 */
export type Setor = $Result.DefaultSelection<Prisma.$SetorPayload>
/**
 * Model Maquina
 * 
 */
export type Maquina = $Result.DefaultSelection<Prisma.$MaquinaPayload>
/**
 * Model Ferramenta
 * 
 */
export type Ferramenta = $Result.DefaultSelection<Prisma.$FerramentaPayload>
/**
 * Model Chamado
 * 
 */
export type Chamado = $Result.DefaultSelection<Prisma.$ChamadoPayload>
/**
 * Model Notificacao
 * 
 */
export type Notificacao = $Result.DefaultSelection<Prisma.$NotificacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setor`: Exposes CRUD operations for the **Setor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Setors
    * const setors = await prisma.setor.findMany()
    * ```
    */
  get setor(): Prisma.SetorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maquina`: Exposes CRUD operations for the **Maquina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maquinas
    * const maquinas = await prisma.maquina.findMany()
    * ```
    */
  get maquina(): Prisma.MaquinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ferramenta`: Exposes CRUD operations for the **Ferramenta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ferramentas
    * const ferramentas = await prisma.ferramenta.findMany()
    * ```
    */
  get ferramenta(): Prisma.FerramentaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chamado`: Exposes CRUD operations for the **Chamado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chamados
    * const chamados = await prisma.chamado.findMany()
    * ```
    */
  get chamado(): Prisma.ChamadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificacao`: Exposes CRUD operations for the **Notificacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacaos
    * const notificacaos = await prisma.notificacao.findMany()
    * ```
    */
  get notificacao(): Prisma.NotificacaoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Setor: 'Setor',
    Maquina: 'Maquina',
    Ferramenta: 'Ferramenta',
    Chamado: 'Chamado',
    Notificacao: 'Notificacao'
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
      modelProps: "user" | "setor" | "maquina" | "ferramenta" | "chamado" | "notificacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Setor: {
        payload: Prisma.$SetorPayload<ExtArgs>
        fields: Prisma.SetorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SetorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SetorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          findFirst: {
            args: Prisma.SetorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SetorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          findMany: {
            args: Prisma.SetorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>[]
          }
          create: {
            args: Prisma.SetorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          createMany: {
            args: Prisma.SetorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SetorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          update: {
            args: Prisma.SetorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          deleteMany: {
            args: Prisma.SetorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SetorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SetorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          aggregate: {
            args: Prisma.SetorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetor>
          }
          groupBy: {
            args: Prisma.SetorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SetorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SetorCountArgs<ExtArgs>
            result: $Utils.Optional<SetorCountAggregateOutputType> | number
          }
        }
      }
      Maquina: {
        payload: Prisma.$MaquinaPayload<ExtArgs>
        fields: Prisma.MaquinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaquinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaquinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload>
          }
          findFirst: {
            args: Prisma.MaquinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaquinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload>
          }
          findMany: {
            args: Prisma.MaquinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload>[]
          }
          create: {
            args: Prisma.MaquinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload>
          }
          createMany: {
            args: Prisma.MaquinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MaquinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload>
          }
          update: {
            args: Prisma.MaquinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload>
          }
          deleteMany: {
            args: Prisma.MaquinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaquinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaquinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaquinaPayload>
          }
          aggregate: {
            args: Prisma.MaquinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaquina>
          }
          groupBy: {
            args: Prisma.MaquinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaquinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaquinaCountArgs<ExtArgs>
            result: $Utils.Optional<MaquinaCountAggregateOutputType> | number
          }
        }
      }
      Ferramenta: {
        payload: Prisma.$FerramentaPayload<ExtArgs>
        fields: Prisma.FerramentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FerramentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FerramentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FerramentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FerramentaPayload>
          }
          findFirst: {
            args: Prisma.FerramentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FerramentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FerramentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FerramentaPayload>
          }
          findMany: {
            args: Prisma.FerramentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FerramentaPayload>[]
          }
          create: {
            args: Prisma.FerramentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FerramentaPayload>
          }
          createMany: {
            args: Prisma.FerramentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FerramentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FerramentaPayload>
          }
          update: {
            args: Prisma.FerramentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FerramentaPayload>
          }
          deleteMany: {
            args: Prisma.FerramentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FerramentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FerramentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FerramentaPayload>
          }
          aggregate: {
            args: Prisma.FerramentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFerramenta>
          }
          groupBy: {
            args: Prisma.FerramentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FerramentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FerramentaCountArgs<ExtArgs>
            result: $Utils.Optional<FerramentaCountAggregateOutputType> | number
          }
        }
      }
      Chamado: {
        payload: Prisma.$ChamadoPayload<ExtArgs>
        fields: Prisma.ChamadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChamadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChamadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload>
          }
          findFirst: {
            args: Prisma.ChamadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChamadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload>
          }
          findMany: {
            args: Prisma.ChamadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload>[]
          }
          create: {
            args: Prisma.ChamadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload>
          }
          createMany: {
            args: Prisma.ChamadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChamadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload>
          }
          update: {
            args: Prisma.ChamadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload>
          }
          deleteMany: {
            args: Prisma.ChamadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChamadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChamadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChamadoPayload>
          }
          aggregate: {
            args: Prisma.ChamadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChamado>
          }
          groupBy: {
            args: Prisma.ChamadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChamadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChamadoCountArgs<ExtArgs>
            result: $Utils.Optional<ChamadoCountAggregateOutputType> | number
          }
        }
      }
      Notificacao: {
        payload: Prisma.$NotificacaoPayload<ExtArgs>
        fields: Prisma.NotificacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findFirst: {
            args: Prisma.NotificacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findMany: {
            args: Prisma.NotificacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          create: {
            args: Prisma.NotificacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          createMany: {
            args: Prisma.NotificacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          update: {
            args: Prisma.NotificacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          deleteMany: {
            args: Prisma.NotificacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          aggregate: {
            args: Prisma.NotificacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacao>
          }
          groupBy: {
            args: Prisma.NotificacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacaoCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    setor?: SetorOmit
    maquina?: MaquinaOmit
    ferramenta?: FerramentaOmit
    chamado?: ChamadoOmit
    notificacao?: NotificacaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    chamadosfuncionario: number
    chamadostecnico: number
    notificacoes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chamadosfuncionario?: boolean | UserCountOutputTypeCountChamadosfuncionarioArgs
    chamadostecnico?: boolean | UserCountOutputTypeCountChamadostecnicoArgs
    notificacoes?: boolean | UserCountOutputTypeCountNotificacoesArgs
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
  export type UserCountOutputTypeCountChamadosfuncionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChamadoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChamadostecnicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChamadoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
  }


  /**
   * Count Type SetorCountOutputType
   */

  export type SetorCountOutputType = {
    maquinas: number
  }

  export type SetorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maquinas?: boolean | SetorCountOutputTypeCountMaquinasArgs
  }

  // Custom InputTypes
  /**
   * SetorCountOutputType without action
   */
  export type SetorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetorCountOutputType
     */
    select?: SetorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SetorCountOutputType without action
   */
  export type SetorCountOutputTypeCountMaquinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaquinaWhereInput
  }


  /**
   * Count Type MaquinaCountOutputType
   */

  export type MaquinaCountOutputType = {
    ferramentas: number
    chamados: number
  }

  export type MaquinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ferramentas?: boolean | MaquinaCountOutputTypeCountFerramentasArgs
    chamados?: boolean | MaquinaCountOutputTypeCountChamadosArgs
  }

  // Custom InputTypes
  /**
   * MaquinaCountOutputType without action
   */
  export type MaquinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaquinaCountOutputType
     */
    select?: MaquinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaquinaCountOutputType without action
   */
  export type MaquinaCountOutputTypeCountFerramentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FerramentaWhereInput
  }

  /**
   * MaquinaCountOutputType without action
   */
  export type MaquinaCountOutputTypeCountChamadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChamadoWhereInput
  }


  /**
   * Count Type ChamadoCountOutputType
   */

  export type ChamadoCountOutputType = {
    notificacoes: number
  }

  export type ChamadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notificacoes?: boolean | ChamadoCountOutputTypeCountNotificacoesArgs
  }

  // Custom InputTypes
  /**
   * ChamadoCountOutputType without action
   */
  export type ChamadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChamadoCountOutputType
     */
    select?: ChamadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChamadoCountOutputType without action
   */
  export type ChamadoCountOutputTypeCountNotificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    funcao: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    funcao: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    funcao: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    funcao?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    funcao?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    funcao?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    funcao: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    funcao?: boolean
    chamadosfuncionario?: boolean | User$chamadosfuncionarioArgs<ExtArgs>
    chamadostecnico?: boolean | User$chamadostecnicoArgs<ExtArgs>
    notificacoes?: boolean | User$notificacoesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    funcao?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "funcao", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chamadosfuncionario?: boolean | User$chamadosfuncionarioArgs<ExtArgs>
    chamadostecnico?: boolean | User$chamadostecnicoArgs<ExtArgs>
    notificacoes?: boolean | User$notificacoesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      chamadosfuncionario: Prisma.$ChamadoPayload<ExtArgs>[]
      chamadostecnico: Prisma.$ChamadoPayload<ExtArgs>[]
      notificacoes: Prisma.$NotificacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      funcao: string
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
    chamadosfuncionario<T extends User$chamadosfuncionarioArgs<ExtArgs> = {}>(args?: Subset<T, User$chamadosfuncionarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chamadostecnico<T extends User$chamadostecnicoArgs<ExtArgs> = {}>(args?: Subset<T, User$chamadostecnicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificacoes<T extends User$notificacoesArgs<ExtArgs> = {}>(args?: Subset<T, User$notificacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly funcao: FieldRef<"User", 'String'>
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
    skipDuplicates?: boolean
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
   * User.chamadosfuncionario
   */
  export type User$chamadosfuncionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    where?: ChamadoWhereInput
    orderBy?: ChamadoOrderByWithRelationInput | ChamadoOrderByWithRelationInput[]
    cursor?: ChamadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChamadoScalarFieldEnum | ChamadoScalarFieldEnum[]
  }

  /**
   * User.chamadostecnico
   */
  export type User$chamadostecnicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    where?: ChamadoWhereInput
    orderBy?: ChamadoOrderByWithRelationInput | ChamadoOrderByWithRelationInput[]
    cursor?: ChamadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChamadoScalarFieldEnum | ChamadoScalarFieldEnum[]
  }

  /**
   * User.notificacoes
   */
  export type User$notificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    cursor?: NotificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
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
   * Model Setor
   */

  export type AggregateSetor = {
    _count: SetorCountAggregateOutputType | null
    _avg: SetorAvgAggregateOutputType | null
    _sum: SetorSumAggregateOutputType | null
    _min: SetorMinAggregateOutputType | null
    _max: SetorMaxAggregateOutputType | null
  }

  export type SetorAvgAggregateOutputType = {
    id: number | null
  }

  export type SetorSumAggregateOutputType = {
    id: number | null
  }

  export type SetorMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SetorMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SetorCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SetorAvgAggregateInputType = {
    id?: true
  }

  export type SetorSumAggregateInputType = {
    id?: true
  }

  export type SetorMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SetorMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SetorCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SetorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setor to aggregate.
     */
    where?: SetorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setors to fetch.
     */
    orderBy?: SetorOrderByWithRelationInput | SetorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SetorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Setors
    **/
    _count?: true | SetorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SetorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SetorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetorMaxAggregateInputType
  }

  export type GetSetorAggregateType<T extends SetorAggregateArgs> = {
        [P in keyof T & keyof AggregateSetor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetor[P]>
      : GetScalarType<T[P], AggregateSetor[P]>
  }




  export type SetorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetorWhereInput
    orderBy?: SetorOrderByWithAggregationInput | SetorOrderByWithAggregationInput[]
    by: SetorScalarFieldEnum[] | SetorScalarFieldEnum
    having?: SetorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetorCountAggregateInputType | true
    _avg?: SetorAvgAggregateInputType
    _sum?: SetorSumAggregateInputType
    _min?: SetorMinAggregateInputType
    _max?: SetorMaxAggregateInputType
  }

  export type SetorGroupByOutputType = {
    id: number
    name: string
    _count: SetorCountAggregateOutputType | null
    _avg: SetorAvgAggregateOutputType | null
    _sum: SetorSumAggregateOutputType | null
    _min: SetorMinAggregateOutputType | null
    _max: SetorMaxAggregateOutputType | null
  }

  type GetSetorGroupByPayload<T extends SetorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetorGroupByOutputType[P]>
            : GetScalarType<T[P], SetorGroupByOutputType[P]>
        }
      >
    >


  export type SetorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    maquinas?: boolean | Setor$maquinasArgs<ExtArgs>
    _count?: boolean | SetorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setor"]>



  export type SetorSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SetorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["setor"]>
  export type SetorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maquinas?: boolean | Setor$maquinasArgs<ExtArgs>
    _count?: boolean | SetorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SetorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setor"
    objects: {
      maquinas: Prisma.$MaquinaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["setor"]>
    composites: {}
  }

  type SetorGetPayload<S extends boolean | null | undefined | SetorDefaultArgs> = $Result.GetResult<Prisma.$SetorPayload, S>

  type SetorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SetorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SetorCountAggregateInputType | true
    }

  export interface SetorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setor'], meta: { name: 'Setor' } }
    /**
     * Find zero or one Setor that matches the filter.
     * @param {SetorFindUniqueArgs} args - Arguments to find a Setor
     * @example
     * // Get one Setor
     * const setor = await prisma.setor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SetorFindUniqueArgs>(args: SelectSubset<T, SetorFindUniqueArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SetorFindUniqueOrThrowArgs} args - Arguments to find a Setor
     * @example
     * // Get one Setor
     * const setor = await prisma.setor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SetorFindUniqueOrThrowArgs>(args: SelectSubset<T, SetorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorFindFirstArgs} args - Arguments to find a Setor
     * @example
     * // Get one Setor
     * const setor = await prisma.setor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SetorFindFirstArgs>(args?: SelectSubset<T, SetorFindFirstArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorFindFirstOrThrowArgs} args - Arguments to find a Setor
     * @example
     * // Get one Setor
     * const setor = await prisma.setor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SetorFindFirstOrThrowArgs>(args?: SelectSubset<T, SetorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Setors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Setors
     * const setors = await prisma.setor.findMany()
     * 
     * // Get first 10 Setors
     * const setors = await prisma.setor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setorWithIdOnly = await prisma.setor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SetorFindManyArgs>(args?: SelectSubset<T, SetorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setor.
     * @param {SetorCreateArgs} args - Arguments to create a Setor.
     * @example
     * // Create one Setor
     * const Setor = await prisma.setor.create({
     *   data: {
     *     // ... data to create a Setor
     *   }
     * })
     * 
     */
    create<T extends SetorCreateArgs>(args: SelectSubset<T, SetorCreateArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Setors.
     * @param {SetorCreateManyArgs} args - Arguments to create many Setors.
     * @example
     * // Create many Setors
     * const setor = await prisma.setor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SetorCreateManyArgs>(args?: SelectSubset<T, SetorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Setor.
     * @param {SetorDeleteArgs} args - Arguments to delete one Setor.
     * @example
     * // Delete one Setor
     * const Setor = await prisma.setor.delete({
     *   where: {
     *     // ... filter to delete one Setor
     *   }
     * })
     * 
     */
    delete<T extends SetorDeleteArgs>(args: SelectSubset<T, SetorDeleteArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setor.
     * @param {SetorUpdateArgs} args - Arguments to update one Setor.
     * @example
     * // Update one Setor
     * const setor = await prisma.setor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SetorUpdateArgs>(args: SelectSubset<T, SetorUpdateArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Setors.
     * @param {SetorDeleteManyArgs} args - Arguments to filter Setors to delete.
     * @example
     * // Delete a few Setors
     * const { count } = await prisma.setor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SetorDeleteManyArgs>(args?: SelectSubset<T, SetorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Setors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Setors
     * const setor = await prisma.setor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SetorUpdateManyArgs>(args: SelectSubset<T, SetorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setor.
     * @param {SetorUpsertArgs} args - Arguments to update or create a Setor.
     * @example
     * // Update or create a Setor
     * const setor = await prisma.setor.upsert({
     *   create: {
     *     // ... data to create a Setor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setor we want to update
     *   }
     * })
     */
    upsert<T extends SetorUpsertArgs>(args: SelectSubset<T, SetorUpsertArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Setors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorCountArgs} args - Arguments to filter Setors to count.
     * @example
     * // Count the number of Setors
     * const count = await prisma.setor.count({
     *   where: {
     *     // ... the filter for the Setors we want to count
     *   }
     * })
    **/
    count<T extends SetorCountArgs>(
      args?: Subset<T, SetorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SetorAggregateArgs>(args: Subset<T, SetorAggregateArgs>): Prisma.PrismaPromise<GetSetorAggregateType<T>>

    /**
     * Group by Setor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorGroupByArgs} args - Group by arguments.
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
      T extends SetorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SetorGroupByArgs['orderBy'] }
        : { orderBy?: SetorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SetorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setor model
   */
  readonly fields: SetorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SetorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    maquinas<T extends Setor$maquinasArgs<ExtArgs> = {}>(args?: Subset<T, Setor$maquinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Setor model
   */
  interface SetorFieldRefs {
    readonly id: FieldRef<"Setor", 'Int'>
    readonly name: FieldRef<"Setor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Setor findUnique
   */
  export type SetorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setor to fetch.
     */
    where: SetorWhereUniqueInput
  }

  /**
   * Setor findUniqueOrThrow
   */
  export type SetorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setor to fetch.
     */
    where: SetorWhereUniqueInput
  }

  /**
   * Setor findFirst
   */
  export type SetorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setor to fetch.
     */
    where?: SetorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setors to fetch.
     */
    orderBy?: SetorOrderByWithRelationInput | SetorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Setors.
     */
    cursor?: SetorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Setors.
     */
    distinct?: SetorScalarFieldEnum | SetorScalarFieldEnum[]
  }

  /**
   * Setor findFirstOrThrow
   */
  export type SetorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setor to fetch.
     */
    where?: SetorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setors to fetch.
     */
    orderBy?: SetorOrderByWithRelationInput | SetorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Setors.
     */
    cursor?: SetorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Setors.
     */
    distinct?: SetorScalarFieldEnum | SetorScalarFieldEnum[]
  }

  /**
   * Setor findMany
   */
  export type SetorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setors to fetch.
     */
    where?: SetorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setors to fetch.
     */
    orderBy?: SetorOrderByWithRelationInput | SetorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Setors.
     */
    cursor?: SetorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setors.
     */
    skip?: number
    distinct?: SetorScalarFieldEnum | SetorScalarFieldEnum[]
  }

  /**
   * Setor create
   */
  export type SetorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * The data needed to create a Setor.
     */
    data: XOR<SetorCreateInput, SetorUncheckedCreateInput>
  }

  /**
   * Setor createMany
   */
  export type SetorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Setors.
     */
    data: SetorCreateManyInput | SetorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setor update
   */
  export type SetorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * The data needed to update a Setor.
     */
    data: XOR<SetorUpdateInput, SetorUncheckedUpdateInput>
    /**
     * Choose, which Setor to update.
     */
    where: SetorWhereUniqueInput
  }

  /**
   * Setor updateMany
   */
  export type SetorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Setors.
     */
    data: XOR<SetorUpdateManyMutationInput, SetorUncheckedUpdateManyInput>
    /**
     * Filter which Setors to update
     */
    where?: SetorWhereInput
    /**
     * Limit how many Setors to update.
     */
    limit?: number
  }

  /**
   * Setor upsert
   */
  export type SetorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * The filter to search for the Setor to update in case it exists.
     */
    where: SetorWhereUniqueInput
    /**
     * In case the Setor found by the `where` argument doesn't exist, create a new Setor with this data.
     */
    create: XOR<SetorCreateInput, SetorUncheckedCreateInput>
    /**
     * In case the Setor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SetorUpdateInput, SetorUncheckedUpdateInput>
  }

  /**
   * Setor delete
   */
  export type SetorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter which Setor to delete.
     */
    where: SetorWhereUniqueInput
  }

  /**
   * Setor deleteMany
   */
  export type SetorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setors to delete
     */
    where?: SetorWhereInput
    /**
     * Limit how many Setors to delete.
     */
    limit?: number
  }

  /**
   * Setor.maquinas
   */
  export type Setor$maquinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    where?: MaquinaWhereInput
    orderBy?: MaquinaOrderByWithRelationInput | MaquinaOrderByWithRelationInput[]
    cursor?: MaquinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaquinaScalarFieldEnum | MaquinaScalarFieldEnum[]
  }

  /**
   * Setor without action
   */
  export type SetorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
  }


  /**
   * Model Maquina
   */

  export type AggregateMaquina = {
    _count: MaquinaCountAggregateOutputType | null
    _avg: MaquinaAvgAggregateOutputType | null
    _sum: MaquinaSumAggregateOutputType | null
    _min: MaquinaMinAggregateOutputType | null
    _max: MaquinaMaxAggregateOutputType | null
  }

  export type MaquinaAvgAggregateOutputType = {
    id: number | null
    setorId: number | null
  }

  export type MaquinaSumAggregateOutputType = {
    id: number | null
    setorId: number | null
  }

  export type MaquinaMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    dataCompra: Date | null
    setorId: number | null
  }

  export type MaquinaMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    dataCompra: Date | null
    setorId: number | null
  }

  export type MaquinaCountAggregateOutputType = {
    id: number
    descricao: number
    dataCompra: number
    setorId: number
    _all: number
  }


  export type MaquinaAvgAggregateInputType = {
    id?: true
    setorId?: true
  }

  export type MaquinaSumAggregateInputType = {
    id?: true
    setorId?: true
  }

  export type MaquinaMinAggregateInputType = {
    id?: true
    descricao?: true
    dataCompra?: true
    setorId?: true
  }

  export type MaquinaMaxAggregateInputType = {
    id?: true
    descricao?: true
    dataCompra?: true
    setorId?: true
  }

  export type MaquinaCountAggregateInputType = {
    id?: true
    descricao?: true
    dataCompra?: true
    setorId?: true
    _all?: true
  }

  export type MaquinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maquina to aggregate.
     */
    where?: MaquinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maquinas to fetch.
     */
    orderBy?: MaquinaOrderByWithRelationInput | MaquinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaquinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maquinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maquinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maquinas
    **/
    _count?: true | MaquinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaquinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaquinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaquinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaquinaMaxAggregateInputType
  }

  export type GetMaquinaAggregateType<T extends MaquinaAggregateArgs> = {
        [P in keyof T & keyof AggregateMaquina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaquina[P]>
      : GetScalarType<T[P], AggregateMaquina[P]>
  }




  export type MaquinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaquinaWhereInput
    orderBy?: MaquinaOrderByWithAggregationInput | MaquinaOrderByWithAggregationInput[]
    by: MaquinaScalarFieldEnum[] | MaquinaScalarFieldEnum
    having?: MaquinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaquinaCountAggregateInputType | true
    _avg?: MaquinaAvgAggregateInputType
    _sum?: MaquinaSumAggregateInputType
    _min?: MaquinaMinAggregateInputType
    _max?: MaquinaMaxAggregateInputType
  }

  export type MaquinaGroupByOutputType = {
    id: number
    descricao: string
    dataCompra: Date
    setorId: number
    _count: MaquinaCountAggregateOutputType | null
    _avg: MaquinaAvgAggregateOutputType | null
    _sum: MaquinaSumAggregateOutputType | null
    _min: MaquinaMinAggregateOutputType | null
    _max: MaquinaMaxAggregateOutputType | null
  }

  type GetMaquinaGroupByPayload<T extends MaquinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaquinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaquinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaquinaGroupByOutputType[P]>
            : GetScalarType<T[P], MaquinaGroupByOutputType[P]>
        }
      >
    >


  export type MaquinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    dataCompra?: boolean
    setorId?: boolean
    setor?: boolean | SetorDefaultArgs<ExtArgs>
    ferramentas?: boolean | Maquina$ferramentasArgs<ExtArgs>
    chamados?: boolean | Maquina$chamadosArgs<ExtArgs>
    _count?: boolean | MaquinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maquina"]>



  export type MaquinaSelectScalar = {
    id?: boolean
    descricao?: boolean
    dataCompra?: boolean
    setorId?: boolean
  }

  export type MaquinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "dataCompra" | "setorId", ExtArgs["result"]["maquina"]>
  export type MaquinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setor?: boolean | SetorDefaultArgs<ExtArgs>
    ferramentas?: boolean | Maquina$ferramentasArgs<ExtArgs>
    chamados?: boolean | Maquina$chamadosArgs<ExtArgs>
    _count?: boolean | MaquinaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MaquinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Maquina"
    objects: {
      setor: Prisma.$SetorPayload<ExtArgs>
      ferramentas: Prisma.$FerramentaPayload<ExtArgs>[]
      chamados: Prisma.$ChamadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
      dataCompra: Date
      setorId: number
    }, ExtArgs["result"]["maquina"]>
    composites: {}
  }

  type MaquinaGetPayload<S extends boolean | null | undefined | MaquinaDefaultArgs> = $Result.GetResult<Prisma.$MaquinaPayload, S>

  type MaquinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaquinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaquinaCountAggregateInputType | true
    }

  export interface MaquinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Maquina'], meta: { name: 'Maquina' } }
    /**
     * Find zero or one Maquina that matches the filter.
     * @param {MaquinaFindUniqueArgs} args - Arguments to find a Maquina
     * @example
     * // Get one Maquina
     * const maquina = await prisma.maquina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaquinaFindUniqueArgs>(args: SelectSubset<T, MaquinaFindUniqueArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Maquina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaquinaFindUniqueOrThrowArgs} args - Arguments to find a Maquina
     * @example
     * // Get one Maquina
     * const maquina = await prisma.maquina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaquinaFindUniqueOrThrowArgs>(args: SelectSubset<T, MaquinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maquina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaquinaFindFirstArgs} args - Arguments to find a Maquina
     * @example
     * // Get one Maquina
     * const maquina = await prisma.maquina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaquinaFindFirstArgs>(args?: SelectSubset<T, MaquinaFindFirstArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maquina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaquinaFindFirstOrThrowArgs} args - Arguments to find a Maquina
     * @example
     * // Get one Maquina
     * const maquina = await prisma.maquina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaquinaFindFirstOrThrowArgs>(args?: SelectSubset<T, MaquinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maquinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaquinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maquinas
     * const maquinas = await prisma.maquina.findMany()
     * 
     * // Get first 10 Maquinas
     * const maquinas = await prisma.maquina.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maquinaWithIdOnly = await prisma.maquina.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaquinaFindManyArgs>(args?: SelectSubset<T, MaquinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Maquina.
     * @param {MaquinaCreateArgs} args - Arguments to create a Maquina.
     * @example
     * // Create one Maquina
     * const Maquina = await prisma.maquina.create({
     *   data: {
     *     // ... data to create a Maquina
     *   }
     * })
     * 
     */
    create<T extends MaquinaCreateArgs>(args: SelectSubset<T, MaquinaCreateArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maquinas.
     * @param {MaquinaCreateManyArgs} args - Arguments to create many Maquinas.
     * @example
     * // Create many Maquinas
     * const maquina = await prisma.maquina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaquinaCreateManyArgs>(args?: SelectSubset<T, MaquinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Maquina.
     * @param {MaquinaDeleteArgs} args - Arguments to delete one Maquina.
     * @example
     * // Delete one Maquina
     * const Maquina = await prisma.maquina.delete({
     *   where: {
     *     // ... filter to delete one Maquina
     *   }
     * })
     * 
     */
    delete<T extends MaquinaDeleteArgs>(args: SelectSubset<T, MaquinaDeleteArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Maquina.
     * @param {MaquinaUpdateArgs} args - Arguments to update one Maquina.
     * @example
     * // Update one Maquina
     * const maquina = await prisma.maquina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaquinaUpdateArgs>(args: SelectSubset<T, MaquinaUpdateArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maquinas.
     * @param {MaquinaDeleteManyArgs} args - Arguments to filter Maquinas to delete.
     * @example
     * // Delete a few Maquinas
     * const { count } = await prisma.maquina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaquinaDeleteManyArgs>(args?: SelectSubset<T, MaquinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maquinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaquinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maquinas
     * const maquina = await prisma.maquina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaquinaUpdateManyArgs>(args: SelectSubset<T, MaquinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Maquina.
     * @param {MaquinaUpsertArgs} args - Arguments to update or create a Maquina.
     * @example
     * // Update or create a Maquina
     * const maquina = await prisma.maquina.upsert({
     *   create: {
     *     // ... data to create a Maquina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maquina we want to update
     *   }
     * })
     */
    upsert<T extends MaquinaUpsertArgs>(args: SelectSubset<T, MaquinaUpsertArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Maquinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaquinaCountArgs} args - Arguments to filter Maquinas to count.
     * @example
     * // Count the number of Maquinas
     * const count = await prisma.maquina.count({
     *   where: {
     *     // ... the filter for the Maquinas we want to count
     *   }
     * })
    **/
    count<T extends MaquinaCountArgs>(
      args?: Subset<T, MaquinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaquinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maquina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaquinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaquinaAggregateArgs>(args: Subset<T, MaquinaAggregateArgs>): Prisma.PrismaPromise<GetMaquinaAggregateType<T>>

    /**
     * Group by Maquina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaquinaGroupByArgs} args - Group by arguments.
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
      T extends MaquinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaquinaGroupByArgs['orderBy'] }
        : { orderBy?: MaquinaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaquinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaquinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Maquina model
   */
  readonly fields: MaquinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Maquina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaquinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    setor<T extends SetorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SetorDefaultArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ferramentas<T extends Maquina$ferramentasArgs<ExtArgs> = {}>(args?: Subset<T, Maquina$ferramentasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FerramentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chamados<T extends Maquina$chamadosArgs<ExtArgs> = {}>(args?: Subset<T, Maquina$chamadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Maquina model
   */
  interface MaquinaFieldRefs {
    readonly id: FieldRef<"Maquina", 'Int'>
    readonly descricao: FieldRef<"Maquina", 'String'>
    readonly dataCompra: FieldRef<"Maquina", 'DateTime'>
    readonly setorId: FieldRef<"Maquina", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Maquina findUnique
   */
  export type MaquinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    /**
     * Filter, which Maquina to fetch.
     */
    where: MaquinaWhereUniqueInput
  }

  /**
   * Maquina findUniqueOrThrow
   */
  export type MaquinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    /**
     * Filter, which Maquina to fetch.
     */
    where: MaquinaWhereUniqueInput
  }

  /**
   * Maquina findFirst
   */
  export type MaquinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    /**
     * Filter, which Maquina to fetch.
     */
    where?: MaquinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maquinas to fetch.
     */
    orderBy?: MaquinaOrderByWithRelationInput | MaquinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maquinas.
     */
    cursor?: MaquinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maquinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maquinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maquinas.
     */
    distinct?: MaquinaScalarFieldEnum | MaquinaScalarFieldEnum[]
  }

  /**
   * Maquina findFirstOrThrow
   */
  export type MaquinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    /**
     * Filter, which Maquina to fetch.
     */
    where?: MaquinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maquinas to fetch.
     */
    orderBy?: MaquinaOrderByWithRelationInput | MaquinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maquinas.
     */
    cursor?: MaquinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maquinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maquinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maquinas.
     */
    distinct?: MaquinaScalarFieldEnum | MaquinaScalarFieldEnum[]
  }

  /**
   * Maquina findMany
   */
  export type MaquinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    /**
     * Filter, which Maquinas to fetch.
     */
    where?: MaquinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maquinas to fetch.
     */
    orderBy?: MaquinaOrderByWithRelationInput | MaquinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maquinas.
     */
    cursor?: MaquinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maquinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maquinas.
     */
    skip?: number
    distinct?: MaquinaScalarFieldEnum | MaquinaScalarFieldEnum[]
  }

  /**
   * Maquina create
   */
  export type MaquinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Maquina.
     */
    data: XOR<MaquinaCreateInput, MaquinaUncheckedCreateInput>
  }

  /**
   * Maquina createMany
   */
  export type MaquinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maquinas.
     */
    data: MaquinaCreateManyInput | MaquinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Maquina update
   */
  export type MaquinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Maquina.
     */
    data: XOR<MaquinaUpdateInput, MaquinaUncheckedUpdateInput>
    /**
     * Choose, which Maquina to update.
     */
    where: MaquinaWhereUniqueInput
  }

  /**
   * Maquina updateMany
   */
  export type MaquinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maquinas.
     */
    data: XOR<MaquinaUpdateManyMutationInput, MaquinaUncheckedUpdateManyInput>
    /**
     * Filter which Maquinas to update
     */
    where?: MaquinaWhereInput
    /**
     * Limit how many Maquinas to update.
     */
    limit?: number
  }

  /**
   * Maquina upsert
   */
  export type MaquinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Maquina to update in case it exists.
     */
    where: MaquinaWhereUniqueInput
    /**
     * In case the Maquina found by the `where` argument doesn't exist, create a new Maquina with this data.
     */
    create: XOR<MaquinaCreateInput, MaquinaUncheckedCreateInput>
    /**
     * In case the Maquina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaquinaUpdateInput, MaquinaUncheckedUpdateInput>
  }

  /**
   * Maquina delete
   */
  export type MaquinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
    /**
     * Filter which Maquina to delete.
     */
    where: MaquinaWhereUniqueInput
  }

  /**
   * Maquina deleteMany
   */
  export type MaquinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maquinas to delete
     */
    where?: MaquinaWhereInput
    /**
     * Limit how many Maquinas to delete.
     */
    limit?: number
  }

  /**
   * Maquina.ferramentas
   */
  export type Maquina$ferramentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferramenta
     */
    select?: FerramentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferramenta
     */
    omit?: FerramentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FerramentaInclude<ExtArgs> | null
    where?: FerramentaWhereInput
    orderBy?: FerramentaOrderByWithRelationInput | FerramentaOrderByWithRelationInput[]
    cursor?: FerramentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FerramentaScalarFieldEnum | FerramentaScalarFieldEnum[]
  }

  /**
   * Maquina.chamados
   */
  export type Maquina$chamadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    where?: ChamadoWhereInput
    orderBy?: ChamadoOrderByWithRelationInput | ChamadoOrderByWithRelationInput[]
    cursor?: ChamadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChamadoScalarFieldEnum | ChamadoScalarFieldEnum[]
  }

  /**
   * Maquina without action
   */
  export type MaquinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maquina
     */
    select?: MaquinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maquina
     */
    omit?: MaquinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaquinaInclude<ExtArgs> | null
  }


  /**
   * Model Ferramenta
   */

  export type AggregateFerramenta = {
    _count: FerramentaCountAggregateOutputType | null
    _avg: FerramentaAvgAggregateOutputType | null
    _sum: FerramentaSumAggregateOutputType | null
    _min: FerramentaMinAggregateOutputType | null
    _max: FerramentaMaxAggregateOutputType | null
  }

  export type FerramentaAvgAggregateOutputType = {
    id: number | null
    maquinaId: number | null
  }

  export type FerramentaSumAggregateOutputType = {
    id: number | null
    maquinaId: number | null
  }

  export type FerramentaMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    dataCompra: Date | null
    maquinaId: number | null
  }

  export type FerramentaMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    dataCompra: Date | null
    maquinaId: number | null
  }

  export type FerramentaCountAggregateOutputType = {
    id: number
    descricao: number
    dataCompra: number
    maquinaId: number
    _all: number
  }


  export type FerramentaAvgAggregateInputType = {
    id?: true
    maquinaId?: true
  }

  export type FerramentaSumAggregateInputType = {
    id?: true
    maquinaId?: true
  }

  export type FerramentaMinAggregateInputType = {
    id?: true
    descricao?: true
    dataCompra?: true
    maquinaId?: true
  }

  export type FerramentaMaxAggregateInputType = {
    id?: true
    descricao?: true
    dataCompra?: true
    maquinaId?: true
  }

  export type FerramentaCountAggregateInputType = {
    id?: true
    descricao?: true
    dataCompra?: true
    maquinaId?: true
    _all?: true
  }

  export type FerramentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ferramenta to aggregate.
     */
    where?: FerramentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ferramentas to fetch.
     */
    orderBy?: FerramentaOrderByWithRelationInput | FerramentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FerramentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ferramentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ferramentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ferramentas
    **/
    _count?: true | FerramentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FerramentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FerramentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FerramentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FerramentaMaxAggregateInputType
  }

  export type GetFerramentaAggregateType<T extends FerramentaAggregateArgs> = {
        [P in keyof T & keyof AggregateFerramenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFerramenta[P]>
      : GetScalarType<T[P], AggregateFerramenta[P]>
  }




  export type FerramentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FerramentaWhereInput
    orderBy?: FerramentaOrderByWithAggregationInput | FerramentaOrderByWithAggregationInput[]
    by: FerramentaScalarFieldEnum[] | FerramentaScalarFieldEnum
    having?: FerramentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FerramentaCountAggregateInputType | true
    _avg?: FerramentaAvgAggregateInputType
    _sum?: FerramentaSumAggregateInputType
    _min?: FerramentaMinAggregateInputType
    _max?: FerramentaMaxAggregateInputType
  }

  export type FerramentaGroupByOutputType = {
    id: number
    descricao: string
    dataCompra: Date
    maquinaId: number
    _count: FerramentaCountAggregateOutputType | null
    _avg: FerramentaAvgAggregateOutputType | null
    _sum: FerramentaSumAggregateOutputType | null
    _min: FerramentaMinAggregateOutputType | null
    _max: FerramentaMaxAggregateOutputType | null
  }

  type GetFerramentaGroupByPayload<T extends FerramentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FerramentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FerramentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FerramentaGroupByOutputType[P]>
            : GetScalarType<T[P], FerramentaGroupByOutputType[P]>
        }
      >
    >


  export type FerramentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    dataCompra?: boolean
    maquinaId?: boolean
    maquina?: boolean | MaquinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ferramenta"]>



  export type FerramentaSelectScalar = {
    id?: boolean
    descricao?: boolean
    dataCompra?: boolean
    maquinaId?: boolean
  }

  export type FerramentaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "dataCompra" | "maquinaId", ExtArgs["result"]["ferramenta"]>
  export type FerramentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maquina?: boolean | MaquinaDefaultArgs<ExtArgs>
  }

  export type $FerramentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ferramenta"
    objects: {
      maquina: Prisma.$MaquinaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
      dataCompra: Date
      maquinaId: number
    }, ExtArgs["result"]["ferramenta"]>
    composites: {}
  }

  type FerramentaGetPayload<S extends boolean | null | undefined | FerramentaDefaultArgs> = $Result.GetResult<Prisma.$FerramentaPayload, S>

  type FerramentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FerramentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FerramentaCountAggregateInputType | true
    }

  export interface FerramentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ferramenta'], meta: { name: 'Ferramenta' } }
    /**
     * Find zero or one Ferramenta that matches the filter.
     * @param {FerramentaFindUniqueArgs} args - Arguments to find a Ferramenta
     * @example
     * // Get one Ferramenta
     * const ferramenta = await prisma.ferramenta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FerramentaFindUniqueArgs>(args: SelectSubset<T, FerramentaFindUniqueArgs<ExtArgs>>): Prisma__FerramentaClient<$Result.GetResult<Prisma.$FerramentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ferramenta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FerramentaFindUniqueOrThrowArgs} args - Arguments to find a Ferramenta
     * @example
     * // Get one Ferramenta
     * const ferramenta = await prisma.ferramenta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FerramentaFindUniqueOrThrowArgs>(args: SelectSubset<T, FerramentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FerramentaClient<$Result.GetResult<Prisma.$FerramentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ferramenta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FerramentaFindFirstArgs} args - Arguments to find a Ferramenta
     * @example
     * // Get one Ferramenta
     * const ferramenta = await prisma.ferramenta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FerramentaFindFirstArgs>(args?: SelectSubset<T, FerramentaFindFirstArgs<ExtArgs>>): Prisma__FerramentaClient<$Result.GetResult<Prisma.$FerramentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ferramenta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FerramentaFindFirstOrThrowArgs} args - Arguments to find a Ferramenta
     * @example
     * // Get one Ferramenta
     * const ferramenta = await prisma.ferramenta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FerramentaFindFirstOrThrowArgs>(args?: SelectSubset<T, FerramentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FerramentaClient<$Result.GetResult<Prisma.$FerramentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ferramentas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FerramentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ferramentas
     * const ferramentas = await prisma.ferramenta.findMany()
     * 
     * // Get first 10 Ferramentas
     * const ferramentas = await prisma.ferramenta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ferramentaWithIdOnly = await prisma.ferramenta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FerramentaFindManyArgs>(args?: SelectSubset<T, FerramentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FerramentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ferramenta.
     * @param {FerramentaCreateArgs} args - Arguments to create a Ferramenta.
     * @example
     * // Create one Ferramenta
     * const Ferramenta = await prisma.ferramenta.create({
     *   data: {
     *     // ... data to create a Ferramenta
     *   }
     * })
     * 
     */
    create<T extends FerramentaCreateArgs>(args: SelectSubset<T, FerramentaCreateArgs<ExtArgs>>): Prisma__FerramentaClient<$Result.GetResult<Prisma.$FerramentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ferramentas.
     * @param {FerramentaCreateManyArgs} args - Arguments to create many Ferramentas.
     * @example
     * // Create many Ferramentas
     * const ferramenta = await prisma.ferramenta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FerramentaCreateManyArgs>(args?: SelectSubset<T, FerramentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ferramenta.
     * @param {FerramentaDeleteArgs} args - Arguments to delete one Ferramenta.
     * @example
     * // Delete one Ferramenta
     * const Ferramenta = await prisma.ferramenta.delete({
     *   where: {
     *     // ... filter to delete one Ferramenta
     *   }
     * })
     * 
     */
    delete<T extends FerramentaDeleteArgs>(args: SelectSubset<T, FerramentaDeleteArgs<ExtArgs>>): Prisma__FerramentaClient<$Result.GetResult<Prisma.$FerramentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ferramenta.
     * @param {FerramentaUpdateArgs} args - Arguments to update one Ferramenta.
     * @example
     * // Update one Ferramenta
     * const ferramenta = await prisma.ferramenta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FerramentaUpdateArgs>(args: SelectSubset<T, FerramentaUpdateArgs<ExtArgs>>): Prisma__FerramentaClient<$Result.GetResult<Prisma.$FerramentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ferramentas.
     * @param {FerramentaDeleteManyArgs} args - Arguments to filter Ferramentas to delete.
     * @example
     * // Delete a few Ferramentas
     * const { count } = await prisma.ferramenta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FerramentaDeleteManyArgs>(args?: SelectSubset<T, FerramentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ferramentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FerramentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ferramentas
     * const ferramenta = await prisma.ferramenta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FerramentaUpdateManyArgs>(args: SelectSubset<T, FerramentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ferramenta.
     * @param {FerramentaUpsertArgs} args - Arguments to update or create a Ferramenta.
     * @example
     * // Update or create a Ferramenta
     * const ferramenta = await prisma.ferramenta.upsert({
     *   create: {
     *     // ... data to create a Ferramenta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ferramenta we want to update
     *   }
     * })
     */
    upsert<T extends FerramentaUpsertArgs>(args: SelectSubset<T, FerramentaUpsertArgs<ExtArgs>>): Prisma__FerramentaClient<$Result.GetResult<Prisma.$FerramentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ferramentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FerramentaCountArgs} args - Arguments to filter Ferramentas to count.
     * @example
     * // Count the number of Ferramentas
     * const count = await prisma.ferramenta.count({
     *   where: {
     *     // ... the filter for the Ferramentas we want to count
     *   }
     * })
    **/
    count<T extends FerramentaCountArgs>(
      args?: Subset<T, FerramentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FerramentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ferramenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FerramentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FerramentaAggregateArgs>(args: Subset<T, FerramentaAggregateArgs>): Prisma.PrismaPromise<GetFerramentaAggregateType<T>>

    /**
     * Group by Ferramenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FerramentaGroupByArgs} args - Group by arguments.
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
      T extends FerramentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FerramentaGroupByArgs['orderBy'] }
        : { orderBy?: FerramentaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FerramentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFerramentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ferramenta model
   */
  readonly fields: FerramentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ferramenta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FerramentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    maquina<T extends MaquinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaquinaDefaultArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ferramenta model
   */
  interface FerramentaFieldRefs {
    readonly id: FieldRef<"Ferramenta", 'Int'>
    readonly descricao: FieldRef<"Ferramenta", 'String'>
    readonly dataCompra: FieldRef<"Ferramenta", 'DateTime'>
    readonly maquinaId: FieldRef<"Ferramenta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ferramenta findUnique
   */
  export type FerramentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferramenta
     */
    select?: FerramentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferramenta
     */
    omit?: FerramentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FerramentaInclude<ExtArgs> | null
    /**
     * Filter, which Ferramenta to fetch.
     */
    where: FerramentaWhereUniqueInput
  }

  /**
   * Ferramenta findUniqueOrThrow
   */
  export type FerramentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferramenta
     */
    select?: FerramentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferramenta
     */
    omit?: FerramentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FerramentaInclude<ExtArgs> | null
    /**
     * Filter, which Ferramenta to fetch.
     */
    where: FerramentaWhereUniqueInput
  }

  /**
   * Ferramenta findFirst
   */
  export type FerramentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferramenta
     */
    select?: FerramentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferramenta
     */
    omit?: FerramentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FerramentaInclude<ExtArgs> | null
    /**
     * Filter, which Ferramenta to fetch.
     */
    where?: FerramentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ferramentas to fetch.
     */
    orderBy?: FerramentaOrderByWithRelationInput | FerramentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ferramentas.
     */
    cursor?: FerramentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ferramentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ferramentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ferramentas.
     */
    distinct?: FerramentaScalarFieldEnum | FerramentaScalarFieldEnum[]
  }

  /**
   * Ferramenta findFirstOrThrow
   */
  export type FerramentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferramenta
     */
    select?: FerramentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferramenta
     */
    omit?: FerramentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FerramentaInclude<ExtArgs> | null
    /**
     * Filter, which Ferramenta to fetch.
     */
    where?: FerramentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ferramentas to fetch.
     */
    orderBy?: FerramentaOrderByWithRelationInput | FerramentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ferramentas.
     */
    cursor?: FerramentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ferramentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ferramentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ferramentas.
     */
    distinct?: FerramentaScalarFieldEnum | FerramentaScalarFieldEnum[]
  }

  /**
   * Ferramenta findMany
   */
  export type FerramentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferramenta
     */
    select?: FerramentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferramenta
     */
    omit?: FerramentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FerramentaInclude<ExtArgs> | null
    /**
     * Filter, which Ferramentas to fetch.
     */
    where?: FerramentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ferramentas to fetch.
     */
    orderBy?: FerramentaOrderByWithRelationInput | FerramentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ferramentas.
     */
    cursor?: FerramentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ferramentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ferramentas.
     */
    skip?: number
    distinct?: FerramentaScalarFieldEnum | FerramentaScalarFieldEnum[]
  }

  /**
   * Ferramenta create
   */
  export type FerramentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferramenta
     */
    select?: FerramentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferramenta
     */
    omit?: FerramentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FerramentaInclude<ExtArgs> | null
    /**
     * The data needed to create a Ferramenta.
     */
    data: XOR<FerramentaCreateInput, FerramentaUncheckedCreateInput>
  }

  /**
   * Ferramenta createMany
   */
  export type FerramentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ferramentas.
     */
    data: FerramentaCreateManyInput | FerramentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ferramenta update
   */
  export type FerramentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferramenta
     */
    select?: FerramentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferramenta
     */
    omit?: FerramentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FerramentaInclude<ExtArgs> | null
    /**
     * The data needed to update a Ferramenta.
     */
    data: XOR<FerramentaUpdateInput, FerramentaUncheckedUpdateInput>
    /**
     * Choose, which Ferramenta to update.
     */
    where: FerramentaWhereUniqueInput
  }

  /**
   * Ferramenta updateMany
   */
  export type FerramentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ferramentas.
     */
    data: XOR<FerramentaUpdateManyMutationInput, FerramentaUncheckedUpdateManyInput>
    /**
     * Filter which Ferramentas to update
     */
    where?: FerramentaWhereInput
    /**
     * Limit how many Ferramentas to update.
     */
    limit?: number
  }

  /**
   * Ferramenta upsert
   */
  export type FerramentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferramenta
     */
    select?: FerramentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferramenta
     */
    omit?: FerramentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FerramentaInclude<ExtArgs> | null
    /**
     * The filter to search for the Ferramenta to update in case it exists.
     */
    where: FerramentaWhereUniqueInput
    /**
     * In case the Ferramenta found by the `where` argument doesn't exist, create a new Ferramenta with this data.
     */
    create: XOR<FerramentaCreateInput, FerramentaUncheckedCreateInput>
    /**
     * In case the Ferramenta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FerramentaUpdateInput, FerramentaUncheckedUpdateInput>
  }

  /**
   * Ferramenta delete
   */
  export type FerramentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferramenta
     */
    select?: FerramentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferramenta
     */
    omit?: FerramentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FerramentaInclude<ExtArgs> | null
    /**
     * Filter which Ferramenta to delete.
     */
    where: FerramentaWhereUniqueInput
  }

  /**
   * Ferramenta deleteMany
   */
  export type FerramentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ferramentas to delete
     */
    where?: FerramentaWhereInput
    /**
     * Limit how many Ferramentas to delete.
     */
    limit?: number
  }

  /**
   * Ferramenta without action
   */
  export type FerramentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferramenta
     */
    select?: FerramentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferramenta
     */
    omit?: FerramentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FerramentaInclude<ExtArgs> | null
  }


  /**
   * Model Chamado
   */

  export type AggregateChamado = {
    _count: ChamadoCountAggregateOutputType | null
    _avg: ChamadoAvgAggregateOutputType | null
    _sum: ChamadoSumAggregateOutputType | null
    _min: ChamadoMinAggregateOutputType | null
    _max: ChamadoMaxAggregateOutputType | null
  }

  export type ChamadoAvgAggregateOutputType = {
    id: number | null
    tecnicoId: number | null
    funcionarioId: number | null
    maquinaId: number | null
  }

  export type ChamadoSumAggregateOutputType = {
    id: number | null
    tecnicoId: number | null
    funcionarioId: number | null
    maquinaId: number | null
  }

  export type ChamadoMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    data: Date | null
    status: string | null
    feedback: string | null
    descResolucao: string | null
    dataFechamento: Date | null
    tecnicoId: number | null
    funcionarioId: number | null
    maquinaId: number | null
  }

  export type ChamadoMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    data: Date | null
    status: string | null
    feedback: string | null
    descResolucao: string | null
    dataFechamento: Date | null
    tecnicoId: number | null
    funcionarioId: number | null
    maquinaId: number | null
  }

  export type ChamadoCountAggregateOutputType = {
    id: number
    descricao: number
    data: number
    status: number
    feedback: number
    descResolucao: number
    dataFechamento: number
    tecnicoId: number
    funcionarioId: number
    maquinaId: number
    _all: number
  }


  export type ChamadoAvgAggregateInputType = {
    id?: true
    tecnicoId?: true
    funcionarioId?: true
    maquinaId?: true
  }

  export type ChamadoSumAggregateInputType = {
    id?: true
    tecnicoId?: true
    funcionarioId?: true
    maquinaId?: true
  }

  export type ChamadoMinAggregateInputType = {
    id?: true
    descricao?: true
    data?: true
    status?: true
    feedback?: true
    descResolucao?: true
    dataFechamento?: true
    tecnicoId?: true
    funcionarioId?: true
    maquinaId?: true
  }

  export type ChamadoMaxAggregateInputType = {
    id?: true
    descricao?: true
    data?: true
    status?: true
    feedback?: true
    descResolucao?: true
    dataFechamento?: true
    tecnicoId?: true
    funcionarioId?: true
    maquinaId?: true
  }

  export type ChamadoCountAggregateInputType = {
    id?: true
    descricao?: true
    data?: true
    status?: true
    feedback?: true
    descResolucao?: true
    dataFechamento?: true
    tecnicoId?: true
    funcionarioId?: true
    maquinaId?: true
    _all?: true
  }

  export type ChamadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chamado to aggregate.
     */
    where?: ChamadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chamados to fetch.
     */
    orderBy?: ChamadoOrderByWithRelationInput | ChamadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChamadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chamados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chamados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chamados
    **/
    _count?: true | ChamadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChamadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChamadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChamadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChamadoMaxAggregateInputType
  }

  export type GetChamadoAggregateType<T extends ChamadoAggregateArgs> = {
        [P in keyof T & keyof AggregateChamado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChamado[P]>
      : GetScalarType<T[P], AggregateChamado[P]>
  }




  export type ChamadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChamadoWhereInput
    orderBy?: ChamadoOrderByWithAggregationInput | ChamadoOrderByWithAggregationInput[]
    by: ChamadoScalarFieldEnum[] | ChamadoScalarFieldEnum
    having?: ChamadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChamadoCountAggregateInputType | true
    _avg?: ChamadoAvgAggregateInputType
    _sum?: ChamadoSumAggregateInputType
    _min?: ChamadoMinAggregateInputType
    _max?: ChamadoMaxAggregateInputType
  }

  export type ChamadoGroupByOutputType = {
    id: number
    descricao: string
    data: Date
    status: string
    feedback: string
    descResolucao: string
    dataFechamento: Date
    tecnicoId: number
    funcionarioId: number
    maquinaId: number
    _count: ChamadoCountAggregateOutputType | null
    _avg: ChamadoAvgAggregateOutputType | null
    _sum: ChamadoSumAggregateOutputType | null
    _min: ChamadoMinAggregateOutputType | null
    _max: ChamadoMaxAggregateOutputType | null
  }

  type GetChamadoGroupByPayload<T extends ChamadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChamadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChamadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChamadoGroupByOutputType[P]>
            : GetScalarType<T[P], ChamadoGroupByOutputType[P]>
        }
      >
    >


  export type ChamadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    data?: boolean
    status?: boolean
    feedback?: boolean
    descResolucao?: boolean
    dataFechamento?: boolean
    tecnicoId?: boolean
    funcionarioId?: boolean
    maquinaId?: boolean
    tecnico?: boolean | UserDefaultArgs<ExtArgs>
    funcionario?: boolean | UserDefaultArgs<ExtArgs>
    maquina?: boolean | MaquinaDefaultArgs<ExtArgs>
    notificacoes?: boolean | Chamado$notificacoesArgs<ExtArgs>
    _count?: boolean | ChamadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chamado"]>



  export type ChamadoSelectScalar = {
    id?: boolean
    descricao?: boolean
    data?: boolean
    status?: boolean
    feedback?: boolean
    descResolucao?: boolean
    dataFechamento?: boolean
    tecnicoId?: boolean
    funcionarioId?: boolean
    maquinaId?: boolean
  }

  export type ChamadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "data" | "status" | "feedback" | "descResolucao" | "dataFechamento" | "tecnicoId" | "funcionarioId" | "maquinaId", ExtArgs["result"]["chamado"]>
  export type ChamadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tecnico?: boolean | UserDefaultArgs<ExtArgs>
    funcionario?: boolean | UserDefaultArgs<ExtArgs>
    maquina?: boolean | MaquinaDefaultArgs<ExtArgs>
    notificacoes?: boolean | Chamado$notificacoesArgs<ExtArgs>
    _count?: boolean | ChamadoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChamadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chamado"
    objects: {
      tecnico: Prisma.$UserPayload<ExtArgs>
      funcionario: Prisma.$UserPayload<ExtArgs>
      maquina: Prisma.$MaquinaPayload<ExtArgs>
      notificacoes: Prisma.$NotificacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
      data: Date
      status: string
      feedback: string
      descResolucao: string
      dataFechamento: Date
      tecnicoId: number
      funcionarioId: number
      maquinaId: number
    }, ExtArgs["result"]["chamado"]>
    composites: {}
  }

  type ChamadoGetPayload<S extends boolean | null | undefined | ChamadoDefaultArgs> = $Result.GetResult<Prisma.$ChamadoPayload, S>

  type ChamadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChamadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChamadoCountAggregateInputType | true
    }

  export interface ChamadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chamado'], meta: { name: 'Chamado' } }
    /**
     * Find zero or one Chamado that matches the filter.
     * @param {ChamadoFindUniqueArgs} args - Arguments to find a Chamado
     * @example
     * // Get one Chamado
     * const chamado = await prisma.chamado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChamadoFindUniqueArgs>(args: SelectSubset<T, ChamadoFindUniqueArgs<ExtArgs>>): Prisma__ChamadoClient<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chamado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChamadoFindUniqueOrThrowArgs} args - Arguments to find a Chamado
     * @example
     * // Get one Chamado
     * const chamado = await prisma.chamado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChamadoFindUniqueOrThrowArgs>(args: SelectSubset<T, ChamadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChamadoClient<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chamado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadoFindFirstArgs} args - Arguments to find a Chamado
     * @example
     * // Get one Chamado
     * const chamado = await prisma.chamado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChamadoFindFirstArgs>(args?: SelectSubset<T, ChamadoFindFirstArgs<ExtArgs>>): Prisma__ChamadoClient<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chamado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadoFindFirstOrThrowArgs} args - Arguments to find a Chamado
     * @example
     * // Get one Chamado
     * const chamado = await prisma.chamado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChamadoFindFirstOrThrowArgs>(args?: SelectSubset<T, ChamadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChamadoClient<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chamados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chamados
     * const chamados = await prisma.chamado.findMany()
     * 
     * // Get first 10 Chamados
     * const chamados = await prisma.chamado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chamadoWithIdOnly = await prisma.chamado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChamadoFindManyArgs>(args?: SelectSubset<T, ChamadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chamado.
     * @param {ChamadoCreateArgs} args - Arguments to create a Chamado.
     * @example
     * // Create one Chamado
     * const Chamado = await prisma.chamado.create({
     *   data: {
     *     // ... data to create a Chamado
     *   }
     * })
     * 
     */
    create<T extends ChamadoCreateArgs>(args: SelectSubset<T, ChamadoCreateArgs<ExtArgs>>): Prisma__ChamadoClient<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chamados.
     * @param {ChamadoCreateManyArgs} args - Arguments to create many Chamados.
     * @example
     * // Create many Chamados
     * const chamado = await prisma.chamado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChamadoCreateManyArgs>(args?: SelectSubset<T, ChamadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chamado.
     * @param {ChamadoDeleteArgs} args - Arguments to delete one Chamado.
     * @example
     * // Delete one Chamado
     * const Chamado = await prisma.chamado.delete({
     *   where: {
     *     // ... filter to delete one Chamado
     *   }
     * })
     * 
     */
    delete<T extends ChamadoDeleteArgs>(args: SelectSubset<T, ChamadoDeleteArgs<ExtArgs>>): Prisma__ChamadoClient<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chamado.
     * @param {ChamadoUpdateArgs} args - Arguments to update one Chamado.
     * @example
     * // Update one Chamado
     * const chamado = await prisma.chamado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChamadoUpdateArgs>(args: SelectSubset<T, ChamadoUpdateArgs<ExtArgs>>): Prisma__ChamadoClient<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chamados.
     * @param {ChamadoDeleteManyArgs} args - Arguments to filter Chamados to delete.
     * @example
     * // Delete a few Chamados
     * const { count } = await prisma.chamado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChamadoDeleteManyArgs>(args?: SelectSubset<T, ChamadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chamados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chamados
     * const chamado = await prisma.chamado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChamadoUpdateManyArgs>(args: SelectSubset<T, ChamadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chamado.
     * @param {ChamadoUpsertArgs} args - Arguments to update or create a Chamado.
     * @example
     * // Update or create a Chamado
     * const chamado = await prisma.chamado.upsert({
     *   create: {
     *     // ... data to create a Chamado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chamado we want to update
     *   }
     * })
     */
    upsert<T extends ChamadoUpsertArgs>(args: SelectSubset<T, ChamadoUpsertArgs<ExtArgs>>): Prisma__ChamadoClient<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chamados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadoCountArgs} args - Arguments to filter Chamados to count.
     * @example
     * // Count the number of Chamados
     * const count = await prisma.chamado.count({
     *   where: {
     *     // ... the filter for the Chamados we want to count
     *   }
     * })
    **/
    count<T extends ChamadoCountArgs>(
      args?: Subset<T, ChamadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChamadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chamado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChamadoAggregateArgs>(args: Subset<T, ChamadoAggregateArgs>): Prisma.PrismaPromise<GetChamadoAggregateType<T>>

    /**
     * Group by Chamado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChamadoGroupByArgs} args - Group by arguments.
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
      T extends ChamadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChamadoGroupByArgs['orderBy'] }
        : { orderBy?: ChamadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChamadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChamadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chamado model
   */
  readonly fields: ChamadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chamado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChamadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tecnico<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    funcionario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    maquina<T extends MaquinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaquinaDefaultArgs<ExtArgs>>): Prisma__MaquinaClient<$Result.GetResult<Prisma.$MaquinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notificacoes<T extends Chamado$notificacoesArgs<ExtArgs> = {}>(args?: Subset<T, Chamado$notificacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chamado model
   */
  interface ChamadoFieldRefs {
    readonly id: FieldRef<"Chamado", 'Int'>
    readonly descricao: FieldRef<"Chamado", 'String'>
    readonly data: FieldRef<"Chamado", 'DateTime'>
    readonly status: FieldRef<"Chamado", 'String'>
    readonly feedback: FieldRef<"Chamado", 'String'>
    readonly descResolucao: FieldRef<"Chamado", 'String'>
    readonly dataFechamento: FieldRef<"Chamado", 'DateTime'>
    readonly tecnicoId: FieldRef<"Chamado", 'Int'>
    readonly funcionarioId: FieldRef<"Chamado", 'Int'>
    readonly maquinaId: FieldRef<"Chamado", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Chamado findUnique
   */
  export type ChamadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    /**
     * Filter, which Chamado to fetch.
     */
    where: ChamadoWhereUniqueInput
  }

  /**
   * Chamado findUniqueOrThrow
   */
  export type ChamadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    /**
     * Filter, which Chamado to fetch.
     */
    where: ChamadoWhereUniqueInput
  }

  /**
   * Chamado findFirst
   */
  export type ChamadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    /**
     * Filter, which Chamado to fetch.
     */
    where?: ChamadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chamados to fetch.
     */
    orderBy?: ChamadoOrderByWithRelationInput | ChamadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chamados.
     */
    cursor?: ChamadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chamados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chamados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chamados.
     */
    distinct?: ChamadoScalarFieldEnum | ChamadoScalarFieldEnum[]
  }

  /**
   * Chamado findFirstOrThrow
   */
  export type ChamadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    /**
     * Filter, which Chamado to fetch.
     */
    where?: ChamadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chamados to fetch.
     */
    orderBy?: ChamadoOrderByWithRelationInput | ChamadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chamados.
     */
    cursor?: ChamadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chamados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chamados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chamados.
     */
    distinct?: ChamadoScalarFieldEnum | ChamadoScalarFieldEnum[]
  }

  /**
   * Chamado findMany
   */
  export type ChamadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    /**
     * Filter, which Chamados to fetch.
     */
    where?: ChamadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chamados to fetch.
     */
    orderBy?: ChamadoOrderByWithRelationInput | ChamadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chamados.
     */
    cursor?: ChamadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chamados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chamados.
     */
    skip?: number
    distinct?: ChamadoScalarFieldEnum | ChamadoScalarFieldEnum[]
  }

  /**
   * Chamado create
   */
  export type ChamadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Chamado.
     */
    data: XOR<ChamadoCreateInput, ChamadoUncheckedCreateInput>
  }

  /**
   * Chamado createMany
   */
  export type ChamadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chamados.
     */
    data: ChamadoCreateManyInput | ChamadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chamado update
   */
  export type ChamadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Chamado.
     */
    data: XOR<ChamadoUpdateInput, ChamadoUncheckedUpdateInput>
    /**
     * Choose, which Chamado to update.
     */
    where: ChamadoWhereUniqueInput
  }

  /**
   * Chamado updateMany
   */
  export type ChamadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chamados.
     */
    data: XOR<ChamadoUpdateManyMutationInput, ChamadoUncheckedUpdateManyInput>
    /**
     * Filter which Chamados to update
     */
    where?: ChamadoWhereInput
    /**
     * Limit how many Chamados to update.
     */
    limit?: number
  }

  /**
   * Chamado upsert
   */
  export type ChamadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Chamado to update in case it exists.
     */
    where: ChamadoWhereUniqueInput
    /**
     * In case the Chamado found by the `where` argument doesn't exist, create a new Chamado with this data.
     */
    create: XOR<ChamadoCreateInput, ChamadoUncheckedCreateInput>
    /**
     * In case the Chamado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChamadoUpdateInput, ChamadoUncheckedUpdateInput>
  }

  /**
   * Chamado delete
   */
  export type ChamadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
    /**
     * Filter which Chamado to delete.
     */
    where: ChamadoWhereUniqueInput
  }

  /**
   * Chamado deleteMany
   */
  export type ChamadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chamados to delete
     */
    where?: ChamadoWhereInput
    /**
     * Limit how many Chamados to delete.
     */
    limit?: number
  }

  /**
   * Chamado.notificacoes
   */
  export type Chamado$notificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    cursor?: NotificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Chamado without action
   */
  export type ChamadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chamado
     */
    select?: ChamadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chamado
     */
    omit?: ChamadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChamadoInclude<ExtArgs> | null
  }


  /**
   * Model Notificacao
   */

  export type AggregateNotificacao = {
    _count: NotificacaoCountAggregateOutputType | null
    _avg: NotificacaoAvgAggregateOutputType | null
    _sum: NotificacaoSumAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  export type NotificacaoAvgAggregateOutputType = {
    id: number | null
    remetenteId: number | null
    chamadoId: number | null
  }

  export type NotificacaoSumAggregateOutputType = {
    id: number | null
    remetenteId: number | null
    chamadoId: number | null
  }

  export type NotificacaoMinAggregateOutputType = {
    id: number | null
    data: Date | null
    remetenteId: number | null
    chamadoId: number | null
  }

  export type NotificacaoMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    remetenteId: number | null
    chamadoId: number | null
  }

  export type NotificacaoCountAggregateOutputType = {
    id: number
    data: number
    remetenteId: number
    chamadoId: number
    _all: number
  }


  export type NotificacaoAvgAggregateInputType = {
    id?: true
    remetenteId?: true
    chamadoId?: true
  }

  export type NotificacaoSumAggregateInputType = {
    id?: true
    remetenteId?: true
    chamadoId?: true
  }

  export type NotificacaoMinAggregateInputType = {
    id?: true
    data?: true
    remetenteId?: true
    chamadoId?: true
  }

  export type NotificacaoMaxAggregateInputType = {
    id?: true
    data?: true
    remetenteId?: true
    chamadoId?: true
  }

  export type NotificacaoCountAggregateInputType = {
    id?: true
    data?: true
    remetenteId?: true
    chamadoId?: true
    _all?: true
  }

  export type NotificacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacao to aggregate.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacaos
    **/
    _count?: true | NotificacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacaoMaxAggregateInputType
  }

  export type GetNotificacaoAggregateType<T extends NotificacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacao[P]>
      : GetScalarType<T[P], AggregateNotificacao[P]>
  }




  export type NotificacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithAggregationInput | NotificacaoOrderByWithAggregationInput[]
    by: NotificacaoScalarFieldEnum[] | NotificacaoScalarFieldEnum
    having?: NotificacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacaoCountAggregateInputType | true
    _avg?: NotificacaoAvgAggregateInputType
    _sum?: NotificacaoSumAggregateInputType
    _min?: NotificacaoMinAggregateInputType
    _max?: NotificacaoMaxAggregateInputType
  }

  export type NotificacaoGroupByOutputType = {
    id: number
    data: Date
    remetenteId: number
    chamadoId: number
    _count: NotificacaoCountAggregateOutputType | null
    _avg: NotificacaoAvgAggregateOutputType | null
    _sum: NotificacaoSumAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  type GetNotificacaoGroupByPayload<T extends NotificacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
        }
      >
    >


  export type NotificacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    remetenteId?: boolean
    chamadoId?: boolean
    remetente?: boolean | UserDefaultArgs<ExtArgs>
    chamado?: boolean | ChamadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>



  export type NotificacaoSelectScalar = {
    id?: boolean
    data?: boolean
    remetenteId?: boolean
    chamadoId?: boolean
  }

  export type NotificacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "remetenteId" | "chamadoId", ExtArgs["result"]["notificacao"]>
  export type NotificacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    remetente?: boolean | UserDefaultArgs<ExtArgs>
    chamado?: boolean | ChamadoDefaultArgs<ExtArgs>
  }

  export type $NotificacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacao"
    objects: {
      remetente: Prisma.$UserPayload<ExtArgs>
      chamado: Prisma.$ChamadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      remetenteId: number
      chamadoId: number
    }, ExtArgs["result"]["notificacao"]>
    composites: {}
  }

  type NotificacaoGetPayload<S extends boolean | null | undefined | NotificacaoDefaultArgs> = $Result.GetResult<Prisma.$NotificacaoPayload, S>

  type NotificacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacaoCountAggregateInputType | true
    }

  export interface NotificacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacao'], meta: { name: 'Notificacao' } }
    /**
     * Find zero or one Notificacao that matches the filter.
     * @param {NotificacaoFindUniqueArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificacaoFindUniqueArgs>(args: SelectSubset<T, NotificacaoFindUniqueArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificacaoFindUniqueOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificacaoFindFirstArgs>(args?: SelectSubset<T, NotificacaoFindFirstArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacaos
     * const notificacaos = await prisma.notificacao.findMany()
     * 
     * // Get first 10 Notificacaos
     * const notificacaos = await prisma.notificacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificacaoFindManyArgs>(args?: SelectSubset<T, NotificacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificacao.
     * @param {NotificacaoCreateArgs} args - Arguments to create a Notificacao.
     * @example
     * // Create one Notificacao
     * const Notificacao = await prisma.notificacao.create({
     *   data: {
     *     // ... data to create a Notificacao
     *   }
     * })
     * 
     */
    create<T extends NotificacaoCreateArgs>(args: SelectSubset<T, NotificacaoCreateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificacaos.
     * @param {NotificacaoCreateManyArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificacaoCreateManyArgs>(args?: SelectSubset<T, NotificacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notificacao.
     * @param {NotificacaoDeleteArgs} args - Arguments to delete one Notificacao.
     * @example
     * // Delete one Notificacao
     * const Notificacao = await prisma.notificacao.delete({
     *   where: {
     *     // ... filter to delete one Notificacao
     *   }
     * })
     * 
     */
    delete<T extends NotificacaoDeleteArgs>(args: SelectSubset<T, NotificacaoDeleteArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificacao.
     * @param {NotificacaoUpdateArgs} args - Arguments to update one Notificacao.
     * @example
     * // Update one Notificacao
     * const notificacao = await prisma.notificacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificacaoUpdateArgs>(args: SelectSubset<T, NotificacaoUpdateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificacaos.
     * @param {NotificacaoDeleteManyArgs} args - Arguments to filter Notificacaos to delete.
     * @example
     * // Delete a few Notificacaos
     * const { count } = await prisma.notificacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificacaoDeleteManyArgs>(args?: SelectSubset<T, NotificacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificacaoUpdateManyArgs>(args: SelectSubset<T, NotificacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notificacao.
     * @param {NotificacaoUpsertArgs} args - Arguments to update or create a Notificacao.
     * @example
     * // Update or create a Notificacao
     * const notificacao = await prisma.notificacao.upsert({
     *   create: {
     *     // ... data to create a Notificacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacao we want to update
     *   }
     * })
     */
    upsert<T extends NotificacaoUpsertArgs>(args: SelectSubset<T, NotificacaoUpsertArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoCountArgs} args - Arguments to filter Notificacaos to count.
     * @example
     * // Count the number of Notificacaos
     * const count = await prisma.notificacao.count({
     *   where: {
     *     // ... the filter for the Notificacaos we want to count
     *   }
     * })
    **/
    count<T extends NotificacaoCountArgs>(
      args?: Subset<T, NotificacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificacaoAggregateArgs>(args: Subset<T, NotificacaoAggregateArgs>): Prisma.PrismaPromise<GetNotificacaoAggregateType<T>>

    /**
     * Group by Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoGroupByArgs} args - Group by arguments.
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
      T extends NotificacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacaoGroupByArgs['orderBy'] }
        : { orderBy?: NotificacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacao model
   */
  readonly fields: NotificacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    remetente<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chamado<T extends ChamadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChamadoDefaultArgs<ExtArgs>>): Prisma__ChamadoClient<$Result.GetResult<Prisma.$ChamadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notificacao model
   */
  interface NotificacaoFieldRefs {
    readonly id: FieldRef<"Notificacao", 'Int'>
    readonly data: FieldRef<"Notificacao", 'DateTime'>
    readonly remetenteId: FieldRef<"Notificacao", 'Int'>
    readonly chamadoId: FieldRef<"Notificacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Notificacao findUnique
   */
  export type NotificacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findUniqueOrThrow
   */
  export type NotificacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findFirst
   */
  export type NotificacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findFirstOrThrow
   */
  export type NotificacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findMany
   */
  export type NotificacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacaos to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao create
   */
  export type NotificacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Notificacao.
     */
    data: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
  }

  /**
   * Notificacao createMany
   */
  export type NotificacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notificacao update
   */
  export type NotificacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Notificacao.
     */
    data: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
    /**
     * Choose, which Notificacao to update.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao updateMany
   */
  export type NotificacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
  }

  /**
   * Notificacao upsert
   */
  export type NotificacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Notificacao to update in case it exists.
     */
    where: NotificacaoWhereUniqueInput
    /**
     * In case the Notificacao found by the `where` argument doesn't exist, create a new Notificacao with this data.
     */
    create: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
    /**
     * In case the Notificacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
  }

  /**
   * Notificacao delete
   */
  export type NotificacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter which Notificacao to delete.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao deleteMany
   */
  export type NotificacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacaos to delete
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to delete.
     */
    limit?: number
  }

  /**
   * Notificacao without action
   */
  export type NotificacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    funcao: 'funcao'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SetorScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SetorScalarFieldEnum = (typeof SetorScalarFieldEnum)[keyof typeof SetorScalarFieldEnum]


  export const MaquinaScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    dataCompra: 'dataCompra',
    setorId: 'setorId'
  };

  export type MaquinaScalarFieldEnum = (typeof MaquinaScalarFieldEnum)[keyof typeof MaquinaScalarFieldEnum]


  export const FerramentaScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    dataCompra: 'dataCompra',
    maquinaId: 'maquinaId'
  };

  export type FerramentaScalarFieldEnum = (typeof FerramentaScalarFieldEnum)[keyof typeof FerramentaScalarFieldEnum]


  export const ChamadoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    data: 'data',
    status: 'status',
    feedback: 'feedback',
    descResolucao: 'descResolucao',
    dataFechamento: 'dataFechamento',
    tecnicoId: 'tecnicoId',
    funcionarioId: 'funcionarioId',
    maquinaId: 'maquinaId'
  };

  export type ChamadoScalarFieldEnum = (typeof ChamadoScalarFieldEnum)[keyof typeof ChamadoScalarFieldEnum]


  export const NotificacaoScalarFieldEnum: {
    id: 'id',
    data: 'data',
    remetenteId: 'remetenteId',
    chamadoId: 'chamadoId'
  };

  export type NotificacaoScalarFieldEnum = (typeof NotificacaoScalarFieldEnum)[keyof typeof NotificacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    funcao: 'funcao'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const SetorOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type SetorOrderByRelevanceFieldEnum = (typeof SetorOrderByRelevanceFieldEnum)[keyof typeof SetorOrderByRelevanceFieldEnum]


  export const MaquinaOrderByRelevanceFieldEnum: {
    descricao: 'descricao'
  };

  export type MaquinaOrderByRelevanceFieldEnum = (typeof MaquinaOrderByRelevanceFieldEnum)[keyof typeof MaquinaOrderByRelevanceFieldEnum]


  export const FerramentaOrderByRelevanceFieldEnum: {
    descricao: 'descricao'
  };

  export type FerramentaOrderByRelevanceFieldEnum = (typeof FerramentaOrderByRelevanceFieldEnum)[keyof typeof FerramentaOrderByRelevanceFieldEnum]


  export const ChamadoOrderByRelevanceFieldEnum: {
    descricao: 'descricao',
    status: 'status',
    feedback: 'feedback',
    descResolucao: 'descResolucao'
  };

  export type ChamadoOrderByRelevanceFieldEnum = (typeof ChamadoOrderByRelevanceFieldEnum)[keyof typeof ChamadoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    funcao?: StringFilter<"User"> | string
    chamadosfuncionario?: ChamadoListRelationFilter
    chamadostecnico?: ChamadoListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    funcao?: SortOrder
    chamadosfuncionario?: ChamadoOrderByRelationAggregateInput
    chamadostecnico?: ChamadoOrderByRelationAggregateInput
    notificacoes?: NotificacaoOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    funcao?: StringFilter<"User"> | string
    chamadosfuncionario?: ChamadoListRelationFilter
    chamadostecnico?: ChamadoListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
  }, "id" | "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    funcao?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    funcao?: StringWithAggregatesFilter<"User"> | string
  }

  export type SetorWhereInput = {
    AND?: SetorWhereInput | SetorWhereInput[]
    OR?: SetorWhereInput[]
    NOT?: SetorWhereInput | SetorWhereInput[]
    id?: IntFilter<"Setor"> | number
    name?: StringFilter<"Setor"> | string
    maquinas?: MaquinaListRelationFilter
  }

  export type SetorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    maquinas?: MaquinaOrderByRelationAggregateInput
    _relevance?: SetorOrderByRelevanceInput
  }

  export type SetorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SetorWhereInput | SetorWhereInput[]
    OR?: SetorWhereInput[]
    NOT?: SetorWhereInput | SetorWhereInput[]
    name?: StringFilter<"Setor"> | string
    maquinas?: MaquinaListRelationFilter
  }, "id" | "id">

  export type SetorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SetorCountOrderByAggregateInput
    _avg?: SetorAvgOrderByAggregateInput
    _max?: SetorMaxOrderByAggregateInput
    _min?: SetorMinOrderByAggregateInput
    _sum?: SetorSumOrderByAggregateInput
  }

  export type SetorScalarWhereWithAggregatesInput = {
    AND?: SetorScalarWhereWithAggregatesInput | SetorScalarWhereWithAggregatesInput[]
    OR?: SetorScalarWhereWithAggregatesInput[]
    NOT?: SetorScalarWhereWithAggregatesInput | SetorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Setor"> | number
    name?: StringWithAggregatesFilter<"Setor"> | string
  }

  export type MaquinaWhereInput = {
    AND?: MaquinaWhereInput | MaquinaWhereInput[]
    OR?: MaquinaWhereInput[]
    NOT?: MaquinaWhereInput | MaquinaWhereInput[]
    id?: IntFilter<"Maquina"> | number
    descricao?: StringFilter<"Maquina"> | string
    dataCompra?: DateTimeFilter<"Maquina"> | Date | string
    setorId?: IntFilter<"Maquina"> | number
    setor?: XOR<SetorScalarRelationFilter, SetorWhereInput>
    ferramentas?: FerramentaListRelationFilter
    chamados?: ChamadoListRelationFilter
  }

  export type MaquinaOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataCompra?: SortOrder
    setorId?: SortOrder
    setor?: SetorOrderByWithRelationInput
    ferramentas?: FerramentaOrderByRelationAggregateInput
    chamados?: ChamadoOrderByRelationAggregateInput
    _relevance?: MaquinaOrderByRelevanceInput
  }

  export type MaquinaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaquinaWhereInput | MaquinaWhereInput[]
    OR?: MaquinaWhereInput[]
    NOT?: MaquinaWhereInput | MaquinaWhereInput[]
    descricao?: StringFilter<"Maquina"> | string
    dataCompra?: DateTimeFilter<"Maquina"> | Date | string
    setorId?: IntFilter<"Maquina"> | number
    setor?: XOR<SetorScalarRelationFilter, SetorWhereInput>
    ferramentas?: FerramentaListRelationFilter
    chamados?: ChamadoListRelationFilter
  }, "id" | "id">

  export type MaquinaOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataCompra?: SortOrder
    setorId?: SortOrder
    _count?: MaquinaCountOrderByAggregateInput
    _avg?: MaquinaAvgOrderByAggregateInput
    _max?: MaquinaMaxOrderByAggregateInput
    _min?: MaquinaMinOrderByAggregateInput
    _sum?: MaquinaSumOrderByAggregateInput
  }

  export type MaquinaScalarWhereWithAggregatesInput = {
    AND?: MaquinaScalarWhereWithAggregatesInput | MaquinaScalarWhereWithAggregatesInput[]
    OR?: MaquinaScalarWhereWithAggregatesInput[]
    NOT?: MaquinaScalarWhereWithAggregatesInput | MaquinaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Maquina"> | number
    descricao?: StringWithAggregatesFilter<"Maquina"> | string
    dataCompra?: DateTimeWithAggregatesFilter<"Maquina"> | Date | string
    setorId?: IntWithAggregatesFilter<"Maquina"> | number
  }

  export type FerramentaWhereInput = {
    AND?: FerramentaWhereInput | FerramentaWhereInput[]
    OR?: FerramentaWhereInput[]
    NOT?: FerramentaWhereInput | FerramentaWhereInput[]
    id?: IntFilter<"Ferramenta"> | number
    descricao?: StringFilter<"Ferramenta"> | string
    dataCompra?: DateTimeFilter<"Ferramenta"> | Date | string
    maquinaId?: IntFilter<"Ferramenta"> | number
    maquina?: XOR<MaquinaScalarRelationFilter, MaquinaWhereInput>
  }

  export type FerramentaOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataCompra?: SortOrder
    maquinaId?: SortOrder
    maquina?: MaquinaOrderByWithRelationInput
    _relevance?: FerramentaOrderByRelevanceInput
  }

  export type FerramentaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FerramentaWhereInput | FerramentaWhereInput[]
    OR?: FerramentaWhereInput[]
    NOT?: FerramentaWhereInput | FerramentaWhereInput[]
    descricao?: StringFilter<"Ferramenta"> | string
    dataCompra?: DateTimeFilter<"Ferramenta"> | Date | string
    maquinaId?: IntFilter<"Ferramenta"> | number
    maquina?: XOR<MaquinaScalarRelationFilter, MaquinaWhereInput>
  }, "id" | "id">

  export type FerramentaOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataCompra?: SortOrder
    maquinaId?: SortOrder
    _count?: FerramentaCountOrderByAggregateInput
    _avg?: FerramentaAvgOrderByAggregateInput
    _max?: FerramentaMaxOrderByAggregateInput
    _min?: FerramentaMinOrderByAggregateInput
    _sum?: FerramentaSumOrderByAggregateInput
  }

  export type FerramentaScalarWhereWithAggregatesInput = {
    AND?: FerramentaScalarWhereWithAggregatesInput | FerramentaScalarWhereWithAggregatesInput[]
    OR?: FerramentaScalarWhereWithAggregatesInput[]
    NOT?: FerramentaScalarWhereWithAggregatesInput | FerramentaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ferramenta"> | number
    descricao?: StringWithAggregatesFilter<"Ferramenta"> | string
    dataCompra?: DateTimeWithAggregatesFilter<"Ferramenta"> | Date | string
    maquinaId?: IntWithAggregatesFilter<"Ferramenta"> | number
  }

  export type ChamadoWhereInput = {
    AND?: ChamadoWhereInput | ChamadoWhereInput[]
    OR?: ChamadoWhereInput[]
    NOT?: ChamadoWhereInput | ChamadoWhereInput[]
    id?: IntFilter<"Chamado"> | number
    descricao?: StringFilter<"Chamado"> | string
    data?: DateTimeFilter<"Chamado"> | Date | string
    status?: StringFilter<"Chamado"> | string
    feedback?: StringFilter<"Chamado"> | string
    descResolucao?: StringFilter<"Chamado"> | string
    dataFechamento?: DateTimeFilter<"Chamado"> | Date | string
    tecnicoId?: IntFilter<"Chamado"> | number
    funcionarioId?: IntFilter<"Chamado"> | number
    maquinaId?: IntFilter<"Chamado"> | number
    tecnico?: XOR<UserScalarRelationFilter, UserWhereInput>
    funcionario?: XOR<UserScalarRelationFilter, UserWhereInput>
    maquina?: XOR<MaquinaScalarRelationFilter, MaquinaWhereInput>
    notificacoes?: NotificacaoListRelationFilter
  }

  export type ChamadoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    descResolucao?: SortOrder
    dataFechamento?: SortOrder
    tecnicoId?: SortOrder
    funcionarioId?: SortOrder
    maquinaId?: SortOrder
    tecnico?: UserOrderByWithRelationInput
    funcionario?: UserOrderByWithRelationInput
    maquina?: MaquinaOrderByWithRelationInput
    notificacoes?: NotificacaoOrderByRelationAggregateInput
    _relevance?: ChamadoOrderByRelevanceInput
  }

  export type ChamadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tecnicoId?: number
    AND?: ChamadoWhereInput | ChamadoWhereInput[]
    OR?: ChamadoWhereInput[]
    NOT?: ChamadoWhereInput | ChamadoWhereInput[]
    descricao?: StringFilter<"Chamado"> | string
    data?: DateTimeFilter<"Chamado"> | Date | string
    status?: StringFilter<"Chamado"> | string
    feedback?: StringFilter<"Chamado"> | string
    descResolucao?: StringFilter<"Chamado"> | string
    dataFechamento?: DateTimeFilter<"Chamado"> | Date | string
    funcionarioId?: IntFilter<"Chamado"> | number
    maquinaId?: IntFilter<"Chamado"> | number
    tecnico?: XOR<UserScalarRelationFilter, UserWhereInput>
    funcionario?: XOR<UserScalarRelationFilter, UserWhereInput>
    maquina?: XOR<MaquinaScalarRelationFilter, MaquinaWhereInput>
    notificacoes?: NotificacaoListRelationFilter
  }, "id" | "id" | "tecnicoId">

  export type ChamadoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    descResolucao?: SortOrder
    dataFechamento?: SortOrder
    tecnicoId?: SortOrder
    funcionarioId?: SortOrder
    maquinaId?: SortOrder
    _count?: ChamadoCountOrderByAggregateInput
    _avg?: ChamadoAvgOrderByAggregateInput
    _max?: ChamadoMaxOrderByAggregateInput
    _min?: ChamadoMinOrderByAggregateInput
    _sum?: ChamadoSumOrderByAggregateInput
  }

  export type ChamadoScalarWhereWithAggregatesInput = {
    AND?: ChamadoScalarWhereWithAggregatesInput | ChamadoScalarWhereWithAggregatesInput[]
    OR?: ChamadoScalarWhereWithAggregatesInput[]
    NOT?: ChamadoScalarWhereWithAggregatesInput | ChamadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chamado"> | number
    descricao?: StringWithAggregatesFilter<"Chamado"> | string
    data?: DateTimeWithAggregatesFilter<"Chamado"> | Date | string
    status?: StringWithAggregatesFilter<"Chamado"> | string
    feedback?: StringWithAggregatesFilter<"Chamado"> | string
    descResolucao?: StringWithAggregatesFilter<"Chamado"> | string
    dataFechamento?: DateTimeWithAggregatesFilter<"Chamado"> | Date | string
    tecnicoId?: IntWithAggregatesFilter<"Chamado"> | number
    funcionarioId?: IntWithAggregatesFilter<"Chamado"> | number
    maquinaId?: IntWithAggregatesFilter<"Chamado"> | number
  }

  export type NotificacaoWhereInput = {
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    id?: IntFilter<"Notificacao"> | number
    data?: DateTimeFilter<"Notificacao"> | Date | string
    remetenteId?: IntFilter<"Notificacao"> | number
    chamadoId?: IntFilter<"Notificacao"> | number
    remetente?: XOR<UserScalarRelationFilter, UserWhereInput>
    chamado?: XOR<ChamadoScalarRelationFilter, ChamadoWhereInput>
  }

  export type NotificacaoOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    remetenteId?: SortOrder
    chamadoId?: SortOrder
    remetente?: UserOrderByWithRelationInput
    chamado?: ChamadoOrderByWithRelationInput
  }

  export type NotificacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    data?: DateTimeFilter<"Notificacao"> | Date | string
    remetenteId?: IntFilter<"Notificacao"> | number
    chamadoId?: IntFilter<"Notificacao"> | number
    remetente?: XOR<UserScalarRelationFilter, UserWhereInput>
    chamado?: XOR<ChamadoScalarRelationFilter, ChamadoWhereInput>
  }, "id" | "id">

  export type NotificacaoOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    remetenteId?: SortOrder
    chamadoId?: SortOrder
    _count?: NotificacaoCountOrderByAggregateInput
    _avg?: NotificacaoAvgOrderByAggregateInput
    _max?: NotificacaoMaxOrderByAggregateInput
    _min?: NotificacaoMinOrderByAggregateInput
    _sum?: NotificacaoSumOrderByAggregateInput
  }

  export type NotificacaoScalarWhereWithAggregatesInput = {
    AND?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    OR?: NotificacaoScalarWhereWithAggregatesInput[]
    NOT?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notificacao"> | number
    data?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
    remetenteId?: IntWithAggregatesFilter<"Notificacao"> | number
    chamadoId?: IntWithAggregatesFilter<"Notificacao"> | number
  }

  export type UserCreateInput = {
    name: string
    funcao: string
    chamadosfuncionario?: ChamadoCreateNestedManyWithoutTecnicoInput
    chamadostecnico?: ChamadoCreateNestedManyWithoutFuncionarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutRemetenteInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    funcao: string
    chamadosfuncionario?: ChamadoUncheckedCreateNestedManyWithoutTecnicoInput
    chamadostecnico?: ChamadoUncheckedCreateNestedManyWithoutFuncionarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutRemetenteInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    chamadosfuncionario?: ChamadoUpdateManyWithoutTecnicoNestedInput
    chamadostecnico?: ChamadoUpdateManyWithoutFuncionarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutRemetenteNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    chamadosfuncionario?: ChamadoUncheckedUpdateManyWithoutTecnicoNestedInput
    chamadostecnico?: ChamadoUncheckedUpdateManyWithoutFuncionarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutRemetenteNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    funcao: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
  }

  export type SetorCreateInput = {
    name: string
    maquinas?: MaquinaCreateNestedManyWithoutSetorInput
  }

  export type SetorUncheckedCreateInput = {
    id?: number
    name: string
    maquinas?: MaquinaUncheckedCreateNestedManyWithoutSetorInput
  }

  export type SetorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    maquinas?: MaquinaUpdateManyWithoutSetorNestedInput
  }

  export type SetorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    maquinas?: MaquinaUncheckedUpdateManyWithoutSetorNestedInput
  }

  export type SetorCreateManyInput = {
    id?: number
    name: string
  }

  export type SetorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SetorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MaquinaCreateInput = {
    descricao: string
    dataCompra: Date | string
    setor: SetorCreateNestedOneWithoutMaquinasInput
    ferramentas?: FerramentaCreateNestedManyWithoutMaquinaInput
    chamados?: ChamadoCreateNestedManyWithoutMaquinaInput
  }

  export type MaquinaUncheckedCreateInput = {
    id?: number
    descricao: string
    dataCompra: Date | string
    setorId: number
    ferramentas?: FerramentaUncheckedCreateNestedManyWithoutMaquinaInput
    chamados?: ChamadoUncheckedCreateNestedManyWithoutMaquinaInput
  }

  export type MaquinaUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    setor?: SetorUpdateOneRequiredWithoutMaquinasNestedInput
    ferramentas?: FerramentaUpdateManyWithoutMaquinaNestedInput
    chamados?: ChamadoUpdateManyWithoutMaquinaNestedInput
  }

  export type MaquinaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    setorId?: IntFieldUpdateOperationsInput | number
    ferramentas?: FerramentaUncheckedUpdateManyWithoutMaquinaNestedInput
    chamados?: ChamadoUncheckedUpdateManyWithoutMaquinaNestedInput
  }

  export type MaquinaCreateManyInput = {
    id?: number
    descricao: string
    dataCompra: Date | string
    setorId: number
  }

  export type MaquinaUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaquinaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    setorId?: IntFieldUpdateOperationsInput | number
  }

  export type FerramentaCreateInput = {
    descricao: string
    dataCompra: Date | string
    maquina: MaquinaCreateNestedOneWithoutFerramentasInput
  }

  export type FerramentaUncheckedCreateInput = {
    id?: number
    descricao: string
    dataCompra: Date | string
    maquinaId: number
  }

  export type FerramentaUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    maquina?: MaquinaUpdateOneRequiredWithoutFerramentasNestedInput
  }

  export type FerramentaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    maquinaId?: IntFieldUpdateOperationsInput | number
  }

  export type FerramentaCreateManyInput = {
    id?: number
    descricao: string
    dataCompra: Date | string
    maquinaId: number
  }

  export type FerramentaUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FerramentaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    maquinaId?: IntFieldUpdateOperationsInput | number
  }

  export type ChamadoCreateInput = {
    descricao: string
    data: Date | string
    status: string
    feedback: string
    descResolucao: string
    dataFechamento: Date | string
    tecnico: UserCreateNestedOneWithoutChamadosfuncionarioInput
    funcionario: UserCreateNestedOneWithoutChamadostecnicoInput
    maquina: MaquinaCreateNestedOneWithoutChamadosInput
    notificacoes?: NotificacaoCreateNestedManyWithoutChamadoInput
  }

  export type ChamadoUncheckedCreateInput = {
    id?: number
    descricao: string
    data: Date | string
    status: string
    feedback: string
    descResolucao: string
    dataFechamento: Date | string
    tecnicoId: number
    funcionarioId: number
    maquinaId: number
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutChamadoInput
  }

  export type ChamadoUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    descResolucao?: StringFieldUpdateOperationsInput | string
    dataFechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnico?: UserUpdateOneRequiredWithoutChamadosfuncionarioNestedInput
    funcionario?: UserUpdateOneRequiredWithoutChamadostecnicoNestedInput
    maquina?: MaquinaUpdateOneRequiredWithoutChamadosNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutChamadoNestedInput
  }

  export type ChamadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    descResolucao?: StringFieldUpdateOperationsInput | string
    dataFechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnicoId?: IntFieldUpdateOperationsInput | number
    funcionarioId?: IntFieldUpdateOperationsInput | number
    maquinaId?: IntFieldUpdateOperationsInput | number
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutChamadoNestedInput
  }

  export type ChamadoCreateManyInput = {
    id?: number
    descricao: string
    data: Date | string
    status: string
    feedback: string
    descResolucao: string
    dataFechamento: Date | string
    tecnicoId: number
    funcionarioId: number
    maquinaId: number
  }

  export type ChamadoUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    descResolucao?: StringFieldUpdateOperationsInput | string
    dataFechamento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChamadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    descResolucao?: StringFieldUpdateOperationsInput | string
    dataFechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnicoId?: IntFieldUpdateOperationsInput | number
    funcionarioId?: IntFieldUpdateOperationsInput | number
    maquinaId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificacaoCreateInput = {
    data: Date | string
    remetente: UserCreateNestedOneWithoutNotificacoesInput
    chamado: ChamadoCreateNestedOneWithoutNotificacoesInput
  }

  export type NotificacaoUncheckedCreateInput = {
    id?: number
    data: Date | string
    remetenteId: number
    chamadoId: number
  }

  export type NotificacaoUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    remetente?: UserUpdateOneRequiredWithoutNotificacoesNestedInput
    chamado?: ChamadoUpdateOneRequiredWithoutNotificacoesNestedInput
  }

  export type NotificacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    remetenteId?: IntFieldUpdateOperationsInput | number
    chamadoId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificacaoCreateManyInput = {
    id?: number
    data: Date | string
    remetenteId: number
    chamadoId: number
  }

  export type NotificacaoUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    remetenteId?: IntFieldUpdateOperationsInput | number
    chamadoId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ChamadoListRelationFilter = {
    every?: ChamadoWhereInput
    some?: ChamadoWhereInput
    none?: ChamadoWhereInput
  }

  export type NotificacaoListRelationFilter = {
    every?: NotificacaoWhereInput
    some?: NotificacaoWhereInput
    none?: NotificacaoWhereInput
  }

  export type ChamadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    funcao?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    funcao?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    funcao?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type MaquinaListRelationFilter = {
    every?: MaquinaWhereInput
    some?: MaquinaWhereInput
    none?: MaquinaWhereInput
  }

  export type MaquinaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SetorOrderByRelevanceInput = {
    fields: SetorOrderByRelevanceFieldEnum | SetorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SetorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SetorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SetorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SetorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SetorSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type SetorScalarRelationFilter = {
    is?: SetorWhereInput
    isNot?: SetorWhereInput
  }

  export type FerramentaListRelationFilter = {
    every?: FerramentaWhereInput
    some?: FerramentaWhereInput
    none?: FerramentaWhereInput
  }

  export type FerramentaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaquinaOrderByRelevanceInput = {
    fields: MaquinaOrderByRelevanceFieldEnum | MaquinaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MaquinaCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataCompra?: SortOrder
    setorId?: SortOrder
  }

  export type MaquinaAvgOrderByAggregateInput = {
    id?: SortOrder
    setorId?: SortOrder
  }

  export type MaquinaMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataCompra?: SortOrder
    setorId?: SortOrder
  }

  export type MaquinaMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataCompra?: SortOrder
    setorId?: SortOrder
  }

  export type MaquinaSumOrderByAggregateInput = {
    id?: SortOrder
    setorId?: SortOrder
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

  export type MaquinaScalarRelationFilter = {
    is?: MaquinaWhereInput
    isNot?: MaquinaWhereInput
  }

  export type FerramentaOrderByRelevanceInput = {
    fields: FerramentaOrderByRelevanceFieldEnum | FerramentaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FerramentaCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataCompra?: SortOrder
    maquinaId?: SortOrder
  }

  export type FerramentaAvgOrderByAggregateInput = {
    id?: SortOrder
    maquinaId?: SortOrder
  }

  export type FerramentaMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataCompra?: SortOrder
    maquinaId?: SortOrder
  }

  export type FerramentaMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    dataCompra?: SortOrder
    maquinaId?: SortOrder
  }

  export type FerramentaSumOrderByAggregateInput = {
    id?: SortOrder
    maquinaId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChamadoOrderByRelevanceInput = {
    fields: ChamadoOrderByRelevanceFieldEnum | ChamadoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChamadoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    descResolucao?: SortOrder
    dataFechamento?: SortOrder
    tecnicoId?: SortOrder
    funcionarioId?: SortOrder
    maquinaId?: SortOrder
  }

  export type ChamadoAvgOrderByAggregateInput = {
    id?: SortOrder
    tecnicoId?: SortOrder
    funcionarioId?: SortOrder
    maquinaId?: SortOrder
  }

  export type ChamadoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    descResolucao?: SortOrder
    dataFechamento?: SortOrder
    tecnicoId?: SortOrder
    funcionarioId?: SortOrder
    maquinaId?: SortOrder
  }

  export type ChamadoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    descResolucao?: SortOrder
    dataFechamento?: SortOrder
    tecnicoId?: SortOrder
    funcionarioId?: SortOrder
    maquinaId?: SortOrder
  }

  export type ChamadoSumOrderByAggregateInput = {
    id?: SortOrder
    tecnicoId?: SortOrder
    funcionarioId?: SortOrder
    maquinaId?: SortOrder
  }

  export type ChamadoScalarRelationFilter = {
    is?: ChamadoWhereInput
    isNot?: ChamadoWhereInput
  }

  export type NotificacaoCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    remetenteId?: SortOrder
    chamadoId?: SortOrder
  }

  export type NotificacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    remetenteId?: SortOrder
    chamadoId?: SortOrder
  }

  export type NotificacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    remetenteId?: SortOrder
    chamadoId?: SortOrder
  }

  export type NotificacaoMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    remetenteId?: SortOrder
    chamadoId?: SortOrder
  }

  export type NotificacaoSumOrderByAggregateInput = {
    id?: SortOrder
    remetenteId?: SortOrder
    chamadoId?: SortOrder
  }

  export type ChamadoCreateNestedManyWithoutTecnicoInput = {
    create?: XOR<ChamadoCreateWithoutTecnicoInput, ChamadoUncheckedCreateWithoutTecnicoInput> | ChamadoCreateWithoutTecnicoInput[] | ChamadoUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutTecnicoInput | ChamadoCreateOrConnectWithoutTecnicoInput[]
    createMany?: ChamadoCreateManyTecnicoInputEnvelope
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
  }

  export type ChamadoCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<ChamadoCreateWithoutFuncionarioInput, ChamadoUncheckedCreateWithoutFuncionarioInput> | ChamadoCreateWithoutFuncionarioInput[] | ChamadoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutFuncionarioInput | ChamadoCreateOrConnectWithoutFuncionarioInput[]
    createMany?: ChamadoCreateManyFuncionarioInputEnvelope
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
  }

  export type NotificacaoCreateNestedManyWithoutRemetenteInput = {
    create?: XOR<NotificacaoCreateWithoutRemetenteInput, NotificacaoUncheckedCreateWithoutRemetenteInput> | NotificacaoCreateWithoutRemetenteInput[] | NotificacaoUncheckedCreateWithoutRemetenteInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutRemetenteInput | NotificacaoCreateOrConnectWithoutRemetenteInput[]
    createMany?: NotificacaoCreateManyRemetenteInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type ChamadoUncheckedCreateNestedManyWithoutTecnicoInput = {
    create?: XOR<ChamadoCreateWithoutTecnicoInput, ChamadoUncheckedCreateWithoutTecnicoInput> | ChamadoCreateWithoutTecnicoInput[] | ChamadoUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutTecnicoInput | ChamadoCreateOrConnectWithoutTecnicoInput[]
    createMany?: ChamadoCreateManyTecnicoInputEnvelope
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
  }

  export type ChamadoUncheckedCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<ChamadoCreateWithoutFuncionarioInput, ChamadoUncheckedCreateWithoutFuncionarioInput> | ChamadoCreateWithoutFuncionarioInput[] | ChamadoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutFuncionarioInput | ChamadoCreateOrConnectWithoutFuncionarioInput[]
    createMany?: ChamadoCreateManyFuncionarioInputEnvelope
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
  }

  export type NotificacaoUncheckedCreateNestedManyWithoutRemetenteInput = {
    create?: XOR<NotificacaoCreateWithoutRemetenteInput, NotificacaoUncheckedCreateWithoutRemetenteInput> | NotificacaoCreateWithoutRemetenteInput[] | NotificacaoUncheckedCreateWithoutRemetenteInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutRemetenteInput | NotificacaoCreateOrConnectWithoutRemetenteInput[]
    createMany?: NotificacaoCreateManyRemetenteInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ChamadoUpdateManyWithoutTecnicoNestedInput = {
    create?: XOR<ChamadoCreateWithoutTecnicoInput, ChamadoUncheckedCreateWithoutTecnicoInput> | ChamadoCreateWithoutTecnicoInput[] | ChamadoUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutTecnicoInput | ChamadoCreateOrConnectWithoutTecnicoInput[]
    upsert?: ChamadoUpsertWithWhereUniqueWithoutTecnicoInput | ChamadoUpsertWithWhereUniqueWithoutTecnicoInput[]
    createMany?: ChamadoCreateManyTecnicoInputEnvelope
    set?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    disconnect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    delete?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    update?: ChamadoUpdateWithWhereUniqueWithoutTecnicoInput | ChamadoUpdateWithWhereUniqueWithoutTecnicoInput[]
    updateMany?: ChamadoUpdateManyWithWhereWithoutTecnicoInput | ChamadoUpdateManyWithWhereWithoutTecnicoInput[]
    deleteMany?: ChamadoScalarWhereInput | ChamadoScalarWhereInput[]
  }

  export type ChamadoUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<ChamadoCreateWithoutFuncionarioInput, ChamadoUncheckedCreateWithoutFuncionarioInput> | ChamadoCreateWithoutFuncionarioInput[] | ChamadoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutFuncionarioInput | ChamadoCreateOrConnectWithoutFuncionarioInput[]
    upsert?: ChamadoUpsertWithWhereUniqueWithoutFuncionarioInput | ChamadoUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: ChamadoCreateManyFuncionarioInputEnvelope
    set?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    disconnect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    delete?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    update?: ChamadoUpdateWithWhereUniqueWithoutFuncionarioInput | ChamadoUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: ChamadoUpdateManyWithWhereWithoutFuncionarioInput | ChamadoUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: ChamadoScalarWhereInput | ChamadoScalarWhereInput[]
  }

  export type NotificacaoUpdateManyWithoutRemetenteNestedInput = {
    create?: XOR<NotificacaoCreateWithoutRemetenteInput, NotificacaoUncheckedCreateWithoutRemetenteInput> | NotificacaoCreateWithoutRemetenteInput[] | NotificacaoUncheckedCreateWithoutRemetenteInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutRemetenteInput | NotificacaoCreateOrConnectWithoutRemetenteInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutRemetenteInput | NotificacaoUpsertWithWhereUniqueWithoutRemetenteInput[]
    createMany?: NotificacaoCreateManyRemetenteInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutRemetenteInput | NotificacaoUpdateWithWhereUniqueWithoutRemetenteInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutRemetenteInput | NotificacaoUpdateManyWithWhereWithoutRemetenteInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChamadoUncheckedUpdateManyWithoutTecnicoNestedInput = {
    create?: XOR<ChamadoCreateWithoutTecnicoInput, ChamadoUncheckedCreateWithoutTecnicoInput> | ChamadoCreateWithoutTecnicoInput[] | ChamadoUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutTecnicoInput | ChamadoCreateOrConnectWithoutTecnicoInput[]
    upsert?: ChamadoUpsertWithWhereUniqueWithoutTecnicoInput | ChamadoUpsertWithWhereUniqueWithoutTecnicoInput[]
    createMany?: ChamadoCreateManyTecnicoInputEnvelope
    set?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    disconnect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    delete?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    update?: ChamadoUpdateWithWhereUniqueWithoutTecnicoInput | ChamadoUpdateWithWhereUniqueWithoutTecnicoInput[]
    updateMany?: ChamadoUpdateManyWithWhereWithoutTecnicoInput | ChamadoUpdateManyWithWhereWithoutTecnicoInput[]
    deleteMany?: ChamadoScalarWhereInput | ChamadoScalarWhereInput[]
  }

  export type ChamadoUncheckedUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<ChamadoCreateWithoutFuncionarioInput, ChamadoUncheckedCreateWithoutFuncionarioInput> | ChamadoCreateWithoutFuncionarioInput[] | ChamadoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutFuncionarioInput | ChamadoCreateOrConnectWithoutFuncionarioInput[]
    upsert?: ChamadoUpsertWithWhereUniqueWithoutFuncionarioInput | ChamadoUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: ChamadoCreateManyFuncionarioInputEnvelope
    set?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    disconnect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    delete?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    update?: ChamadoUpdateWithWhereUniqueWithoutFuncionarioInput | ChamadoUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: ChamadoUpdateManyWithWhereWithoutFuncionarioInput | ChamadoUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: ChamadoScalarWhereInput | ChamadoScalarWhereInput[]
  }

  export type NotificacaoUncheckedUpdateManyWithoutRemetenteNestedInput = {
    create?: XOR<NotificacaoCreateWithoutRemetenteInput, NotificacaoUncheckedCreateWithoutRemetenteInput> | NotificacaoCreateWithoutRemetenteInput[] | NotificacaoUncheckedCreateWithoutRemetenteInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutRemetenteInput | NotificacaoCreateOrConnectWithoutRemetenteInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutRemetenteInput | NotificacaoUpsertWithWhereUniqueWithoutRemetenteInput[]
    createMany?: NotificacaoCreateManyRemetenteInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutRemetenteInput | NotificacaoUpdateWithWhereUniqueWithoutRemetenteInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutRemetenteInput | NotificacaoUpdateManyWithWhereWithoutRemetenteInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type MaquinaCreateNestedManyWithoutSetorInput = {
    create?: XOR<MaquinaCreateWithoutSetorInput, MaquinaUncheckedCreateWithoutSetorInput> | MaquinaCreateWithoutSetorInput[] | MaquinaUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: MaquinaCreateOrConnectWithoutSetorInput | MaquinaCreateOrConnectWithoutSetorInput[]
    createMany?: MaquinaCreateManySetorInputEnvelope
    connect?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
  }

  export type MaquinaUncheckedCreateNestedManyWithoutSetorInput = {
    create?: XOR<MaquinaCreateWithoutSetorInput, MaquinaUncheckedCreateWithoutSetorInput> | MaquinaCreateWithoutSetorInput[] | MaquinaUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: MaquinaCreateOrConnectWithoutSetorInput | MaquinaCreateOrConnectWithoutSetorInput[]
    createMany?: MaquinaCreateManySetorInputEnvelope
    connect?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
  }

  export type MaquinaUpdateManyWithoutSetorNestedInput = {
    create?: XOR<MaquinaCreateWithoutSetorInput, MaquinaUncheckedCreateWithoutSetorInput> | MaquinaCreateWithoutSetorInput[] | MaquinaUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: MaquinaCreateOrConnectWithoutSetorInput | MaquinaCreateOrConnectWithoutSetorInput[]
    upsert?: MaquinaUpsertWithWhereUniqueWithoutSetorInput | MaquinaUpsertWithWhereUniqueWithoutSetorInput[]
    createMany?: MaquinaCreateManySetorInputEnvelope
    set?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
    disconnect?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
    delete?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
    connect?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
    update?: MaquinaUpdateWithWhereUniqueWithoutSetorInput | MaquinaUpdateWithWhereUniqueWithoutSetorInput[]
    updateMany?: MaquinaUpdateManyWithWhereWithoutSetorInput | MaquinaUpdateManyWithWhereWithoutSetorInput[]
    deleteMany?: MaquinaScalarWhereInput | MaquinaScalarWhereInput[]
  }

  export type MaquinaUncheckedUpdateManyWithoutSetorNestedInput = {
    create?: XOR<MaquinaCreateWithoutSetorInput, MaquinaUncheckedCreateWithoutSetorInput> | MaquinaCreateWithoutSetorInput[] | MaquinaUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: MaquinaCreateOrConnectWithoutSetorInput | MaquinaCreateOrConnectWithoutSetorInput[]
    upsert?: MaquinaUpsertWithWhereUniqueWithoutSetorInput | MaquinaUpsertWithWhereUniqueWithoutSetorInput[]
    createMany?: MaquinaCreateManySetorInputEnvelope
    set?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
    disconnect?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
    delete?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
    connect?: MaquinaWhereUniqueInput | MaquinaWhereUniqueInput[]
    update?: MaquinaUpdateWithWhereUniqueWithoutSetorInput | MaquinaUpdateWithWhereUniqueWithoutSetorInput[]
    updateMany?: MaquinaUpdateManyWithWhereWithoutSetorInput | MaquinaUpdateManyWithWhereWithoutSetorInput[]
    deleteMany?: MaquinaScalarWhereInput | MaquinaScalarWhereInput[]
  }

  export type SetorCreateNestedOneWithoutMaquinasInput = {
    create?: XOR<SetorCreateWithoutMaquinasInput, SetorUncheckedCreateWithoutMaquinasInput>
    connectOrCreate?: SetorCreateOrConnectWithoutMaquinasInput
    connect?: SetorWhereUniqueInput
  }

  export type FerramentaCreateNestedManyWithoutMaquinaInput = {
    create?: XOR<FerramentaCreateWithoutMaquinaInput, FerramentaUncheckedCreateWithoutMaquinaInput> | FerramentaCreateWithoutMaquinaInput[] | FerramentaUncheckedCreateWithoutMaquinaInput[]
    connectOrCreate?: FerramentaCreateOrConnectWithoutMaquinaInput | FerramentaCreateOrConnectWithoutMaquinaInput[]
    createMany?: FerramentaCreateManyMaquinaInputEnvelope
    connect?: FerramentaWhereUniqueInput | FerramentaWhereUniqueInput[]
  }

  export type ChamadoCreateNestedManyWithoutMaquinaInput = {
    create?: XOR<ChamadoCreateWithoutMaquinaInput, ChamadoUncheckedCreateWithoutMaquinaInput> | ChamadoCreateWithoutMaquinaInput[] | ChamadoUncheckedCreateWithoutMaquinaInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutMaquinaInput | ChamadoCreateOrConnectWithoutMaquinaInput[]
    createMany?: ChamadoCreateManyMaquinaInputEnvelope
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
  }

  export type FerramentaUncheckedCreateNestedManyWithoutMaquinaInput = {
    create?: XOR<FerramentaCreateWithoutMaquinaInput, FerramentaUncheckedCreateWithoutMaquinaInput> | FerramentaCreateWithoutMaquinaInput[] | FerramentaUncheckedCreateWithoutMaquinaInput[]
    connectOrCreate?: FerramentaCreateOrConnectWithoutMaquinaInput | FerramentaCreateOrConnectWithoutMaquinaInput[]
    createMany?: FerramentaCreateManyMaquinaInputEnvelope
    connect?: FerramentaWhereUniqueInput | FerramentaWhereUniqueInput[]
  }

  export type ChamadoUncheckedCreateNestedManyWithoutMaquinaInput = {
    create?: XOR<ChamadoCreateWithoutMaquinaInput, ChamadoUncheckedCreateWithoutMaquinaInput> | ChamadoCreateWithoutMaquinaInput[] | ChamadoUncheckedCreateWithoutMaquinaInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutMaquinaInput | ChamadoCreateOrConnectWithoutMaquinaInput[]
    createMany?: ChamadoCreateManyMaquinaInputEnvelope
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SetorUpdateOneRequiredWithoutMaquinasNestedInput = {
    create?: XOR<SetorCreateWithoutMaquinasInput, SetorUncheckedCreateWithoutMaquinasInput>
    connectOrCreate?: SetorCreateOrConnectWithoutMaquinasInput
    upsert?: SetorUpsertWithoutMaquinasInput
    connect?: SetorWhereUniqueInput
    update?: XOR<XOR<SetorUpdateToOneWithWhereWithoutMaquinasInput, SetorUpdateWithoutMaquinasInput>, SetorUncheckedUpdateWithoutMaquinasInput>
  }

  export type FerramentaUpdateManyWithoutMaquinaNestedInput = {
    create?: XOR<FerramentaCreateWithoutMaquinaInput, FerramentaUncheckedCreateWithoutMaquinaInput> | FerramentaCreateWithoutMaquinaInput[] | FerramentaUncheckedCreateWithoutMaquinaInput[]
    connectOrCreate?: FerramentaCreateOrConnectWithoutMaquinaInput | FerramentaCreateOrConnectWithoutMaquinaInput[]
    upsert?: FerramentaUpsertWithWhereUniqueWithoutMaquinaInput | FerramentaUpsertWithWhereUniqueWithoutMaquinaInput[]
    createMany?: FerramentaCreateManyMaquinaInputEnvelope
    set?: FerramentaWhereUniqueInput | FerramentaWhereUniqueInput[]
    disconnect?: FerramentaWhereUniqueInput | FerramentaWhereUniqueInput[]
    delete?: FerramentaWhereUniqueInput | FerramentaWhereUniqueInput[]
    connect?: FerramentaWhereUniqueInput | FerramentaWhereUniqueInput[]
    update?: FerramentaUpdateWithWhereUniqueWithoutMaquinaInput | FerramentaUpdateWithWhereUniqueWithoutMaquinaInput[]
    updateMany?: FerramentaUpdateManyWithWhereWithoutMaquinaInput | FerramentaUpdateManyWithWhereWithoutMaquinaInput[]
    deleteMany?: FerramentaScalarWhereInput | FerramentaScalarWhereInput[]
  }

  export type ChamadoUpdateManyWithoutMaquinaNestedInput = {
    create?: XOR<ChamadoCreateWithoutMaquinaInput, ChamadoUncheckedCreateWithoutMaquinaInput> | ChamadoCreateWithoutMaquinaInput[] | ChamadoUncheckedCreateWithoutMaquinaInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutMaquinaInput | ChamadoCreateOrConnectWithoutMaquinaInput[]
    upsert?: ChamadoUpsertWithWhereUniqueWithoutMaquinaInput | ChamadoUpsertWithWhereUniqueWithoutMaquinaInput[]
    createMany?: ChamadoCreateManyMaquinaInputEnvelope
    set?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    disconnect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    delete?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    update?: ChamadoUpdateWithWhereUniqueWithoutMaquinaInput | ChamadoUpdateWithWhereUniqueWithoutMaquinaInput[]
    updateMany?: ChamadoUpdateManyWithWhereWithoutMaquinaInput | ChamadoUpdateManyWithWhereWithoutMaquinaInput[]
    deleteMany?: ChamadoScalarWhereInput | ChamadoScalarWhereInput[]
  }

  export type FerramentaUncheckedUpdateManyWithoutMaquinaNestedInput = {
    create?: XOR<FerramentaCreateWithoutMaquinaInput, FerramentaUncheckedCreateWithoutMaquinaInput> | FerramentaCreateWithoutMaquinaInput[] | FerramentaUncheckedCreateWithoutMaquinaInput[]
    connectOrCreate?: FerramentaCreateOrConnectWithoutMaquinaInput | FerramentaCreateOrConnectWithoutMaquinaInput[]
    upsert?: FerramentaUpsertWithWhereUniqueWithoutMaquinaInput | FerramentaUpsertWithWhereUniqueWithoutMaquinaInput[]
    createMany?: FerramentaCreateManyMaquinaInputEnvelope
    set?: FerramentaWhereUniqueInput | FerramentaWhereUniqueInput[]
    disconnect?: FerramentaWhereUniqueInput | FerramentaWhereUniqueInput[]
    delete?: FerramentaWhereUniqueInput | FerramentaWhereUniqueInput[]
    connect?: FerramentaWhereUniqueInput | FerramentaWhereUniqueInput[]
    update?: FerramentaUpdateWithWhereUniqueWithoutMaquinaInput | FerramentaUpdateWithWhereUniqueWithoutMaquinaInput[]
    updateMany?: FerramentaUpdateManyWithWhereWithoutMaquinaInput | FerramentaUpdateManyWithWhereWithoutMaquinaInput[]
    deleteMany?: FerramentaScalarWhereInput | FerramentaScalarWhereInput[]
  }

  export type ChamadoUncheckedUpdateManyWithoutMaquinaNestedInput = {
    create?: XOR<ChamadoCreateWithoutMaquinaInput, ChamadoUncheckedCreateWithoutMaquinaInput> | ChamadoCreateWithoutMaquinaInput[] | ChamadoUncheckedCreateWithoutMaquinaInput[]
    connectOrCreate?: ChamadoCreateOrConnectWithoutMaquinaInput | ChamadoCreateOrConnectWithoutMaquinaInput[]
    upsert?: ChamadoUpsertWithWhereUniqueWithoutMaquinaInput | ChamadoUpsertWithWhereUniqueWithoutMaquinaInput[]
    createMany?: ChamadoCreateManyMaquinaInputEnvelope
    set?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    disconnect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    delete?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    connect?: ChamadoWhereUniqueInput | ChamadoWhereUniqueInput[]
    update?: ChamadoUpdateWithWhereUniqueWithoutMaquinaInput | ChamadoUpdateWithWhereUniqueWithoutMaquinaInput[]
    updateMany?: ChamadoUpdateManyWithWhereWithoutMaquinaInput | ChamadoUpdateManyWithWhereWithoutMaquinaInput[]
    deleteMany?: ChamadoScalarWhereInput | ChamadoScalarWhereInput[]
  }

  export type MaquinaCreateNestedOneWithoutFerramentasInput = {
    create?: XOR<MaquinaCreateWithoutFerramentasInput, MaquinaUncheckedCreateWithoutFerramentasInput>
    connectOrCreate?: MaquinaCreateOrConnectWithoutFerramentasInput
    connect?: MaquinaWhereUniqueInput
  }

  export type MaquinaUpdateOneRequiredWithoutFerramentasNestedInput = {
    create?: XOR<MaquinaCreateWithoutFerramentasInput, MaquinaUncheckedCreateWithoutFerramentasInput>
    connectOrCreate?: MaquinaCreateOrConnectWithoutFerramentasInput
    upsert?: MaquinaUpsertWithoutFerramentasInput
    connect?: MaquinaWhereUniqueInput
    update?: XOR<XOR<MaquinaUpdateToOneWithWhereWithoutFerramentasInput, MaquinaUpdateWithoutFerramentasInput>, MaquinaUncheckedUpdateWithoutFerramentasInput>
  }

  export type UserCreateNestedOneWithoutChamadosfuncionarioInput = {
    create?: XOR<UserCreateWithoutChamadosfuncionarioInput, UserUncheckedCreateWithoutChamadosfuncionarioInput>
    connectOrCreate?: UserCreateOrConnectWithoutChamadosfuncionarioInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChamadostecnicoInput = {
    create?: XOR<UserCreateWithoutChamadostecnicoInput, UserUncheckedCreateWithoutChamadostecnicoInput>
    connectOrCreate?: UserCreateOrConnectWithoutChamadostecnicoInput
    connect?: UserWhereUniqueInput
  }

  export type MaquinaCreateNestedOneWithoutChamadosInput = {
    create?: XOR<MaquinaCreateWithoutChamadosInput, MaquinaUncheckedCreateWithoutChamadosInput>
    connectOrCreate?: MaquinaCreateOrConnectWithoutChamadosInput
    connect?: MaquinaWhereUniqueInput
  }

  export type NotificacaoCreateNestedManyWithoutChamadoInput = {
    create?: XOR<NotificacaoCreateWithoutChamadoInput, NotificacaoUncheckedCreateWithoutChamadoInput> | NotificacaoCreateWithoutChamadoInput[] | NotificacaoUncheckedCreateWithoutChamadoInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutChamadoInput | NotificacaoCreateOrConnectWithoutChamadoInput[]
    createMany?: NotificacaoCreateManyChamadoInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type NotificacaoUncheckedCreateNestedManyWithoutChamadoInput = {
    create?: XOR<NotificacaoCreateWithoutChamadoInput, NotificacaoUncheckedCreateWithoutChamadoInput> | NotificacaoCreateWithoutChamadoInput[] | NotificacaoUncheckedCreateWithoutChamadoInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutChamadoInput | NotificacaoCreateOrConnectWithoutChamadoInput[]
    createMany?: NotificacaoCreateManyChamadoInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutChamadosfuncionarioNestedInput = {
    create?: XOR<UserCreateWithoutChamadosfuncionarioInput, UserUncheckedCreateWithoutChamadosfuncionarioInput>
    connectOrCreate?: UserCreateOrConnectWithoutChamadosfuncionarioInput
    upsert?: UserUpsertWithoutChamadosfuncionarioInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChamadosfuncionarioInput, UserUpdateWithoutChamadosfuncionarioInput>, UserUncheckedUpdateWithoutChamadosfuncionarioInput>
  }

  export type UserUpdateOneRequiredWithoutChamadostecnicoNestedInput = {
    create?: XOR<UserCreateWithoutChamadostecnicoInput, UserUncheckedCreateWithoutChamadostecnicoInput>
    connectOrCreate?: UserCreateOrConnectWithoutChamadostecnicoInput
    upsert?: UserUpsertWithoutChamadostecnicoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChamadostecnicoInput, UserUpdateWithoutChamadostecnicoInput>, UserUncheckedUpdateWithoutChamadostecnicoInput>
  }

  export type MaquinaUpdateOneRequiredWithoutChamadosNestedInput = {
    create?: XOR<MaquinaCreateWithoutChamadosInput, MaquinaUncheckedCreateWithoutChamadosInput>
    connectOrCreate?: MaquinaCreateOrConnectWithoutChamadosInput
    upsert?: MaquinaUpsertWithoutChamadosInput
    connect?: MaquinaWhereUniqueInput
    update?: XOR<XOR<MaquinaUpdateToOneWithWhereWithoutChamadosInput, MaquinaUpdateWithoutChamadosInput>, MaquinaUncheckedUpdateWithoutChamadosInput>
  }

  export type NotificacaoUpdateManyWithoutChamadoNestedInput = {
    create?: XOR<NotificacaoCreateWithoutChamadoInput, NotificacaoUncheckedCreateWithoutChamadoInput> | NotificacaoCreateWithoutChamadoInput[] | NotificacaoUncheckedCreateWithoutChamadoInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutChamadoInput | NotificacaoCreateOrConnectWithoutChamadoInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutChamadoInput | NotificacaoUpsertWithWhereUniqueWithoutChamadoInput[]
    createMany?: NotificacaoCreateManyChamadoInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutChamadoInput | NotificacaoUpdateWithWhereUniqueWithoutChamadoInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutChamadoInput | NotificacaoUpdateManyWithWhereWithoutChamadoInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type NotificacaoUncheckedUpdateManyWithoutChamadoNestedInput = {
    create?: XOR<NotificacaoCreateWithoutChamadoInput, NotificacaoUncheckedCreateWithoutChamadoInput> | NotificacaoCreateWithoutChamadoInput[] | NotificacaoUncheckedCreateWithoutChamadoInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutChamadoInput | NotificacaoCreateOrConnectWithoutChamadoInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutChamadoInput | NotificacaoUpsertWithWhereUniqueWithoutChamadoInput[]
    createMany?: NotificacaoCreateManyChamadoInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutChamadoInput | NotificacaoUpdateWithWhereUniqueWithoutChamadoInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutChamadoInput | NotificacaoUpdateManyWithWhereWithoutChamadoInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificacoesInput = {
    create?: XOR<UserCreateWithoutNotificacoesInput, UserUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificacoesInput
    connect?: UserWhereUniqueInput
  }

  export type ChamadoCreateNestedOneWithoutNotificacoesInput = {
    create?: XOR<ChamadoCreateWithoutNotificacoesInput, ChamadoUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: ChamadoCreateOrConnectWithoutNotificacoesInput
    connect?: ChamadoWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificacoesNestedInput = {
    create?: XOR<UserCreateWithoutNotificacoesInput, UserUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificacoesInput
    upsert?: UserUpsertWithoutNotificacoesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificacoesInput, UserUpdateWithoutNotificacoesInput>, UserUncheckedUpdateWithoutNotificacoesInput>
  }

  export type ChamadoUpdateOneRequiredWithoutNotificacoesNestedInput = {
    create?: XOR<ChamadoCreateWithoutNotificacoesInput, ChamadoUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: ChamadoCreateOrConnectWithoutNotificacoesInput
    upsert?: ChamadoUpsertWithoutNotificacoesInput
    connect?: ChamadoWhereUniqueInput
    update?: XOR<XOR<ChamadoUpdateToOneWithWhereWithoutNotificacoesInput, ChamadoUpdateWithoutNotificacoesInput>, ChamadoUncheckedUpdateWithoutNotificacoesInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type ChamadoCreateWithoutTecnicoInput = {
    descricao: string
    data: Date | string
    status: string
    feedback: string
    descResolucao: string
    dataFechamento: Date | string
    funcionario: UserCreateNestedOneWithoutChamadostecnicoInput
    maquina: MaquinaCreateNestedOneWithoutChamadosInput
    notificacoes?: NotificacaoCreateNestedManyWithoutChamadoInput
  }

  export type ChamadoUncheckedCreateWithoutTecnicoInput = {
    id?: number
    descricao: string
    data: Date | string
    status: string
    feedback: string
    descResolucao: string
    dataFechamento: Date | string
    funcionarioId: number
    maquinaId: number
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutChamadoInput
  }

  export type ChamadoCreateOrConnectWithoutTecnicoInput = {
    where: ChamadoWhereUniqueInput
    create: XOR<ChamadoCreateWithoutTecnicoInput, ChamadoUncheckedCreateWithoutTecnicoInput>
  }

  export type ChamadoCreateManyTecnicoInputEnvelope = {
    data: ChamadoCreateManyTecnicoInput | ChamadoCreateManyTecnicoInput[]
    skipDuplicates?: boolean
  }

  export type ChamadoCreateWithoutFuncionarioInput = {
    descricao: string
    data: Date | string
    status: string
    feedback: string
    descResolucao: string
    dataFechamento: Date | string
    tecnico: UserCreateNestedOneWithoutChamadosfuncionarioInput
    maquina: MaquinaCreateNestedOneWithoutChamadosInput
    notificacoes?: NotificacaoCreateNestedManyWithoutChamadoInput
  }

  export type ChamadoUncheckedCreateWithoutFuncionarioInput = {
    id?: number
    descricao: string
    data: Date | string
    status: string
    feedback: string
    descResolucao: string
    dataFechamento: Date | string
    tecnicoId: number
    maquinaId: number
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutChamadoInput
  }

  export type ChamadoCreateOrConnectWithoutFuncionarioInput = {
    where: ChamadoWhereUniqueInput
    create: XOR<ChamadoCreateWithoutFuncionarioInput, ChamadoUncheckedCreateWithoutFuncionarioInput>
  }

  export type ChamadoCreateManyFuncionarioInputEnvelope = {
    data: ChamadoCreateManyFuncionarioInput | ChamadoCreateManyFuncionarioInput[]
    skipDuplicates?: boolean
  }

  export type NotificacaoCreateWithoutRemetenteInput = {
    data: Date | string
    chamado: ChamadoCreateNestedOneWithoutNotificacoesInput
  }

  export type NotificacaoUncheckedCreateWithoutRemetenteInput = {
    id?: number
    data: Date | string
    chamadoId: number
  }

  export type NotificacaoCreateOrConnectWithoutRemetenteInput = {
    where: NotificacaoWhereUniqueInput
    create: XOR<NotificacaoCreateWithoutRemetenteInput, NotificacaoUncheckedCreateWithoutRemetenteInput>
  }

  export type NotificacaoCreateManyRemetenteInputEnvelope = {
    data: NotificacaoCreateManyRemetenteInput | NotificacaoCreateManyRemetenteInput[]
    skipDuplicates?: boolean
  }

  export type ChamadoUpsertWithWhereUniqueWithoutTecnicoInput = {
    where: ChamadoWhereUniqueInput
    update: XOR<ChamadoUpdateWithoutTecnicoInput, ChamadoUncheckedUpdateWithoutTecnicoInput>
    create: XOR<ChamadoCreateWithoutTecnicoInput, ChamadoUncheckedCreateWithoutTecnicoInput>
  }

  export type ChamadoUpdateWithWhereUniqueWithoutTecnicoInput = {
    where: ChamadoWhereUniqueInput
    data: XOR<ChamadoUpdateWithoutTecnicoInput, ChamadoUncheckedUpdateWithoutTecnicoInput>
  }

  export type ChamadoUpdateManyWithWhereWithoutTecnicoInput = {
    where: ChamadoScalarWhereInput
    data: XOR<ChamadoUpdateManyMutationInput, ChamadoUncheckedUpdateManyWithoutTecnicoInput>
  }

  export type ChamadoScalarWhereInput = {
    AND?: ChamadoScalarWhereInput | ChamadoScalarWhereInput[]
    OR?: ChamadoScalarWhereInput[]
    NOT?: ChamadoScalarWhereInput | ChamadoScalarWhereInput[]
    id?: IntFilter<"Chamado"> | number
    descricao?: StringFilter<"Chamado"> | string
    data?: DateTimeFilter<"Chamado"> | Date | string
    status?: StringFilter<"Chamado"> | string
    feedback?: StringFilter<"Chamado"> | string
    descResolucao?: StringFilter<"Chamado"> | string
    dataFechamento?: DateTimeFilter<"Chamado"> | Date | string
    tecnicoId?: IntFilter<"Chamado"> | number
    funcionarioId?: IntFilter<"Chamado"> | number
    maquinaId?: IntFilter<"Chamado"> | number
  }

  export type ChamadoUpsertWithWhereUniqueWithoutFuncionarioInput = {
    where: ChamadoWhereUniqueInput
    update: XOR<ChamadoUpdateWithoutFuncionarioInput, ChamadoUncheckedUpdateWithoutFuncionarioInput>
    create: XOR<ChamadoCreateWithoutFuncionarioInput, ChamadoUncheckedCreateWithoutFuncionarioInput>
  }

  export type ChamadoUpdateWithWhereUniqueWithoutFuncionarioInput = {
    where: ChamadoWhereUniqueInput
    data: XOR<ChamadoUpdateWithoutFuncionarioInput, ChamadoUncheckedUpdateWithoutFuncionarioInput>
  }

  export type ChamadoUpdateManyWithWhereWithoutFuncionarioInput = {
    where: ChamadoScalarWhereInput
    data: XOR<ChamadoUpdateManyMutationInput, ChamadoUncheckedUpdateManyWithoutFuncionarioInput>
  }

  export type NotificacaoUpsertWithWhereUniqueWithoutRemetenteInput = {
    where: NotificacaoWhereUniqueInput
    update: XOR<NotificacaoUpdateWithoutRemetenteInput, NotificacaoUncheckedUpdateWithoutRemetenteInput>
    create: XOR<NotificacaoCreateWithoutRemetenteInput, NotificacaoUncheckedCreateWithoutRemetenteInput>
  }

  export type NotificacaoUpdateWithWhereUniqueWithoutRemetenteInput = {
    where: NotificacaoWhereUniqueInput
    data: XOR<NotificacaoUpdateWithoutRemetenteInput, NotificacaoUncheckedUpdateWithoutRemetenteInput>
  }

  export type NotificacaoUpdateManyWithWhereWithoutRemetenteInput = {
    where: NotificacaoScalarWhereInput
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyWithoutRemetenteInput>
  }

  export type NotificacaoScalarWhereInput = {
    AND?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    OR?: NotificacaoScalarWhereInput[]
    NOT?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    id?: IntFilter<"Notificacao"> | number
    data?: DateTimeFilter<"Notificacao"> | Date | string
    remetenteId?: IntFilter<"Notificacao"> | number
    chamadoId?: IntFilter<"Notificacao"> | number
  }

  export type MaquinaCreateWithoutSetorInput = {
    descricao: string
    dataCompra: Date | string
    ferramentas?: FerramentaCreateNestedManyWithoutMaquinaInput
    chamados?: ChamadoCreateNestedManyWithoutMaquinaInput
  }

  export type MaquinaUncheckedCreateWithoutSetorInput = {
    id?: number
    descricao: string
    dataCompra: Date | string
    ferramentas?: FerramentaUncheckedCreateNestedManyWithoutMaquinaInput
    chamados?: ChamadoUncheckedCreateNestedManyWithoutMaquinaInput
  }

  export type MaquinaCreateOrConnectWithoutSetorInput = {
    where: MaquinaWhereUniqueInput
    create: XOR<MaquinaCreateWithoutSetorInput, MaquinaUncheckedCreateWithoutSetorInput>
  }

  export type MaquinaCreateManySetorInputEnvelope = {
    data: MaquinaCreateManySetorInput | MaquinaCreateManySetorInput[]
    skipDuplicates?: boolean
  }

  export type MaquinaUpsertWithWhereUniqueWithoutSetorInput = {
    where: MaquinaWhereUniqueInput
    update: XOR<MaquinaUpdateWithoutSetorInput, MaquinaUncheckedUpdateWithoutSetorInput>
    create: XOR<MaquinaCreateWithoutSetorInput, MaquinaUncheckedCreateWithoutSetorInput>
  }

  export type MaquinaUpdateWithWhereUniqueWithoutSetorInput = {
    where: MaquinaWhereUniqueInput
    data: XOR<MaquinaUpdateWithoutSetorInput, MaquinaUncheckedUpdateWithoutSetorInput>
  }

  export type MaquinaUpdateManyWithWhereWithoutSetorInput = {
    where: MaquinaScalarWhereInput
    data: XOR<MaquinaUpdateManyMutationInput, MaquinaUncheckedUpdateManyWithoutSetorInput>
  }

  export type MaquinaScalarWhereInput = {
    AND?: MaquinaScalarWhereInput | MaquinaScalarWhereInput[]
    OR?: MaquinaScalarWhereInput[]
    NOT?: MaquinaScalarWhereInput | MaquinaScalarWhereInput[]
    id?: IntFilter<"Maquina"> | number
    descricao?: StringFilter<"Maquina"> | string
    dataCompra?: DateTimeFilter<"Maquina"> | Date | string
    setorId?: IntFilter<"Maquina"> | number
  }

  export type SetorCreateWithoutMaquinasInput = {
    name: string
  }

  export type SetorUncheckedCreateWithoutMaquinasInput = {
    id?: number
    name: string
  }

  export type SetorCreateOrConnectWithoutMaquinasInput = {
    where: SetorWhereUniqueInput
    create: XOR<SetorCreateWithoutMaquinasInput, SetorUncheckedCreateWithoutMaquinasInput>
  }

  export type FerramentaCreateWithoutMaquinaInput = {
    descricao: string
    dataCompra: Date | string
  }

  export type FerramentaUncheckedCreateWithoutMaquinaInput = {
    id?: number
    descricao: string
    dataCompra: Date | string
  }

  export type FerramentaCreateOrConnectWithoutMaquinaInput = {
    where: FerramentaWhereUniqueInput
    create: XOR<FerramentaCreateWithoutMaquinaInput, FerramentaUncheckedCreateWithoutMaquinaInput>
  }

  export type FerramentaCreateManyMaquinaInputEnvelope = {
    data: FerramentaCreateManyMaquinaInput | FerramentaCreateManyMaquinaInput[]
    skipDuplicates?: boolean
  }

  export type ChamadoCreateWithoutMaquinaInput = {
    descricao: string
    data: Date | string
    status: string
    feedback: string
    descResolucao: string
    dataFechamento: Date | string
    tecnico: UserCreateNestedOneWithoutChamadosfuncionarioInput
    funcionario: UserCreateNestedOneWithoutChamadostecnicoInput
    notificacoes?: NotificacaoCreateNestedManyWithoutChamadoInput
  }

  export type ChamadoUncheckedCreateWithoutMaquinaInput = {
    id?: number
    descricao: string
    data: Date | string
    status: string
    feedback: string
    descResolucao: string
    dataFechamento: Date | string
    tecnicoId: number
    funcionarioId: number
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutChamadoInput
  }

  export type ChamadoCreateOrConnectWithoutMaquinaInput = {
    where: ChamadoWhereUniqueInput
    create: XOR<ChamadoCreateWithoutMaquinaInput, ChamadoUncheckedCreateWithoutMaquinaInput>
  }

  export type ChamadoCreateManyMaquinaInputEnvelope = {
    data: ChamadoCreateManyMaquinaInput | ChamadoCreateManyMaquinaInput[]
    skipDuplicates?: boolean
  }

  export type SetorUpsertWithoutMaquinasInput = {
    update: XOR<SetorUpdateWithoutMaquinasInput, SetorUncheckedUpdateWithoutMaquinasInput>
    create: XOR<SetorCreateWithoutMaquinasInput, SetorUncheckedCreateWithoutMaquinasInput>
    where?: SetorWhereInput
  }

  export type SetorUpdateToOneWithWhereWithoutMaquinasInput = {
    where?: SetorWhereInput
    data: XOR<SetorUpdateWithoutMaquinasInput, SetorUncheckedUpdateWithoutMaquinasInput>
  }

  export type SetorUpdateWithoutMaquinasInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SetorUncheckedUpdateWithoutMaquinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FerramentaUpsertWithWhereUniqueWithoutMaquinaInput = {
    where: FerramentaWhereUniqueInput
    update: XOR<FerramentaUpdateWithoutMaquinaInput, FerramentaUncheckedUpdateWithoutMaquinaInput>
    create: XOR<FerramentaCreateWithoutMaquinaInput, FerramentaUncheckedCreateWithoutMaquinaInput>
  }

  export type FerramentaUpdateWithWhereUniqueWithoutMaquinaInput = {
    where: FerramentaWhereUniqueInput
    data: XOR<FerramentaUpdateWithoutMaquinaInput, FerramentaUncheckedUpdateWithoutMaquinaInput>
  }

  export type FerramentaUpdateManyWithWhereWithoutMaquinaInput = {
    where: FerramentaScalarWhereInput
    data: XOR<FerramentaUpdateManyMutationInput, FerramentaUncheckedUpdateManyWithoutMaquinaInput>
  }

  export type FerramentaScalarWhereInput = {
    AND?: FerramentaScalarWhereInput | FerramentaScalarWhereInput[]
    OR?: FerramentaScalarWhereInput[]
    NOT?: FerramentaScalarWhereInput | FerramentaScalarWhereInput[]
    id?: IntFilter<"Ferramenta"> | number
    descricao?: StringFilter<"Ferramenta"> | string
    dataCompra?: DateTimeFilter<"Ferramenta"> | Date | string
    maquinaId?: IntFilter<"Ferramenta"> | number
  }

  export type ChamadoUpsertWithWhereUniqueWithoutMaquinaInput = {
    where: ChamadoWhereUniqueInput
    update: XOR<ChamadoUpdateWithoutMaquinaInput, ChamadoUncheckedUpdateWithoutMaquinaInput>
    create: XOR<ChamadoCreateWithoutMaquinaInput, ChamadoUncheckedCreateWithoutMaquinaInput>
  }

  export type ChamadoUpdateWithWhereUniqueWithoutMaquinaInput = {
    where: ChamadoWhereUniqueInput
    data: XOR<ChamadoUpdateWithoutMaquinaInput, ChamadoUncheckedUpdateWithoutMaquinaInput>
  }

  export type ChamadoUpdateManyWithWhereWithoutMaquinaInput = {
    where: ChamadoScalarWhereInput
    data: XOR<ChamadoUpdateManyMutationInput, ChamadoUncheckedUpdateManyWithoutMaquinaInput>
  }

  export type MaquinaCreateWithoutFerramentasInput = {
    descricao: string
    dataCompra: Date | string
    setor: SetorCreateNestedOneWithoutMaquinasInput
    chamados?: ChamadoCreateNestedManyWithoutMaquinaInput
  }

  export type MaquinaUncheckedCreateWithoutFerramentasInput = {
    id?: number
    descricao: string
    dataCompra: Date | string
    setorId: number
    chamados?: ChamadoUncheckedCreateNestedManyWithoutMaquinaInput
  }

  export type MaquinaCreateOrConnectWithoutFerramentasInput = {
    where: MaquinaWhereUniqueInput
    create: XOR<MaquinaCreateWithoutFerramentasInput, MaquinaUncheckedCreateWithoutFerramentasInput>
  }

  export type MaquinaUpsertWithoutFerramentasInput = {
    update: XOR<MaquinaUpdateWithoutFerramentasInput, MaquinaUncheckedUpdateWithoutFerramentasInput>
    create: XOR<MaquinaCreateWithoutFerramentasInput, MaquinaUncheckedCreateWithoutFerramentasInput>
    where?: MaquinaWhereInput
  }

  export type MaquinaUpdateToOneWithWhereWithoutFerramentasInput = {
    where?: MaquinaWhereInput
    data: XOR<MaquinaUpdateWithoutFerramentasInput, MaquinaUncheckedUpdateWithoutFerramentasInput>
  }

  export type MaquinaUpdateWithoutFerramentasInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    setor?: SetorUpdateOneRequiredWithoutMaquinasNestedInput
    chamados?: ChamadoUpdateManyWithoutMaquinaNestedInput
  }

  export type MaquinaUncheckedUpdateWithoutFerramentasInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    setorId?: IntFieldUpdateOperationsInput | number
    chamados?: ChamadoUncheckedUpdateManyWithoutMaquinaNestedInput
  }

  export type UserCreateWithoutChamadosfuncionarioInput = {
    name: string
    funcao: string
    chamadostecnico?: ChamadoCreateNestedManyWithoutFuncionarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutRemetenteInput
  }

  export type UserUncheckedCreateWithoutChamadosfuncionarioInput = {
    id?: number
    name: string
    funcao: string
    chamadostecnico?: ChamadoUncheckedCreateNestedManyWithoutFuncionarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutRemetenteInput
  }

  export type UserCreateOrConnectWithoutChamadosfuncionarioInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChamadosfuncionarioInput, UserUncheckedCreateWithoutChamadosfuncionarioInput>
  }

  export type UserCreateWithoutChamadostecnicoInput = {
    name: string
    funcao: string
    chamadosfuncionario?: ChamadoCreateNestedManyWithoutTecnicoInput
    notificacoes?: NotificacaoCreateNestedManyWithoutRemetenteInput
  }

  export type UserUncheckedCreateWithoutChamadostecnicoInput = {
    id?: number
    name: string
    funcao: string
    chamadosfuncionario?: ChamadoUncheckedCreateNestedManyWithoutTecnicoInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutRemetenteInput
  }

  export type UserCreateOrConnectWithoutChamadostecnicoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChamadostecnicoInput, UserUncheckedCreateWithoutChamadostecnicoInput>
  }

  export type MaquinaCreateWithoutChamadosInput = {
    descricao: string
    dataCompra: Date | string
    setor: SetorCreateNestedOneWithoutMaquinasInput
    ferramentas?: FerramentaCreateNestedManyWithoutMaquinaInput
  }

  export type MaquinaUncheckedCreateWithoutChamadosInput = {
    id?: number
    descricao: string
    dataCompra: Date | string
    setorId: number
    ferramentas?: FerramentaUncheckedCreateNestedManyWithoutMaquinaInput
  }

  export type MaquinaCreateOrConnectWithoutChamadosInput = {
    where: MaquinaWhereUniqueInput
    create: XOR<MaquinaCreateWithoutChamadosInput, MaquinaUncheckedCreateWithoutChamadosInput>
  }

  export type NotificacaoCreateWithoutChamadoInput = {
    data: Date | string
    remetente: UserCreateNestedOneWithoutNotificacoesInput
  }

  export type NotificacaoUncheckedCreateWithoutChamadoInput = {
    id?: number
    data: Date | string
    remetenteId: number
  }

  export type NotificacaoCreateOrConnectWithoutChamadoInput = {
    where: NotificacaoWhereUniqueInput
    create: XOR<NotificacaoCreateWithoutChamadoInput, NotificacaoUncheckedCreateWithoutChamadoInput>
  }

  export type NotificacaoCreateManyChamadoInputEnvelope = {
    data: NotificacaoCreateManyChamadoInput | NotificacaoCreateManyChamadoInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChamadosfuncionarioInput = {
    update: XOR<UserUpdateWithoutChamadosfuncionarioInput, UserUncheckedUpdateWithoutChamadosfuncionarioInput>
    create: XOR<UserCreateWithoutChamadosfuncionarioInput, UserUncheckedCreateWithoutChamadosfuncionarioInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChamadosfuncionarioInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChamadosfuncionarioInput, UserUncheckedUpdateWithoutChamadosfuncionarioInput>
  }

  export type UserUpdateWithoutChamadosfuncionarioInput = {
    name?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    chamadostecnico?: ChamadoUpdateManyWithoutFuncionarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutRemetenteNestedInput
  }

  export type UserUncheckedUpdateWithoutChamadosfuncionarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    chamadostecnico?: ChamadoUncheckedUpdateManyWithoutFuncionarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutRemetenteNestedInput
  }

  export type UserUpsertWithoutChamadostecnicoInput = {
    update: XOR<UserUpdateWithoutChamadostecnicoInput, UserUncheckedUpdateWithoutChamadostecnicoInput>
    create: XOR<UserCreateWithoutChamadostecnicoInput, UserUncheckedCreateWithoutChamadostecnicoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChamadostecnicoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChamadostecnicoInput, UserUncheckedUpdateWithoutChamadostecnicoInput>
  }

  export type UserUpdateWithoutChamadostecnicoInput = {
    name?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    chamadosfuncionario?: ChamadoUpdateManyWithoutTecnicoNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutRemetenteNestedInput
  }

  export type UserUncheckedUpdateWithoutChamadostecnicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    chamadosfuncionario?: ChamadoUncheckedUpdateManyWithoutTecnicoNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutRemetenteNestedInput
  }

  export type MaquinaUpsertWithoutChamadosInput = {
    update: XOR<MaquinaUpdateWithoutChamadosInput, MaquinaUncheckedUpdateWithoutChamadosInput>
    create: XOR<MaquinaCreateWithoutChamadosInput, MaquinaUncheckedCreateWithoutChamadosInput>
    where?: MaquinaWhereInput
  }

  export type MaquinaUpdateToOneWithWhereWithoutChamadosInput = {
    where?: MaquinaWhereInput
    data: XOR<MaquinaUpdateWithoutChamadosInput, MaquinaUncheckedUpdateWithoutChamadosInput>
  }

  export type MaquinaUpdateWithoutChamadosInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    setor?: SetorUpdateOneRequiredWithoutMaquinasNestedInput
    ferramentas?: FerramentaUpdateManyWithoutMaquinaNestedInput
  }

  export type MaquinaUncheckedUpdateWithoutChamadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    setorId?: IntFieldUpdateOperationsInput | number
    ferramentas?: FerramentaUncheckedUpdateManyWithoutMaquinaNestedInput
  }

  export type NotificacaoUpsertWithWhereUniqueWithoutChamadoInput = {
    where: NotificacaoWhereUniqueInput
    update: XOR<NotificacaoUpdateWithoutChamadoInput, NotificacaoUncheckedUpdateWithoutChamadoInput>
    create: XOR<NotificacaoCreateWithoutChamadoInput, NotificacaoUncheckedCreateWithoutChamadoInput>
  }

  export type NotificacaoUpdateWithWhereUniqueWithoutChamadoInput = {
    where: NotificacaoWhereUniqueInput
    data: XOR<NotificacaoUpdateWithoutChamadoInput, NotificacaoUncheckedUpdateWithoutChamadoInput>
  }

  export type NotificacaoUpdateManyWithWhereWithoutChamadoInput = {
    where: NotificacaoScalarWhereInput
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyWithoutChamadoInput>
  }

  export type UserCreateWithoutNotificacoesInput = {
    name: string
    funcao: string
    chamadosfuncionario?: ChamadoCreateNestedManyWithoutTecnicoInput
    chamadostecnico?: ChamadoCreateNestedManyWithoutFuncionarioInput
  }

  export type UserUncheckedCreateWithoutNotificacoesInput = {
    id?: number
    name: string
    funcao: string
    chamadosfuncionario?: ChamadoUncheckedCreateNestedManyWithoutTecnicoInput
    chamadostecnico?: ChamadoUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type UserCreateOrConnectWithoutNotificacoesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificacoesInput, UserUncheckedCreateWithoutNotificacoesInput>
  }

  export type ChamadoCreateWithoutNotificacoesInput = {
    descricao: string
    data: Date | string
    status: string
    feedback: string
    descResolucao: string
    dataFechamento: Date | string
    tecnico: UserCreateNestedOneWithoutChamadosfuncionarioInput
    funcionario: UserCreateNestedOneWithoutChamadostecnicoInput
    maquina: MaquinaCreateNestedOneWithoutChamadosInput
  }

  export type ChamadoUncheckedCreateWithoutNotificacoesInput = {
    id?: number
    descricao: string
    data: Date | string
    status: string
    feedback: string
    descResolucao: string
    dataFechamento: Date | string
    tecnicoId: number
    funcionarioId: number
    maquinaId: number
  }

  export type ChamadoCreateOrConnectWithoutNotificacoesInput = {
    where: ChamadoWhereUniqueInput
    create: XOR<ChamadoCreateWithoutNotificacoesInput, ChamadoUncheckedCreateWithoutNotificacoesInput>
  }

  export type UserUpsertWithoutNotificacoesInput = {
    update: XOR<UserUpdateWithoutNotificacoesInput, UserUncheckedUpdateWithoutNotificacoesInput>
    create: XOR<UserCreateWithoutNotificacoesInput, UserUncheckedCreateWithoutNotificacoesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificacoesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificacoesInput, UserUncheckedUpdateWithoutNotificacoesInput>
  }

  export type UserUpdateWithoutNotificacoesInput = {
    name?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    chamadosfuncionario?: ChamadoUpdateManyWithoutTecnicoNestedInput
    chamadostecnico?: ChamadoUpdateManyWithoutFuncionarioNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    chamadosfuncionario?: ChamadoUncheckedUpdateManyWithoutTecnicoNestedInput
    chamadostecnico?: ChamadoUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type ChamadoUpsertWithoutNotificacoesInput = {
    update: XOR<ChamadoUpdateWithoutNotificacoesInput, ChamadoUncheckedUpdateWithoutNotificacoesInput>
    create: XOR<ChamadoCreateWithoutNotificacoesInput, ChamadoUncheckedCreateWithoutNotificacoesInput>
    where?: ChamadoWhereInput
  }

  export type ChamadoUpdateToOneWithWhereWithoutNotificacoesInput = {
    where?: ChamadoWhereInput
    data: XOR<ChamadoUpdateWithoutNotificacoesInput, ChamadoUncheckedUpdateWithoutNotificacoesInput>
  }

  export type ChamadoUpdateWithoutNotificacoesInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    descResolucao?: StringFieldUpdateOperationsInput | string
    dataFechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnico?: UserUpdateOneRequiredWithoutChamadosfuncionarioNestedInput
    funcionario?: UserUpdateOneRequiredWithoutChamadostecnicoNestedInput
    maquina?: MaquinaUpdateOneRequiredWithoutChamadosNestedInput
  }

  export type ChamadoUncheckedUpdateWithoutNotificacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    descResolucao?: StringFieldUpdateOperationsInput | string
    dataFechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnicoId?: IntFieldUpdateOperationsInput | number
    funcionarioId?: IntFieldUpdateOperationsInput | number
    maquinaId?: IntFieldUpdateOperationsInput | number
  }

  export type ChamadoCreateManyTecnicoInput = {
    id?: number
    descricao: string
    data: Date | string
    status: string
    feedback: string
    descResolucao: string
    dataFechamento: Date | string
    funcionarioId: number
    maquinaId: number
  }

  export type ChamadoCreateManyFuncionarioInput = {
    id?: number
    descricao: string
    data: Date | string
    status: string
    feedback: string
    descResolucao: string
    dataFechamento: Date | string
    tecnicoId: number
    maquinaId: number
  }

  export type NotificacaoCreateManyRemetenteInput = {
    id?: number
    data: Date | string
    chamadoId: number
  }

  export type ChamadoUpdateWithoutTecnicoInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    descResolucao?: StringFieldUpdateOperationsInput | string
    dataFechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionario?: UserUpdateOneRequiredWithoutChamadostecnicoNestedInput
    maquina?: MaquinaUpdateOneRequiredWithoutChamadosNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutChamadoNestedInput
  }

  export type ChamadoUncheckedUpdateWithoutTecnicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    descResolucao?: StringFieldUpdateOperationsInput | string
    dataFechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionarioId?: IntFieldUpdateOperationsInput | number
    maquinaId?: IntFieldUpdateOperationsInput | number
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutChamadoNestedInput
  }

  export type ChamadoUncheckedUpdateManyWithoutTecnicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    descResolucao?: StringFieldUpdateOperationsInput | string
    dataFechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionarioId?: IntFieldUpdateOperationsInput | number
    maquinaId?: IntFieldUpdateOperationsInput | number
  }

  export type ChamadoUpdateWithoutFuncionarioInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    descResolucao?: StringFieldUpdateOperationsInput | string
    dataFechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnico?: UserUpdateOneRequiredWithoutChamadosfuncionarioNestedInput
    maquina?: MaquinaUpdateOneRequiredWithoutChamadosNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutChamadoNestedInput
  }

  export type ChamadoUncheckedUpdateWithoutFuncionarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    descResolucao?: StringFieldUpdateOperationsInput | string
    dataFechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnicoId?: IntFieldUpdateOperationsInput | number
    maquinaId?: IntFieldUpdateOperationsInput | number
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutChamadoNestedInput
  }

  export type ChamadoUncheckedUpdateManyWithoutFuncionarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    descResolucao?: StringFieldUpdateOperationsInput | string
    dataFechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnicoId?: IntFieldUpdateOperationsInput | number
    maquinaId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificacaoUpdateWithoutRemetenteInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    chamado?: ChamadoUpdateOneRequiredWithoutNotificacoesNestedInput
  }

  export type NotificacaoUncheckedUpdateWithoutRemetenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    chamadoId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificacaoUncheckedUpdateManyWithoutRemetenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    chamadoId?: IntFieldUpdateOperationsInput | number
  }

  export type MaquinaCreateManySetorInput = {
    id?: number
    descricao: string
    dataCompra: Date | string
  }

  export type MaquinaUpdateWithoutSetorInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    ferramentas?: FerramentaUpdateManyWithoutMaquinaNestedInput
    chamados?: ChamadoUpdateManyWithoutMaquinaNestedInput
  }

  export type MaquinaUncheckedUpdateWithoutSetorInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    ferramentas?: FerramentaUncheckedUpdateManyWithoutMaquinaNestedInput
    chamados?: ChamadoUncheckedUpdateManyWithoutMaquinaNestedInput
  }

  export type MaquinaUncheckedUpdateManyWithoutSetorInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FerramentaCreateManyMaquinaInput = {
    id?: number
    descricao: string
    dataCompra: Date | string
  }

  export type ChamadoCreateManyMaquinaInput = {
    id?: number
    descricao: string
    data: Date | string
    status: string
    feedback: string
    descResolucao: string
    dataFechamento: Date | string
    tecnicoId: number
    funcionarioId: number
  }

  export type FerramentaUpdateWithoutMaquinaInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FerramentaUncheckedUpdateWithoutMaquinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FerramentaUncheckedUpdateManyWithoutMaquinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChamadoUpdateWithoutMaquinaInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    descResolucao?: StringFieldUpdateOperationsInput | string
    dataFechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnico?: UserUpdateOneRequiredWithoutChamadosfuncionarioNestedInput
    funcionario?: UserUpdateOneRequiredWithoutChamadostecnicoNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutChamadoNestedInput
  }

  export type ChamadoUncheckedUpdateWithoutMaquinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    descResolucao?: StringFieldUpdateOperationsInput | string
    dataFechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnicoId?: IntFieldUpdateOperationsInput | number
    funcionarioId?: IntFieldUpdateOperationsInput | number
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutChamadoNestedInput
  }

  export type ChamadoUncheckedUpdateManyWithoutMaquinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    descResolucao?: StringFieldUpdateOperationsInput | string
    dataFechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnicoId?: IntFieldUpdateOperationsInput | number
    funcionarioId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificacaoCreateManyChamadoInput = {
    id?: number
    data: Date | string
    remetenteId: number
  }

  export type NotificacaoUpdateWithoutChamadoInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    remetente?: UserUpdateOneRequiredWithoutNotificacoesNestedInput
  }

  export type NotificacaoUncheckedUpdateWithoutChamadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    remetenteId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificacaoUncheckedUpdateManyWithoutChamadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    remetenteId?: IntFieldUpdateOperationsInput | number
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