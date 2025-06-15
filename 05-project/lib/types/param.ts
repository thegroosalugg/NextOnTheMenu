export type Param<T extends string> = Promise<{ [K in T]: string }>;
