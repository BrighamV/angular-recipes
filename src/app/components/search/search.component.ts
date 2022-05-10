import { getLocaleDateFormat } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { MatDialog } from '@angular/material/dialog';
import { CloseUpComponent } from '../close-up/close-up.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
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

  // this.searchByIngredient();

  }
  // taking in three strings this will request the API to search the database with these three strings.
  searchByIngredient(first: string, second: string, third: string) {
    const options = {
      method: 'GET',
      headers: {
        
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': `${environment.recipe}`
      }
    };
  
      this.http.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${first}%2C${second}%2C${third}&number=4&ignorePantry=true&ranking=1`, options)
      .subscribe(data => {
        this.name = data
      })
  }
  // from html goes to searchByIngredient
  onSubmit() {
    // console.log("submited")
    this.searchByIngredient(this.first, this.second, this.third);

  }

  // opens a dialog box that allows the user to see the ingredients required and go to the desired recipe detail view. 
  openDialog(recipe: any) {
    const options = {
      method: 'GET',
      headers: {
        
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': `${environment.recipe}`
      }
    };
      this.http.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipe.id}/ingredientWidget.json`, options)
      .subscribe((data: any) => {
        let ingredients = data.ingredients;
      // console.log("recipe ingredients", ingredients);
      let dialogRef = this.dialog.open(CloseUpComponent, {data: {recipe, ingredients}});
      dialogRef.afterClosed().subscribe(result => {
      // console.log(`dialog result: ${result}`);
      if (result == 'true') {
        // console.log("yey lets go")
      } else {
        // console.log("i guess were going back")
      }

    })
  })
  }

  // checkIcon(index: string) {
  //   console.log("id",index)
  //   this.instructionsById(index);
  //   this.getIngredientList(index);
  // }


  instructionsById(id: string) {
    const options = {
      method: 'GET',
      headers: {
        
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': `${environment.recipe}`
      }
    };  
      this.http.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/analyzedInstructions?stepBreakdown=true`, options)
      .subscribe(data => {
        this.instructions = data
        console.log('instuctions', this.instructions[0].steps);
        this.steps = this.instructions[0].steps
      })
  }

  // getIngredientList(id: string) {
  //   const options = {
  //     method: 'GET',
  //     headers: {
        
  //       'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
  //       'X-RapidAPI-Key': `${environment.recipe}`
  //     }
  //   };
  
  //     this.http.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/ingredientWidget.json`, options)
  //     .subscribe((data: any) => {
  //       this.ingredients = data.ingredients;
  //       console.log("ing",this.ingredients);
  //       console.log("igredeint", data)
  //     })
  //     return (this.ingredients)
  // }





}
