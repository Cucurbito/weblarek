import { IProduct } from "../../types/index.ts";

export class Catalog {
  private product: IProduct[] = [];
  private selectedProduct: IProduct | null = null;

  constructor() {}

  getProduct(): IProduct[] {
    return this.product;
  }

  setProduct(product: IProduct[]): void {
    this.product = product;
  }

  getSelectedProduct(): IProduct | null {
    return this.selectedProduct;
  }

  setSelectedProduct(selectedProduct: IProduct): void {
    this.selectedProduct = selectedProduct;
  }

  getProductById(id: string): IProduct | undefined {
    return this.product.find((product) => product.id === id);
  }
}
