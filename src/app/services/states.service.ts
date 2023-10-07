import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  // variabili per cambiare menu => fragment contatti e prenota
  // codice ripetitivo
  //TODO: DA RIVEDERE 
  // TODO: BUG ISPIZZERIA E SCROLL MENU (RIVEDERE ESPRESSIONE SCROLL)
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
  constructor() { }
}
