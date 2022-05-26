import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-my-close-up',
  templateUrl: './my-close-up.component.html',
  styleUrls: ['./my-close-up.component.css']
})
export class MyCloseUpComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
