import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dataService } from 'src/app/services/data.service';
import {cardsList} from '../../../assets/Mock/cardSList'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  isHome: boolean; 
 

  constructor(private router: Router, private activeRoute: ActivatedRoute, private dataSrv: dataService){
  }
cards: {image: string, title: string, description: string, id: string}[]= this.dataSrv.cardsList; 



test () {
  console.log(this.cards)
}

goToPizzeria() {
this.router.navigate(['/menu-pizzeria'])
this.dataSrv.setIsPizzeria(true);
this.dataSrv.setIsHome(true);

}

goToRistorante() {
  this.router.navigate(['/menu-ristorante'])
  this.dataSrv.setIsRistorante(true);
  this.dataSrv.setIsPizzeria(false);
  this.dataSrv.setIsHome(true);
}

ngOnInit(): void {

}

}
