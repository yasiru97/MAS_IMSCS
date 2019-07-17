import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import * as $ from "jquery";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  formModel = {
    UserName: '',
    Password: ''
  }
  @ViewChild("passwordRef") passwordInputRef: ElementRef;

  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
        if (localStorage.getItem('token') !== null){
        this.router.navigateByUrl('/home');
      }
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
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
