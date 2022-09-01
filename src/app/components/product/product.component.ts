import { Component, OnInit } from '@angular/core';
import { Product} from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  public products : Product[] = []; 
  ngOnInit(): void {
  }

}
