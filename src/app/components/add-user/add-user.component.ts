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
 
  toGoogle() {
    console.log("at google")
    this.http.get('http://localhost:8080/auth/google')

  }


}