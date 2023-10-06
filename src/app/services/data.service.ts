import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Subject } from 'rxjs';


const URL = '../../assets/Mock/slides.ts'

@Injectable({
  providedIn: 'root'
})
export class dataService {

  // variabili per cambiare menu => fragment contatti e prenota
  // codice ripetitivo
  //TODO: DA RIVEDERE 
  isHomeSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isHome = this.isHomeSubject.asObservable();

  setIsHome = (value: boolean) => {
    this.isHomeSubject.next(value)
  }


  isRistoranteSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isRistorante = this.isRistoranteSubject.asObservable();

  setIsRistorante = (value: boolean) => {
    this.isRistoranteSubject.next(value)
  }

  isPizzeriaSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isPizzeria= this.isPizzeriaSubject.asObservable();

  setIsPizzeria = (value: boolean) => {
    this.isPizzeriaSubject.next(value)
  }

  // LIST PER RIEMPIRE SECTIONS COMPONENT E HEADER 
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


 

}
