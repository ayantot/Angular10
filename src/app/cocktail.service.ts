import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(public CocktailService:HttpClient) { }

  public getCocktails():Observable<any[]>{
    return this.CocktailService.get("assets/cocktails.json").pipe(
      map(
        (param_data:any)=> {
          let current=null;
          let results = [];

          for (let i:number=0; i<param_data.length; i++){
            current=param_data[i];

            if(current != undefined){
              results.push(current);

            }else{
              console.log("Pas de bol");
            }
          }
          return results;
        }
      )
    )
    } 
  }
