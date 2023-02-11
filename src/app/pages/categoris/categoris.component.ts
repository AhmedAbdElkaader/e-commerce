import { Component, OnInit } from '@angular/core';
import { CategoriService } from 'src/app/services/categori.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoris',
  templateUrl: './categoris.component.html',
  styleUrls: ['./categoris.component.css']
})
export class CategorisComponent implements OnInit {

  categoriName: string = ''
  categroiId: any
  showUploadFile = false
  image_file: any
  uploadForm: FormGroup | any;
  category_arr: any = []
  constructor(private rest: CategoriService,
    private _sanitizer: DomSanitizer,
    private route : Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.rest.showSpiner()
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });

    this.list_Of_cat()
  }

  list_Of_cat() {
    this.rest.list_Of_cat().subscribe((res: any) => {
      console.log(res)
      this.category_arr = res
      this.category_arr.forEach((element :any) => {
        element.image.image = this._sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,`+element.image.image);
      });

      this.rest.hideSpiner()
      
    })
  }

  addCategori() {
    console.log(this.categoriName)
    let obj = {
      name: this.categoriName
    }

    this.rest.addCategori(obj).subscribe((res: any) => {
      console.log(res)
      this.categroiId = res
      this.showUploadFile = true
    })
  }

  uploadFile(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      console.log(file.name)
      this.uploadForm.get('profile').setValue(file);
    }
    // this.image_file = e.target.files[0]
  }

  addCategroiImage() {
    this.rest.showSpiner()
    console.log(this.uploadForm.get('profile').value.name)
    this.rest.ulpoad_cat_image(this.categroiId, this.uploadForm.get('profile').value)
      .then((response: any) => response.text())
      .then((result: any) => {
        this.rest.succesToast("Category Added Successfuly")
        this.list_Of_cat()
        
        console.log(result)
      })
      .catch((error: any) => console.log('error', error));
  }

  cat_details(id:any){
    this.route.navigate(['main/categroy_details',id])
  }
}
