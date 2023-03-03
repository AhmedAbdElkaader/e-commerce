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
  showMasge = false
  constructor(private rest : CategoriService , private route : Router){}

  ngOnInit(){
    this.allClients()

  }

  allClients(){
    this.rest.getAllCleints().subscribe((res:any)=>{
      console.log(res)
      if(res.length == 0){
        this.showMasge = true
      }else {
        this.showMasge = false
        this.allClientsArr = res
      }
    })
  }

  cleintDetails(id:any){
    this.route.navigate(['main/client_details',id])
  }
}
