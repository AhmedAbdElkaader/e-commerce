import { Component, OnInit } from '@angular/core';
import { CategoriService } from 'src/app/services/categori.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {
  productId:any
  prodcutImageArr :any
  prodObj:any = {
    description : "",
    name :"",
    price:"",
    quantity : "",
    images : ""
  }
  product_obj:any
  productForm: FormGroup | any;
  constructor(private rest : CategoriService ,
    private _sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
     private route : ActivatedRoute,
     private routing : Router ){}

  ngOnInit(){
    this.productId = this.route.snapshot.paramMap.get('id')
    this.getData()
    this.productForm = this.formBuilder.group({
      name: ['' , Validators.required],
      price: ['' , Validators.required],
      description: ['' , Validators.required],
      quantity: ['' , Validators.required],
    });
  }

  getData(){
    this.rest.getProduct(this.productId).subscribe((res :any) => {
      console.log(res)
      this.prodObj = res
      this.product_obj = res
      res.images.forEach((element :any) => {
        this.prodObj.images = this._sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,`+ element.image);
      });
      this.prodcutImageArr = res.images
      console.log(this.prodObj)
    })
  }

  editProduct(){
    
    let obj = this.productForm.value
    obj.id = this.productId
    this.rest.eidtProduct(obj).subscribe((res :any) => {
      console.log(res)
      this.rest.succesToast("Product Edit Successfully")
      this.getData()
    })
  }

  addData(){
    this.productForm.patchValue(this.product_obj)
  }

  deletProd(){
    this.rest.deletProd(this.productId).subscribe((res :any) => {
      console.log(res)
      this.rest.succesToast("Product Delete Successfully")
      this.routing.navigateByUrl("/categoris")
    })
  }

}
