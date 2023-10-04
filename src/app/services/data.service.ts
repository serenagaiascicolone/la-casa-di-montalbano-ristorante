import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

const URL = '../../assets/Mock/slides.ts'

@Injectable({
  providedIn: 'root'
})
export class dataService {

  constructor() {}



  getDataCarousel() {
    // metodo che recupera i dati dall'array slides 
    // return this.http.get(URL)
  }

}
