import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild("passwordRef") passwordInputRef: ElementRef;

  constructor(public Service: UserService, private toster:ToastrService, private router:Router) { }

  ngOnInit() {
    this.Service.formModel.reset();
  }

  onSubmit(){
    this.Service.register().subscribe(
      (res: any) => {
        if(res.succeeded) {
          this.Service.formModel.reset();
          this.toster.success('New User Created.','Registration Successfull!')
          this.router.navigate(['user/login']);
        } else{
          res.errors.forEach(element =>{
            switch(element.code){
              case 'DuplicateUserName':
                this.toster.error('UserName is already taken.','Registration Failed')
                //UserName is already taken
                break;

                default:
                this.toster.error(element.description,'Registration Failed')
                //Registration failed
                break;
            }
          });
        }
      },
      err =>{
        console.log(err);
      }
    );
  }

  showPassword() {
    let passwordElement = $(this.passwordInputRef.nativeElement);
  
    if (passwordElement.attr("type") === "Password") {
      passwordElement.attr("type", "text");
    } else {
      passwordElement.attr("type", "Password");
    }
  } 
}


