import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  user: User = new User();
  submitted = false;
  myForm!: FormGroup;
  value1 = 'Clear me';


  constructor(private tutorialService: TutorialService, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: '*recipe name*',
      instructions: this.fb.array([]),
      ingredients: this.fb.array([]),
      equipments: this.fb.array([]),
      image: 'just a string for now',
      authorImage: 'just a string for now',
      authorName: '*Author Name*',

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


  saveUser(): void {
    this.tutorialService.create(this.user).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    })
  }
  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }
  // addRecipe() {
  //   this.ingredientArray.push(new FormControl('', Validators.required));
  // }
  // removeInputControl(idx: number) {
  //   this.ingredientArray.removeAt(idx);
  // }
}
