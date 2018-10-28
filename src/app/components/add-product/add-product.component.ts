import { Component, OnInit, Input } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../../product';
import { PRODUCTS } from '../../mock-products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  products: Array<Product>;
  selectedImg = null;

  constructor(private router: Router, private http: HttpClient) { 
    this.products = PRODUCTS;
  }

  ngOnInit() {
  }
  
  addProduct(name, sku, category, price, date): void{
    let image = this.selectedImg;
    let productItem = new Product(name, image, sku, category, price, date);
    this.products.push(productItem);
    this.router.navigateByUrl('/');
  }

  onFileSelected(event){
    this.selectedImg = event.target.files[0];
    console.log(event);
  }
}
