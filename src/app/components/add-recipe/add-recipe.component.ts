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
  error!: string;
  message!: string;
  successMessage!: string;
  file: any;



  constructor(private tutorialService: TutorialService, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: '',
      hour: '',
      minute: '',
      instructions: this.fb.array([]),
      ingredients: this.fb.array([]),
      equipments: this.fb.array([]),
      image: '',
      authorName: '',

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

  selected(event: any) {

    this.file = event.target.files[0];
    console.log("file", this.file)

  }

  async addrecipe() {


  
    // const img = document.createElement("img")
    // img.src = imageUrl
    // document.body.appendChild(img)

    this.successMessage = "";
    this.error = ""; 
    if (!this.myForm.value.name) { 
      this.error = ", a name "
    }
    if (!this.myForm.value.hour && !this.myForm.value.minute) {
      this.error += ", a time "
    }
    if (!this.myForm.value.instructions[0]) {
      this.error += ", instructions "
    }
    if (!this.myForm.value.ingredients[0]) {
      this.error += ", ingredients "
    }
    if (this.error != "") {
      this.message = "* You can't have a recipe without "
    } else {
      this.message = ""
    }
    if (this.error === "") { 
      console.log("no error message ok to fetch")
      // post to aws
      const { url } = await fetch("https://cse341-my-recipe.herokuapp.com/s3Url").then(res => res.json())
      console.log(url)
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: this.file
      })

    const imageUrl = url.split('?')[0]
    console.log(imageUrl)
    
    // console.log('here in add recipe', this.myForm.value.name)
       const options = {
        method: "POST",
        headers: {
          // "Access-Control-Allow-Origin": "http://localhost:4200/add",
          "Content-Type": "application/json",

  
        },
        body: JSON.stringify({

          name: this.myForm.value.name,
          hour: this.myForm.value.hour,
          minute: this.myForm.value.minute,
          instructions: this.myForm.value.instructions,
          ingredients: this.myForm.value.ingredients,
          equipment: this.myForm.value.equipments,
          image: imageUrl,
          authorName: this.myForm.value.authorName

        }),
      };
      // console.log("options", options.body)
  
    let mess = await fetch("https://cse341-my-recipe.herokuapp.com/recipes/", options);
    console.log("fetch message", mess);
    if (mess.status === 201){
      console.log("success")
      this.successMessage = "Congratulations you have just saved a recipe!"
    }

    // this.myForm.value.hour = "";
    // this.myForm.value.minute = "";
    this.myForm.reset()
    this.file.nativeElement.value = ""
    }
  }

}
