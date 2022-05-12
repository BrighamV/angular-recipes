import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  routeSub: any = Subscription;
  instructions: any = [];
  steps: any = [];
  info: any = [];
  ingredients: any = [];


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const recipeId = params['id'];
      console.log("recipe id", recipeId);
      this.instructionsById(recipeId);
      this.detailById(recipeId);
      this.ingredientsById(recipeId);
    }
    )}

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  detailById(id: string) {
    const options = {
      method: 'GET',
      headers: {
        
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': `${environment.recipe}`
      }
    };  
      this.http.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, options)
      .subscribe(data => {
        this.info = data
      })
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

  ingredientsById(id: any) {
    const options = {
      method: 'GET',
      headers: {
        
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': `${environment.recipe}`
      }
    };
      this.http.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/ingredientWidget.json`, options)
      .subscribe((data: any) => {
        this.ingredients = data.ingredients;
        console.log("stuff", this.ingredients)
  
  })
  }






}
