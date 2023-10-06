import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.scss']
})
export class PizzeriaComponent implements OnInit {




constructor(private activeRoute: ActivatedRoute, private router: Router, private dataSrv: dataService){

}

ngOnInit(): void {



}

pizze: {name: string, description: string, price: number, img: string} [] = this.dataSrv.pizzeList;

}
