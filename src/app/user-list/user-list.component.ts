import { Component } from '@angular/core';
import { ApiService, IProduct } from '../api.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  constructor(public api: ApiService, ) {
   // this.getUser();
   }

  product:any;

  // public getUser(){
  //   this.api.getProduct().pipe(first()).subscribe(
  //     (resp)=>{
  //         this.product=resp;
  //     },err=>{

  //     }
  //   )
  // }

  addToCart(product: any){}
}
