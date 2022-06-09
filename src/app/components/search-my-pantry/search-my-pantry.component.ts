import { getLocaleDateFormat } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { MatDialog } from '@angular/material/dialog';
import { CloseUpComponent } from '../close-up/close-up.component';
import { MyCloseUpComponent } from '../my-close-up/my-close-up.component';

@Component({
  selector: 'app-search-my-pantry',
  templateUrl: './search-my-pantry.component.html',
  styleUrls: ['./search-my-pantry.component.css']
})
export class SearchMyPantryComponent implements OnInit {
  name: any = [];
  instructions: any = [];
  id!: string;
  first!: string;
  second!: string;
  third!: string;
  steps: any = [];
  ingredients: any = [];
  value1 = 'Clear me';
  value2 = 'Clear me';
  value3 = 'Clear me';

  constructor(
    private http: HttpClient,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  // Change the original search to a search through my backend.
  searchByIngredient(first: string, second: string) {
    const options = {
      method: 'GET',
      headers: {
        
      
      }
    };
  
      this.http.get(` https://cse341-my-recipe.herokuapp.com/recipes/getRecipes/${first}/${second}`, options)
      .subscribe(data => {
        this.name = data
        console.log("data",data)
      })
  }
  onSubmit() {
    // console.log("submited")
    this.searchByIngredient(this.first, this.second);

  }
  // Open the dialog with info from search through my backend. 
  openDialog(recipe: any) {
    console.log("recipe from my data", recipe)
    
      let dialogRef = this.dialog.open(MyCloseUpComponent, {data: {recipe}});
      dialogRef.afterClosed().subscribe(result => {
      // console.log(`dialog result: ${result}`);
      if (result == 'true') {
        // console.log("yey lets go")
      } else {
        // console.log("i guess were going back")
      }

    })
  }
}

