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


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const recipeId = params['id'];
      console.log("recipe id", recipeId);
      this.instructionsById(recipeId)
    }
    )}

  ngOnDestroy() {
    this.routeSub.unsubscribe();
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








}
