import { Component, OnInit } from '@angular/core';
import {pizzeList} from '../../../assets/Mock/pizzeList'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.scss']
})
export class PizzeriaComponent implements OnInit {

constructor(private activeRoute: ActivatedRoute, private router: Router){
}

ngOnInit(): void {

}

pizze: {name: string, description: string, price: number, img: string} [] = pizzeList;

}
