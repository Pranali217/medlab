import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
isGetOtp:boolean=false;
isVerifyOtp:boolean=false;
signUpForm!:FormGroup;
otpGenerated!:number;
otpTimer!:number;
isSignUpSuccess:boolean=false;

sub!:Subscription;
  constructor(private fb:FormBuilder , private http:HttpService) { }

  ngOnInit(): void {
    this.createSignUForm();
  }
  createSignUForm(){
    this.signUpForm=this.fb.group({
      'userName': ['',[Validators.required]],
      'mobileNo': ['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      'password': ['',[Validators.required]],
      'isMobileNoVerified' : [false,[]]

    })

   }

   getOtp(){
    this.isGetOtp=true;
   this.otpGenerated = Math.floor(1000 + Math.random() * 9000);
   console.log(this.otpGenerated);

   var emmitedNo =interval(1000);
   this.sub = emmitedNo.subscribe((res:any)=>{
   this.otpTimer = 60 - res;
   if(this.otpTimer == 0){
    this.sub.unsubscribe();
   }
   })
   }

   verifyOtp(otpEntered:any){
    if(otpEntered == this.otpGenerated){
      this.isVerifyOtp =true;
      this.isGetOtp = false;
      this.signUpForm.controls['isMobileNoVerified'].setValue(true);
      this.sub.unsubscribe();

    }
    
   
   }
   signUp(){
    if(this.isVerifyOtp){
    console.log(this.signUpForm.value);
    this.http.postDetailsToServer('users',this.signUpForm.value).subscribe((response:any)=>{
      if(response ){
        this.isSignUpSuccess = true;
        console.log(response);
      }else{
        this.isSignUpSuccess = false;
      }
    })
    }
   }
}
