import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  userDetails;

  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res =>{
        this.userDetails = res;
      },
      err=>{
        console.log(err);
      },
    );
  }
  onLogout($event) {
    $event.preventDefault();
    this.service.logout();
    this.router.navigate(['user/login']);
  }

}
