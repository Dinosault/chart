// data-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

export interface signUpInfo {
  data: object
  isSuccess: boolean,
  message: string,
}
export interface signInInfo {
  data: object
  isSuccess: boolean,
  message: string,
}
// export interface signUpForm {
//   data: object
//   isSuccess: boolean,
//   message: string,
// }
// export interface signInForm {
//   data: object
//   isSuccess: boolean,
//   message: string,
// }

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService implements OnInit{

  baseUrl = 'http://192.168.50.132:5143'

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  // 登入
  signInData(formData: any): Observable<signInInfo> {
    const url = this.baseUrl + '/Account/AccountInfo/Login'; 
    return this.http.post<signInInfo>(url, formData);
  }
  // 註冊
  signUpData(user: any): Observable<signUpInfo> {
    const url = this.baseUrl + '/Account/AccountInfo/Register'; 
    return this.http.post<signUpInfo>(url, user);
  }

}
