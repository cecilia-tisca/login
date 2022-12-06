import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BebidasService {

  // private url: string = "https://api.covidtracking.com"

  constructor(private http: HttpClient){}

  // getBebidas(name: string){
  //   return this.http.get(`${this.url}/${name}`);
  // }e

  // public strDrink: String= '';

  // constructor(private http: HttpClient) { 
  //   console.log('Servicio HTTP');
    
  // }

  getBebidas(): any {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s');
  }
}
