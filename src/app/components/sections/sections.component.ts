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
this.dataSrv.setIsHome(true);

}

goToRistorante() {
  this.router.navigate(['/menu-ristorante'])
  this.dataSrv.setIsHome(true);
}

ngOnInit(): void {

}

// cards = [
//   {
//     image: '../../../assets/images/icons/pan.png',
//     title: 'About us',
//     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cupiditate totam vero. Unde tenetur quisquam illum eveniet nemo dignissimos minima ad harum quo. Non et laboriosam iure. Quidem, ducimus a?'
//   },
//   {
//     image: '../../../assets/images/icons/ingredients.png',
//     title: 'Ingredienti',
//     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cupiditate totam vero. Unde tenetur quisquam illum eveniet nemo dignissimos minima ad harum quo. Non et laboriosam iure. Quidem, ducimus a?'
//   },
//   {
//     image: '../../../assets/images/icons/pizza.png',
//     title: 'Pizzeria',
//     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cupiditate totam vero. Unde tenetur quisquam illum eveniet nemo dignissimos minima ad harum quo. Non et laboriosam iure. Quidem, ducimus a?'
//   },
//   {
//     image: '../../../assets/images/icons/restourant.png',
//     title: 'Ristorante',
//     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cupiditate totam vero. Unde tenetur quisquam illum eveniet nemo dignissimos minima ad harum quo. Non et laboriosam iure. Quidem, ducimus a?'
//   },
// ]

}