import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product} from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService : ProductService) { }
  public $products : Observable<Product[]> = of([]) ; 
  ngOnInit(): void {
    this.$products= this.productService.getProducts();
}
  }

