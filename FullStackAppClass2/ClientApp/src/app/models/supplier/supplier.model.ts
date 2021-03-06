import { Product } from '../product/product.model';

export class Supplier {
  constructor(
    public id?: number,
    public name?: string,
    public city?: string,
    public state?: string,
    public products?: Product[]) { }
}
