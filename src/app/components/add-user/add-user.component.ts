import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {



  constructor(
    private http: HttpClient,
  ) { }
  
  ngOnInit(): void {
  }
 
  async toGoogle() {
    console.log("at google")
    // const res = await this.http.get('http://localhost:8080/auth/google')
                 // just redirect to http://localhost:8080/auth/google, dont send an http.get to it
    // console.log("response", res)
  }


}