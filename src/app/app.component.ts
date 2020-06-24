import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from './pizzatoppings.service';
import { PizzaToppings } from './pizzatoppings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  pizzaToppings = new Array<PizzaToppings>();

  constructor(private ptService:PizzaToppingsService) {
  }

  ngOnInit() {
    this.ptService.getPizzaToppings().subscribe(response => 
      {
        /*
        this.pizzaToppings = response.map(item => 
        {
          return new PizzaToppings(item.toppings);
        });
        */
        response.map(item => 
        {
          const newItem = new PizzaToppings(item.toppings);
          let foundItem = this.pizzaToppings.filter(item=>item.stringRep == newItem.stringRep);
          if(!foundItem || foundItem.length === 0)
            this.pizzaToppings.push(newItem);
          else
            foundItem[0].count++;
        });
        this.pizzaToppings = this.pizzaToppings.sort((a,b)=>b.count-a.count);
        if(this.pizzaToppings.length>20)
        this.pizzaToppings.length = 20;
      });
  }
}
