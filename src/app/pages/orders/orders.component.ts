import { Component, OnInit } from '@angular/core';
import { CategoriService } from 'src/app/services/categori.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  order_arr : any
  constructor(private rest : CategoriService , private route : Router){}

  ngOnInit(){
    this.getData()
  }

  getData(){
    this.rest.getOrders().subscribe((res :any) => {
      console.log(res)
      this.order_arr = res
    })
  }

  orderDetails(id:any){
    this.route.navigate(['main/order_details',id])
  }



}
