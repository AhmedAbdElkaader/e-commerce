import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpParams} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class CategoriService {

  baseUrl = "https://1275-156-213-96-209.ngrok.io/api"
  auth_token: any

  constructor(private http: HttpClient , private toastr: ToastrService , 
    private spinner: NgxSpinnerService) {
  }

  login(obj: any) {
    return this.http.post(`${this.baseUrl}/auth/login`, obj)
  }


  addCategori(obj: any) {
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
    return this.http.post(`${this.baseUrl}/cats/`, obj, { headers: headers })
  }

  list_Of_cat() {
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })

    return this.http.get(`${this.baseUrl}/cats/`, { headers: headers })
  }

  cat_details(id: any) {
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })

    return this.http.get(`${this.baseUrl}/cats/detailed/${id}`, { headers: headers })
  }

  ulpoad_cat_image(id: any, file: any) {
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })

    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${this.auth_token}`)

    var formdata = new FormData();
    formdata.append("key", file, file.name);
    formdata.append("category_id", id);

    var requestOptions:any = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

   return fetch("http://89.116.25.82:33331/api/images/cat", requestOptions)

  }

  cat_full_details(id:any){
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
    let params = new HttpParams().set('id', id);

    const options = { params: params, headers: headers };
    return this.http.get(`${this.baseUrl}/cats/detailed/`, options)
  }

  editCat(obj:any){
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
    return this.http.put(`${this.baseUrl}/cats/`, obj, { headers: headers })
  }

  delet_cat(id:any){
    this.auth_token = localStorage.getItem("access_token")
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${this.auth_token}`)
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "id": 2
    });
    var requestOptions:any = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
   return fetch(`http://37.61.212.46:33333/api/cats/?id=${id}`, requestOptions)
     
  }

  // add product 

  addProduct(obj:any){
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
    return this.http.post(`${this.baseUrl}/products/`, obj, { headers: headers })
  }

  ulpoad_product_image(id: any, file: any) {
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })

    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${this.auth_token}`)

    var formdata = new FormData();
    formdata.append("key", file, file.name);
    formdata.append("product_id", id);

    var requestOptions:any = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

   return fetch("http://89.116.25.82:33331/api/images/", requestOptions)

  }

  getProduct (id:any){
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })

    return this.http.get(`${this.baseUrl}/products/?product_id=${id}`, { headers: headers })
  }

  eidtProduct (obj:any){
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
    return this.http.put(`${this.baseUrl}/products/`, obj, { headers: headers })
  }

  deletProd(id:any){
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
    let params = new HttpParams().set('product_id', id);

    const options = { params: params, headers: headers };
    return this.http.delete(`${this.baseUrl}/products/`, options)
  }

  // clients

  getAllCleints(){
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })

    return this.http.get(`${this.baseUrl}/client/all`, { headers: headers })
  }

  clientDetails(id:any){
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })

    return this.http.get(`${this.baseUrl}/client/?client_id=${id}`, { headers: headers })
  }

  // orders 

  getOrders(){
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })

    return this.http.get(`${this.baseUrl}/orders/`, { headers: headers })
  }

  orderDetails(id:any){
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
    let params = new HttpParams().set('order_id', id);

    const options = { params: params, headers: headers };
    return this.http.get(`${this.baseUrl}/orders/detailed`, options)
  }

  // packges

  addPack(obj:any){
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
    return this.http.post(`${this.baseUrl}/packages/`, obj, { headers: headers })
  }
  getPackges(){
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
    return this.http.get(`${this.baseUrl}/packages/`, { headers: headers })
  }

  ulpoad_pack_image(id: any, file: any) {
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })

    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${this.auth_token}`)

    var formdata = new FormData();
    formdata.append("key", file, file.name);
    formdata.append("package_id", id);

    var requestOptions:any = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

   return fetch("http://89.116.25.82:33331/api/images/package", requestOptions)
  }

  packDetails(id:any){
    this.auth_token = localStorage.getItem("access_token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
    return this.http.get(`${this.baseUrl}/packages/detailed?package_id=${id}`, { headers: headers })
  }

  deletPack(id:any){
    this.auth_token = localStorage.getItem("access_token")
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${this.auth_token}`)
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "id": id
    });
    var requestOptions:any = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
   return fetch(`${this.baseUrl}/packages/?package_id=${id}`, requestOptions)
  }
  // toster

  succesToast(name:any){
    this.toastr.success( name , 'Greate' ,{
      timeOut : 3000
    });
  }

  erorrToaster(name:any){
    this.toastr.error( name , 'Opps' ,{
      timeOut : 3000
    });
  }

  // spinner

  showSpiner(){
    this.spinner.show();
  }
  hideSpiner(){
    this.spinner.hide();
  }

}
