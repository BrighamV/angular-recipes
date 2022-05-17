import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})

export class AddRecipeComponent implements OnInit {
  submitted = false;
  myForm!: FormGroup;
  value1 = 'Clear me';


  constructor(private tutorialService: TutorialService, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: '',
      instructions: this.fb.array([]),
      ingredients: this.fb.array([]),
      equipments: this.fb.array([]),
      image: '',
      authorImage: '',
      authorName: '',
      // time: '*Time it takes to complete this recipe'

    })
  }
  get instructionForms() {
    return this.myForm.get('instructions') as FormArray
  }

  addinstruction() {
    const instruction = this.fb.group({
      step: [],
      direction: [],
    })
    this.instructionForms.push(instruction);
  }

  deleteinstruction(i: any) {
    this.instructionForms.removeAt(i)
  }

  get ingredientForms() {
    return this.myForm.get('ingredients') as FormArray
  }

  addingredient() {
    const ingredient = this.fb.group({
      name: [],
      amount: [],
      units: [],
    })
    this.ingredientForms.push(ingredient);
  }

  deleteingredient(i: any) {
    this.ingredientForms.removeAt(i)
  }

  get equipmentForms() {
    return this.myForm.get('equipments') as FormArray
  }

  addequipment() {
    const equipment = this.fb.group({
      name: [],
    })
    this.equipmentForms.push(equipment);
  }

  deleteequipment(i: any) {
    this.equipmentForms.removeAt(i)
  }

  async addrecipe() {
    console.log('here in add recipe', this.myForm.value.name)
       const options = {
        method: "POST",
        headers: {
          // "Access-Control-Allow-Origin": "http://localhost:4200/add",
          "Content-Type": "application/json",

  
        },
        body: JSON.stringify({
          name: this.myForm.value.name,
          instructions: this.myForm.value.instructions,
          // ingredients: this.myForm.value.name,
          // equipment: this.myForm.value.name, 

        }),
      };
  
    let mess = await fetch("https://cse341-my-recipe.herokuapp.com/recipes/", options);
        console.log("fetch message", mess);

  }

  // async function addMovie(formInput){
  //   const token = getCookie("token");
  
    // const options = {
    //     method: "POST",
    //     headers: {
    //       // "Access-Control-Allow-Origin":  "https://brentont240.github.io/",
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
  
    //     },
    //     body: JSON.stringify({
    //       title: formInput.title,
    //       yearPublished: formInput.yearPublished,
    //       rating: formInput.rating,
    //       minutes: formInput.minutes,
    //       genre: formInput.genre,
    //       imageUrl: formInput.imageUrl,
    //       description: formInput.description,
    //       starRating: formInput.starRating
    //     }),
    //   };
  
    // let postMovie = await fetch("https://film-watcher.herokuapp.com/movies/add-movie", options);
  //   console.log("fetch message", postMovie);
  // }
  
}
