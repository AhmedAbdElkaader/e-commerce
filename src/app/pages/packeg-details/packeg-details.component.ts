import { Component, OnInit } from '@angular/core';
import { CategoriService } from 'src/app/services/categori.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-packeg-details',
  templateUrl: './packeg-details.component.html',
  styleUrls: ['./packeg-details.component.css']
})
export class PackegDetailsComponent implements OnInit {

  constructor(private rest : CategoriService ,private route : ActivatedRoute ,
    private routing :Router,
    private _sanitizer: DomSanitizer,){}

   packId :any
   packName : any
   packImage:any
   pack_discount:any
   totalPrice :any
   products:any = []
   showProduct = true
   product_arr:any = []
  ngOnInit(){
    this.packId = this.route.snapshot.paramMap.get('id')
   this.getData()
  }

  getData(){
    this.rest.showSpiner()
    this.rest.packDetails(this.packId).subscribe((res :any) => {
      console.log(res)
      this.packName = res.name
      this.packImage = res.image
      this.pack_discount = res.discount
      this.totalPrice = res.total_price
      this.packImage = this._sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,`+ this.packImage);

      res.ProductPackages.forEach((element :any) => {
        element.products.image[0] = this._sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,`+ element.products.image[0] );
      });

      this.product_arr = res.ProductPackages
      if(this.product_arr.length != 0){
        this.showProduct= true
      }else {
        this.showProduct= false
      }
      this.rest.hideSpiner()
    })
  }

  // editCat(){
  //   this.rest.showSpiner()
  //   this.cat_id =+ this.cat_id
  //   let obj = {
  //     id:this.cat_id,
  //     name : this.cat_name
  //   }
  //    this.rest.editCat(obj).subscribe((res :any) => {
  //     this.rest.hideSpiner()
  //     this.getData()
  //      console.log(res)
  //    })
  // }

  delet_pack(){
    this.rest.showSpiner()
    this.rest.deletPack(this.packId).then(response => response.text())
    .then(result => {
      this.rest.hideSpiner()
      console.log(result)
      this.routing.navigate(['main/packges'])
    })
    .catch(error => console.log('error', error));  
  }

  // addProduct (){
  //   let obj = this.productForm.value
  //   obj.category_id = this.cat_id
  //   this.rest.addProduct(obj).subscribe((res :any) => {
  //     console.log(res)
  //     this.product_id = res
  //     this.showUpload = true

  //   })
  // }


}


