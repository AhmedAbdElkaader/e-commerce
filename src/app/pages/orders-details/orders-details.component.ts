import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriService } from 'src/app/services/categori.service';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.css']
})
export class OrdersDetailsComponent implements OnInit {

  order_id:any
  product_arr :any
  clientName : any
  constructor(private route : ActivatedRoute , private rest :CategoriService){}

  ngOnInit(){
    this.order_id = this.route.snapshot.paramMap.get('id')
    this.getData()
  }

  getData(){
    this.rest.orderDetails(this.order_id).subscribe((res :any) => {
      console.log(res)
      this.clientName = res.client.email
      this.product_arr = res.OrdersProducts
      console.log( this.product_arr)
    })
  }

  
}
