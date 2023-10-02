import { Component } from '@angular/core';
import {pizzeList} from '../../../assets/Mock/pizzeList'
@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.scss']
})
export class PizzeriaComponent {

pizze: {name: string, description: string, price: number, img: string} [] = pizzeList;

}
