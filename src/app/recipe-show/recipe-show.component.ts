import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-recipe-show',
  templateUrl: './recipe-show.component.html',
  styleUrls: ['./recipe-show.component.sass']
})
export class RecipeShowComponent implements OnInit {
  public recipe : Recipe  = new Recipe();
  public ingredients : Array<Ingredient>;

  constructor(public apiService: ApiService , public router : Router, public acRoute : ActivatedRoute) {
  }

  ngOnInit() {
    this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      if (data && data.id) {
          this.apiService.get("recipes/"+data.id).subscribe((data : Recipe) => {
            this.recipe = data;
          });
          this.apiService.get("recipe_ingredients/", {recipeId: data.id}).subscribe((data : Array<Ingredient>) => {
            this.ingredients = data;
          });
      } else {
        this.recipe = new Recipe();
      }
    })
  }

}
