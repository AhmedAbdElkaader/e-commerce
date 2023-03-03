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
  showMasge = true
  constructor(private rest : CategoriService , private route : Router){}

  ngOnInit(){
    this.rest.showSpiner()
    this.getData()
  }

  getData(){
    this.rest.getOrders().subscribe((res :any) => {
      this.rest.hideSpiner()
      console.log(res)
      if(res.length == 0){
        this.showMasge =  true
      }else {
        this.showMasge =  false
        this.order_arr = res
      }
    },(err:any) => {
      
      this.rest.hideSpiner()
    })
  }

  orderDetails(id:any){
    this.route.navigate(['main/order_details',id])
  }



}
