import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Angular2TokenService } from "angular2-token";

@Injectable()
export class ApiService {
  API_URL : string = "http://localhost:3000/";

  constructor(public http: HttpClient, public authTokenService: Angular2TokenService) { }

  // read method
  public get(path, params?) {
    var endpoint = this.API_URL + path;
    return this.authTokenService.get(path, {params: params}).map((data: any) => data.json());
  }
  // create method
  public post(path:string,body:any) {
    return this.authTokenService.post(path, body);
  }
  // delete method
  public delete(path:string){
    return this.authTokenService.delete(path);
  }
  // update method
  public update(path:string, body:any){
    return this.authTokenService.put(path,body);
  }

}
