import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

// export class Name {
//   constructor(
//     public fname: string
//   ) {}
// }

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // names: Name[];
  text: any = [];

  constructor() { }

  ngOnInit(): void {

    this.text = this.getData();
    const title: string = this.text[1]
    console.log("init", this.text)
  }
  async getData() {
    
    const options = {
      method: 'GET',
      headers: {
        
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': `${environment.recipe}`
      }
    };
    
    let recipe_data = await fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ignorePantry=true&ranking=1', options)
      .then(response => response.json())
      // .then(response => this.names = response)
      // .then(response => console.log(response))
      // .then((data) => data)
      // .catch(err => console.error(err));
      console.log('rec datas', recipe_data);
    this.getName(recipe_data)
    return recipe_data;
  }

  getName(data: any) {
    
    const name: string = data[1]
    console.log('getting name', name);

    // document.querySelector(".title")?.innerHTML = name;
    // data.data.map(item: any=> {
    //   let info: any [];
    //   info.name = item.title;

    // }
  }

}
