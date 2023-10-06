import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dataService } from 'src/app/services/data.service';
import { StatesService } from './../../services/states.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isHome: boolean; 
 

  constructor(private router: Router, 
    private activeRoute: ActivatedRoute, 
    private dataSrv: dataService,
    private stateSrv: StatesService){
  }
cards: {image: string, title: string, description: string, id: string}[]= this.dataSrv.cardsList

goToPizzeria() {
this.router.navigate(['/menu-pizzeria'])
this.stateSrv.setIsPizzeria(true);
this.stateSrv.setIsHome(true);

}

goToRistorante() {
  this.router.navigate(['/menu-ristorante'])
  this.stateSrv.setIsRistorante(true);
  this.stateSrv.setIsPizzeria(false);
  this.stateSrv.setIsHome(true);
}

ngOnInit(): void {

}

}
