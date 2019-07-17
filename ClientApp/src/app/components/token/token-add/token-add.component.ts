import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TokenService } from 'src/app/shared/services/token.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Token } from 'src/app/shared/models/token.model';

@Component({
  selector: 'app-token-add',
  templateUrl: './token-add.component.html',
  styleUrls: ['./token-add.component.scss']
})
export class TokenAddComponent implements OnInit {
  userDetails
  constructor(private service:TokenService,private toster:ToastrService,
              private router:Router) { }

  ngOnInit() {
  }
  
    public token:Token = {
       TokenId : null,
       AuditId : null,
       ProblemName : '',
       AttentionLevel: 0,
       Location:'',
       Description:'',
       AddedDate : new Date(),
       AddedBy : '',
     }

  onSubmit(form:NgForm){

      this.service.postToken(form.value).subscribe(
        res =>{
          this.router.navigate(['token-list'])
          this.toster.success('New Recorde Added.','Added Successfully!');
        },
        err=>{
          console.log(err);
          this.toster.error('Failed.','Failed to Add!');          
        }
      )
  }

}
