import { IBuyer, TPayment, TCheckError } from "../../types/index.ts";

export class Buyer {
  private payment: TPayment | null = null;
  private address: string = "";
  private email: string = "";
  private phone: string = "";

  constructor() {}

  getDataBuyer(): IBuyer {
    return {
      payment: this.payment,
      address: this.address,
      email: this.email,
      phone: this.phone,
    };
  }

  clearDataBuyer(): void {
    this.payment = null;
    this.address = "";
    this.email = "";
    this.phone = "";
  }

  setDataBuyer(dataBuyer: {
    payment?: TPayment;
    address?: string;
    email?: string;
    phone?: string;
  }): void {
    if (dataBuyer.payment !== undefined) {
      this.payment = dataBuyer.payment;
    }
    if (dataBuyer.address !== undefined) {
      this.address = dataBuyer.address;
    }
    if (dataBuyer.email !== undefined) {
      this.email = dataBuyer.email;
    }
    if (dataBuyer.phone !== undefined) {
      this.phone = dataBuyer.phone;
    }
  }

  checkDataBuyer(): TCheckError {
    const errors: TCheckError = {};

    if (!this.payment) {
      errors.payment = "Не выбран вид оплаты";
    }

    if (!this.email || this.email.trim().length === 0) {
      errors.email = "Укажите емэйл";
    }

    if (!this.phone || this.phone.trim().length === 0) {
      errors.phone = "Укажите номер телефона";
    }

    if (!this.address || this.address.trim().length === 0) {
      errors.address = "Укажите адрес";
    }

    return errors;
  }
}
