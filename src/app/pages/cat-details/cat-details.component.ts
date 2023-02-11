import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriService } from 'src/app/services/categori.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {

  cat_id:any
  showProduct = false
  cat_obj = {
    name : "",
    image : "",
    products : [],
  }
  product_arr:any
  cat_name =""
  image_file = ""
  productForm: FormGroup | any;
  showUpload = false
  product_id :any
  constructor(private route : ActivatedRoute ,
    private routing :Router,
    private _sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private rest : CategoriService){}

  ngOnInit(){
    this.rest.showSpiner()
    this.productForm = this.formBuilder.group({
      name: ['' , Validators.required],
      price: ['' , Validators.required],
      description: ['' , Validators.required],
      quantity: ['' , Validators.required],
    });
   this.cat_id = this.route.snapshot.paramMap.get('id')
   this.getData()
  }

  getData(){
    this.rest.cat_full_details(this.cat_id).subscribe((res :any) => {
      console.log(res)
      res.image.image = this._sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,`+ res.image.image);
      this.cat_obj.name = res.name
      this.cat_obj.image = res.image.image
      res.products.forEach((element :any) => {
        element.images[0] = this._sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,`+ element.images[0].image);
      });
      this.product_arr = res.products
      console.log(this.cat_obj.products)
      if(this.product_arr.length != 0){
        this.showProduct= true
      }else {
        this.showProduct= false
      }
      this.rest.hideSpiner()
    })
  }

  addProduct (){
    let obj = this.productForm.value
    obj.category_id = this.cat_id
    this.rest.addProduct(obj).subscribe((res :any) => {
      console.log(res)
      this.product_id = res
      this.showUpload = true

    })
  }

  uploadFile(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
    }
    this.image_file = e.target.files[0]
  }

  addProductImage() {
    this.rest.showSpiner()
    this.rest.ulpoad_product_image(this.product_id,this.image_file)
      .then((response: any) => response.text())
      .then((result: any) => {
        this.getData()
        this.rest.succesToast("Product Added Successfuly")
        this.rest.hideSpiner()
        console.log(result)
      })
      .catch((error: any) => console.log('error', error));
  }

  editCat(){
    this.rest.showSpiner()
    this.cat_id =+ this.cat_id
    let obj = {
      id:this.cat_id,
      name : this.cat_name
    }
     this.rest.editCat(obj).subscribe((res :any) => {
      this.rest.hideSpiner()
      this.getData()
       console.log(res)
     })
  }

  delet_cat(){
    this.rest.showSpiner()
    this.rest.delet_cat(this.cat_id).then(response => response.text())
    .then(result => {
      this.rest.hideSpiner()
      console.log(result)
      this.routing.navigate(['main/categoris'])
    })
    .catch(error => console.log('error', error));  
  }

  productDetails(id:any){
    this.routing.navigate(['main/product_details',id])
  }


}
