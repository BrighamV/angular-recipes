import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var r = document.querySelector(':root');

function setBackgroundColor() {
    let num1: any = Math.random() * (250 - 150) + 150;
    let num2: any = Math.random() * (250 - 150) + 150;
    let num3: any = Math.random() * (250 - 150) + 150;
    let num4: any = Math.random() * (250 - 150) + 150;
    let num5: any = Math.random() * (250 - 150) + 150;
    let num6: any = Math.random() * (250 - 150) + 150;

    document.documentElement.style.setProperty('--one', num1);
    document.documentElement.style.setProperty('--two', num2);
    document.documentElement.style.setProperty('--three', num3);
    document.documentElement.style.setProperty('--four', num4);
    document.documentElement.style.setProperty('--five', num5);
    document.documentElement.style.setProperty('--six', num6);

    // r.style.setProperty('--one', num1);
    // r.style.setProperty('--two', num2);
    // r.style.setProperty('--three', num3);
    // r.style.setProperty('--four', num4);
    // r.style.setProperty('--five', num5);
    // r.style.setProperty('--six', num6);

}

setBackgroundColor();
  }

}
