import { Component } from '@angular/core';

import { restaurantList } from 'src/assets/Mock/restaurantList';



@Component({
  selector: 'app-ristorante',
  templateUrl: './ristorante.component.html',
  styleUrls: ['./ristorante.component.scss']
})
export class RistoranteComponent {
dishes = restaurantList;
keepOrder = (a: any, b: any) => {
  return a;
}
 
}