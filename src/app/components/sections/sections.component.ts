import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {cardsList} from '../../../assets/Mock/cardSList'
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
cards: {image: string, title: string, description: string}[]= cardsList; 

constructor(private router: Router, private activeRoute: ActivatedRoute){}

test () {
  console.log(this.cards)
}

goToPizzeria() {
this.router.navigate(['/menu-pizzeria'])
}

goToRistorante() {
this.router.navigate(['/menu-ristorante'])
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
