import { IProduct } from "../../types";

export class Cart {
  productCart: IProduct[] | null = null;

  constructor() {}

  getProductCart(): IProduct[] | null {
    return this.productCart;
  }

  setProductCart(product: IProduct): void {
    if (this.productCart) {
      this.productCart.push(product);
    } else {
      this.productCart = [product];
    }
  }

  delProductCart(product: IProduct): void {
    if (this.productCart) {
      this.productCart = this.productCart.filter(
        (item) => item.id !== product.id,
      );
    }
  }

  clearCart(): void {
    this.productCart = null;
  }

  getTotalPrice(): number {
    if (this.productCart) {
      return this.productCart.reduce((total, product) => {
        if (product.price) {
          total = total + product.price;
        }
        return total;
      }, 0);
    }
    return 0;
  }

  getCountProduct(): number {
    if (this.productCart) {
      return this.productCart.length;
    }
    return 0;
  }

  checkProductCartById(id: string): boolean {
    if (this.productCart) {
      return this.productCart.some((product) => product.id === id);
    }
    return false;
  }
}
