import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private productService: ProductService, 
    private route:ActivatedRoute) { }
   
    $product:Observable<Object | undefined >  = of({}) ;;
  
  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
 
   this.$product = this.productService.getProduct(id) ;
  }
}
