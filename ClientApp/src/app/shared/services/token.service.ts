import { Injectable } from '@angular/core';
import { Token } from '../models/token.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  formData: Token
  list : Token[];

  constructor(private http:HttpClient) { }

  postToken(formData: Token){
    return this.http.post('http://localhost:56085/api/ProblemDetail', formData);
  }

  refreshList(){
    this.http.get('http://localhost:56085/api/ProblemDetail').subscribe(
      res => {
        this.list = res as Token[];
      }
    )
      // .toPromise()  
      // .then(res => this.list = res as Token[]);
  }
} 
