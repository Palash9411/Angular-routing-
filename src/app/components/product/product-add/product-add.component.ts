import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  $product:Observable<Object | undefined >  = of({}) ;; ;
 
  constructor(private productService: ProductService, 
              private route:ActivatedRoute ){
  }

  ngOnInit(): void {
  }

}
