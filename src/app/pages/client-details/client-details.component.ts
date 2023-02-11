import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriService } from 'src/app/services/categori.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  clientId :any
  clientObj = {
    address : "" ,
    city : "",
    email : "",
    first_name : "",
    governorate : "",
    last_name : "",
    username : "",
    phone_number : ""
  }
  order_arr:any
  constructor(private route : ActivatedRoute ,
    private routeing : Router,
    private rest : CategoriService){}

  ngOnInit(){
    this.clientId = this.route.snapshot.paramMap.get('id')
    this.getData()
    
  }

  getData(){
    this.rest.clientDetails(this.clientId).subscribe((res :any) => {
      console.log(res)
      this.clientObj = res
      this.order_arr = res.orders
    })
  }

  orderDetails(id:any){
    this.routeing.navigate(['main/order_details',id])
  }

  

}
