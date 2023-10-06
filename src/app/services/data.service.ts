import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Subject } from 'rxjs';


const URL = '../../assets/Mock/slides.ts'

@Injectable({
  providedIn: 'root'
})
export class dataService {


  isHomeSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isHome = this.isHomeSubject.asObservable();

  setIsHome = (value: boolean) => {
    this.isHomeSubject.next(value)
  }
  
 


  navItems: {label: string, url: string, fragment:string | undefined} [] = [
    {
      label: 'home',
      url: 'home',
      fragment: undefined,
    },
    {
      label: 'about us',
      url: '',
      fragment: 'about-us'
    },
    {
      label: 'ingredienti',
      url: '',
      fragment: 'ingredienti'
    },
    {
      label: 'pizzeria',
      url: 'menu-pizzeria',
      fragment: 'pizzeria'
    },
    {
      label: 'ristorante',
      url: 'menu-ristorante',
      fragment: 'ristorante'
    },
    {
      label: 'prenota',
      url: '',
      fragment: 'prenota'
    },
    {
      label: 'contatti',
      url: '',
      fragment: 'contatti'
    },
  ]

  cardsList: {image: string, title: string, description: string, id: string}[]  = [
    {
      image: 'pan',
      title: 'About us',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cupiditate totam vero. Unde tenetur quisquam illum eveniet nemo dignissimos minima ad harum quo. Non et laboriosam iure. Quidem, ducimus a?',
      id: 'about-us'
    },
    {
      image: 'ingredients',
      title: 'Ingredienti',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cupiditate totam vero. Unde tenetur quisquam illum eveniet nemo dignissimos minima ad harum quo. Non et laboriosam iure. Quidem, ducimus a?',
      id: 'ingredienti'
    },
    {
      image: 'pizza',
      title: 'Pizzeria',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cupiditate totam vero. Unde tenetur quisquam illum eveniet nemo dignissimos minima ad harum quo. Non et laboriosam iure. Quidem, ducimus a?',
      id: 'pizzeria'
    },
    {
      image: 'restourant',
      title: 'Ristorante',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cupiditate totam vero. Unde tenetur quisquam illum eveniet nemo dignissimos minima ad harum quo. Non et laboriosam iure. Quidem, ducimus a?',
      id: 'ristorante'
    },
  ]


  getDataCarousel() {
    // metodo che recupera i dati dall'array slides 
    // return this.http.get(URL)
  }

}
