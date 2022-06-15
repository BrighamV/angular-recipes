import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { environment } from '../../../environments/environment';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-detail',
  templateUrl: './my-detail.component.html',
  styleUrls: ['./my-detail.component.css']
})
export class MyDetailComponent implements OnInit {
  routeSub: any = Subscription;

  data: any = [];


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const recipeId = params['id'];
      console.log("recipe id", recipeId);
      this.instructionsById(recipeId);
    }
    )}

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  instructionsById(id: string) {
    const options = {
      method: 'GET',
      headers: {
        
      
      }
    };
  
      this.http.get(` https://cse341-my-recipe.herokuapp.com/recipes/${id}`, options)
      .subscribe(data => {
        this.data = data
        console.log("data",this.data)
      })
        // getting rid of repeated equipment. 
        // console.log("steps", this.steps.length)
       
        // console.log('complete equipment list', this.equipment)
      }
  }