import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PizzaToppings } from './pizzatoppings';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class PizzaToppingsService {
 
  constructor(private http: HttpClient) { }
 
  public getPizzaToppings(): Observable<PizzaToppings[]> 
  {
//    const url = 'https://www.olo.com/pizzas.json';
    const url = 'http://localhost:4200/assets/pizzas.json';

    return this.http.get<PizzaToppings[]>(url);
  }
}