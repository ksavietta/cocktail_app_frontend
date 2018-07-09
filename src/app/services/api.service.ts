import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ApiService {
  API_URL : string = "http://localhost:3000/";

  constructor(public http: HttpClient) { }

  // read method
  public get(path, params?) {

      var endpoint = this.API_URL + path;
      let parameters = new HttpParams();

      // TODO: Make this more general
      if (params !== undefined && params.toString() !== "") {
        parameters = parameters.append('recipeId', params.recipeId);
      }

    // Make the API call using the new parameters.
    return this.http.get(endpoint, {params: parameters});

  }
  // create method
  public post(path:string,body:any) {

      var endpoint = this.API_URL + path;
      return this.http.post(endpoint,body);

  }
  // delete method
  public delete(path:string){

    var endpoint = this.API_URL + path;
    return this.http.delete(endpoint);

  }
  // update method
  public update(path:string, body:any){
    var endpoint = this.API_URL + path;
    return this.http.put(endpoint,body);
  }

}
