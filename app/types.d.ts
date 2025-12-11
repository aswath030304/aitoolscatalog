declare module "next" {
  export interface PageProps<T = any> {
    params: T;
  }
}
