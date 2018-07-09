import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import {Angular2TokenService} from "angular2-token";
import { Ingredient } from '../models/ingredient';

@Component({
 selector: 'app-bar',
 templateUrl: './bar.component.html',
 styleUrls: ['./bar.component.sass']
})
export class BarComponent implements OnInit {
 public imageSrc1: string = '../../assets/images/home/image2.jpg';
 public barIngredients : Array<Ingredient>;
 public allIngredients : Array<Ingredient>;
 public chunkedIngredients : Array<any>;

 constructor(public apiService:ApiService, public authService:AuthService) { }

 ngOnInit() {
   this.apiService.get("bar").subscribe((data: any) => {
     this.barIngredients = data;
   })
   this.apiService.get("ingredients").subscribe((data: any) => {
     this.allIngredients = data;
     this.chunkedIngredients = this.chunkArray(this.allIngredients, 3);
   })
 }

 private
   chunkArray(myArray, chunk_size){
     let index = 0;
     let arrayLength = myArray.length;
     let tempArray = [];
     for (index = 0; index < arrayLength; index += chunk_size) {
         let myChunk = myArray.slice(index, index+chunk_size);
         tempArray.push(myChunk);
     }
     return tempArray;
   }

   displayDesc(desc) {
     let max = 75;
     let display = desc;
     if (display.length > max) {
       display = display.substring(0, max) + '...'
     }
     return display;
   }

}
