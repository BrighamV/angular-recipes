import { getLocaleDateFormat } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
  text: any = [];
 

  constructor(private _http: HttpService) { }

  ngOnInit(): void {

    this._http.getAPIData().subscribe(data => {
      this.text = data;
    })
  }
 
}
