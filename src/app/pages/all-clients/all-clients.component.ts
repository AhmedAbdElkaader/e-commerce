import { Component, OnInit } from '@angular/core';
import { CategoriService } from 'src/app/services/categori.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrls: ['./all-clients.component.css']
})
export class AllClientsComponent implements OnInit {

  allClientsArr:any
  constructor(private rest : CategoriService , private route : Router){}

  ngOnInit(){
    this.allClients()

  }

  allClients(){
    this.rest.getAllCleints().subscribe((res:any)=>{
      console.log(res)
      this.allClientsArr = res
    })
  }

  cleintDetails(id:any){
    this.route.navigate(['main/client_details',id])
  }
}
