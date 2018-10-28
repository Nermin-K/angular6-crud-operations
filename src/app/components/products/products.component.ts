import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { Product } from '../../product';
import { PRODUCTS } from '../../mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: Product;
  products: Array<Product>;

  constructor() {
    this.products = PRODUCTS;
  }

  ngOnInit() {  }

  deleteConfirmation(): boolean {
    if (confirm("Confirm deleting this product")) {
      return true;
    } else {
      return false;
    }
  }

  removeProduct(product): void {
    var confirm = this.deleteConfirmation();
    if (confirm) {
      let index = this.products.indexOf(product);
      this.products.splice(index, 1);
    }
  }

  editProduct(): void{
    $(".edit-form").css("display", "block");
  }

  saveChanges(p: Product): void {
    $(".edit-form").css("display", "none");
    this.product = p;
  }

}
