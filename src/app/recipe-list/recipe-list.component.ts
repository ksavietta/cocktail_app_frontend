import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  public recipes : Array<Recipe>;

  constructor(public apiService: ApiService , public router : Router) {
  }

  ngOnInit() {
    this.apiService.get("recipes").subscribe((data: Recipe[]) =>{
      console.log(data);
      this.recipes = data;
    })
  }

  public show(id:string) {
    console.log("show : " + id );
    this.router.navigateByUrl('/recipes/' + id);
  }

}
