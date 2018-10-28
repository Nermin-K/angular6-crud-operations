export class Product {
  name: string;
  image: string;
  sku: string;
  category: string;
  price: number;
  date: Date

  constructor(name, image, sku, category, price, date) {
    this.name = name;
    this.image = image;
    this.sku = sku;
    this.category = category;
    this.price = price;
    this.date = date;
  }

}
