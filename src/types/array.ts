export type TypeofArray<T> = T extends (infer U)[] ? U : T;
