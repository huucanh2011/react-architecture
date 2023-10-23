export type Maybe<T> = T | null | undefined;

export type Nullable<T> = T | null;

export type DerivedFunction<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  BaseFunction extends (...args: any[]) => unknown,
  T extends unknown[] = unknown[],
> = BaseFunction extends (...a: infer U) => infer R
  ? (...a: [...U, ...T]) => R
  : never;
