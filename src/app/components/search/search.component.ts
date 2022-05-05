import { getLocaleDateFormat } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';


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
) { } 


  ngOnInit(): void {

  // this.searchByIngredient();

  }

  searchByIngredient(first: string, second: string, third: string) {
    const options = {
      method: 'GET',
      headers: {
        
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': `${environment.recipe}`
      }
    };
  
      this.http.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${first}%2C${second}%2C${third}&number=50&ignorePantry=true&ranking=1`, options)
      .subscribe(data => {
        this.name = data
      })
  }

  onSubmit() {
    console.log("submited")
    // let first = document.querySelector("#first");
    // console.log(this.first);
    // console.log(this.second);
    // console.log(this.third);
    this.searchByIngredient(this.first, this.second, this.third);

  }

  checkIcon(index: string) {
    console.log("id",index)
    this.instructionsById(index);
    this.getIngredientList(index);
  }


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

  getIngredientList(id: string) {
    const options = {
      method: 'GET',
      headers: {
        
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': `${environment.recipe}`
      }
    };
  
      this.http.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/ingredientWidget.json`, options)
      .subscribe(data => {
        this.ingredients = data
        console.log("ing",this.ingredients);
      })
  }





}
