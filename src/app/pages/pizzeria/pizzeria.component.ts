import { Component, OnInit } from '@angular/core';
import {pizzeList} from '../../../assets/Mock/pizzeList'
import { ActivatedRoute, Router } from '@angular/router';
import { dataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.scss']
})
export class PizzeriaComponent implements OnInit {
isHome: boolean; 



constructor(private activeRoute: ActivatedRoute, private router: Router, private dataSrv: dataService){

}

ngOnInit(): void {



}

pizze: {name: string, description: string, price: number, img: string} [] = pizzeList;

}
