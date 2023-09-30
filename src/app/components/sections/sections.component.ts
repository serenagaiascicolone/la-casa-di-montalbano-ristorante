import { Component } from '@angular/core';
import {cardsList} from '../../Mock/cardSList'
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent {
cards: {image: string, title: string, description: string}[]= cardsList; 

test () {
  console.log(this.cards)
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
