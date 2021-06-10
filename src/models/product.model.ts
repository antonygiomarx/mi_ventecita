export class Product {
  constructor(
    public id: string,
    public name: string,
    public price: string,
    public description: string,
    public category: string,
    public companyId: string,
    public quantity: string,
    public imageUrl: string,
    public provider: string,
  ) {}
}
