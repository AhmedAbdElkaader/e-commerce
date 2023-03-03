import { Component, OnInit } from '@angular/core';
import { CategoriService } from 'src/app/services/categori.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packegs',
  templateUrl: './packegs.component.html',
  styleUrls: ['./packegs.component.css']
})
export class PackegsComponent implements OnInit {

  cat_arr : any
  ifProd = false
  prod_arr :any
  status_prod = false
  arr_of_pord_packeges:any = []
  prodName:any
  catName : any
  Quantity:any
  prodID:any
  arr_choise_prod:any = []
  discount:any
  allpackeges :any = []
  pack_name:any
  dataFound = false
  image_file :any
  packId:any
  packImageStatus = true
  constructor(private rest : CategoriService , private route : Router){}

  ngOnInit(){
    this.getdata()
    this.getpackges()
  }

  getpackges(){
    
    this.rest.getPackges().subscribe((res :any) => {
      console.log(res)
      if(res.length != 0){
        this.allpackeges = res
        this.dataFound = true
      }else {
        this.dataFound = false
      }
    })
  }

  getdata(){
    this.rest.listCatOnly().subscribe((res :any) => {
      console.log(res)
      this.cat_arr = res
      this.rest.hideSpiner()
    })
  }

  getCatId(item:any){
    this.catName = item.name
    this.status_prod = false
    this.rest.cat_full_details(item.id).subscribe((res : any) => {
      console.log(res)
      this.status_prod = true
      if(res.products.length != 0 ){
        this.ifProd = true
        this.prod_arr = res.products
      }else {
        this.ifProd = false
      }
    })
  }

  choseProd(item:any){
    this.prodID = item.id
    this.prodName = item.name
  }

  add(){
    this.arr_choise_prod.push(this.prodName)
    this.arr_of_pord_packeges.push({
      "id": this.prodID ,
      "quantity": this.Quantity
    })
    console.log(this.arr_of_pord_packeges)
    this.ifProd = false
    this.status_prod = false
    this.catName = ""
    this.prodName = ""
    this.Quantity = ''
  }

  save(){
    this.rest.showSpiner()
    this.discount =+ this.discount
    let obj = {
      discount : this.discount,
      name : this.pack_name,
      products : this.arr_of_pord_packeges
    }
    console.log(obj)
    this.rest.addPack(obj).subscribe((res :any) => {
      console.log(res)
      this.rest.hideSpiner()
      this.packId = res
      this.packImageStatus = false
    },(err : any) => {
      this.rest.hideSpiner()
    })
  }

  uploadFile(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
    }
    this.image_file = e.target.files[0]
  }

  addPackImage(){
    this.rest.showSpiner()
    this.rest.ulpoad_pack_image(this.packId,this.image_file)
      .then((response: any) => response.text())
      .then((result: any) => {
        this.getdata()
        this.rest.succesToast("Packge Added Successfuly")
        this.rest.hideSpiner()
        console.log(result)
      })
      .catch((error: any) => {
        this.rest.hideSpiner()
        this.rest.erorrToaster("something wrong happened please reload page")
      });
  }

  packDetails(id:any){
    this.route.navigate(['main/packges_details',id])
  }
}
