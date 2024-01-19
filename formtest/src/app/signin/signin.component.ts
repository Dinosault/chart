import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../service/api-service.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  logInForm= new FormGroup({
    userAccount: new FormGroup('', [Validators.required]),
    userPassword: new FormGroup('', [Validators.required]),
    userEmail: new FormGroup('', [Validators.required]),
    userPhone: new FormGroup('', [Validators.required]),
    confirmPassword: new FormGroup('', [Validators.required, this.passwordMatchValidator])
  });
  signUpForm= new FormGroup({
    userAccount: new FormGroup('', [Validators.required]),
    userPassword: new FormGroup('', [Validators.required])
  })

  userSignUp = {
    isSuccess: false,
    message: '',
    data: {},
  }
  userSignIn = {
    isSuccess: false,
    message: '',
    data: {},
  }

  constructor(private apiService: ApiServiceService, private router: Router) {
  }
  ngOnInit(): void {}
  // 註冊功能
  SignUp(): void {
    const formData = this.logInForm.value;
    // 身份驗證服務 : 檢查使用者的帳號和密碼
    this.apiService.signUpData(formData).subscribe(res => {
      this.userSignUp.data = res.data;
      this.userSignUp.isSuccess = res.isSuccess;
      this.userSignUp.message = res.message;
      console.log(this.userSignUp.message);

      if (this.userSignUp.isSuccess == true) {
        console.log(this.userSignUp.message);
        // 測試 route 功能
        this.router.navigate(['member'])
      } else {
        alert("註冊失敗");
        console.log(this.userSignUp.message);
        this.signUpForm.reset(); // 重置整個表單
      }
    });
  }
  // 自訂密碼相同的同步驗證器，需驗證是否可行
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const passwordControl = control.get('password');
    const confirmPasswordControl = control.get('confirmpassword'); 
    
    if (!passwordControl || !confirmPasswordControl) {
      return null; // 如果其中一個控制項不存在，無法進行比較
    }
    const password = passwordControl.value;
    const confirmPassword = confirmPasswordControl.value;
    
    return password === confirmPassword ? null : { 'passwordMismatch': true };
  }
  
  // 登入功能
  SignIn(): void {
    const formData = this.signUpForm.value;
    // 身份驗證服務 : 檢查使用者的帳號和密碼
    this.apiService.signInData(formData).subscribe(res => {
      this.userSignIn.data = res.data;
      this.userSignIn.isSuccess = res.isSuccess;
      this.userSignIn.message = res.message;
      if (this.userSignIn.isSuccess == true) {
        console.log(this.userSignIn.message);
        // route 功能
        this.router.navigate(['member']);
      } else {
        alert("登入失敗");
        console.log(this.userSignIn.message);
        this.logInForm.reset(); // 重置整個表單
      }
    });
  }

}
