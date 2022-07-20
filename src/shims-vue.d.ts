declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare interface Fn<T = unknown, R = T> {
  (...arg: T[]): R;
}

declare module '*.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
