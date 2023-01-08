import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
actionName:string="SignIn";
loggedUserDetails:any;
isLoggedInSuccess :boolean=false;
cardCount!:Observable<number>
sub!:Subscription;

@ViewChild('closeBtn',{'read':ElementRef})closeBtn!:ElementRef;
@ViewChild('loginBtn',{'read':ElementRef})loginBtn!:ElementRef;

  constructor(private auth:AuthenticationService, private shared:SharedService, private router:Router) { }

  ngOnInit(): void {
   
    if(this.auth.getToken()){
    this.loggedUserDetails = this.auth.getUser();
    //  if(this.loggedUserDetails && this.loggedUserDetails.username){
      this.isLoggedInSuccess = true;
    }
  //  this.sub = this.shared.cartObs.subscribe((el:any)=>{
  //   this.cardCount = el;
  //  });
    
  this.cardCount = this.shared.cartObs;


  }
  changeAction(action:string){
    this.actionName = action;

  }
  handleLoginSuccess(flag:boolean){
    if(flag){
      this.isLoggedInSuccess = true;
      this.loggedUserDetails = this.auth.getUser();
      this.closeBtn.nativeElement.click();
    }

  }
  redirectToCart(){
    if(this.isLoggedInSuccess){
   this.router.navigate(['/cart'])
    }else{
    this.loginBtn.nativeElement.click();
    }
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
