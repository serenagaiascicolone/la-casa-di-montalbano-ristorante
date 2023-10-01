import { Component, OnInit, ViewChild } from '@angular/core';
import { slides } from 'src/assets/Mock/slides';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
// creo array
slidesList = slides;


currentIndex: number = 0


onSelectedImage (i: number) {
this.currentIndex = i
}


getFirstSlide () {
  return this.slidesList[this.currentIndex].img
}

getNextSlide() {
  // ultima slide = current index uguale alla lunghezza dell'array - 1
  const isLastSlide = this.currentIndex === this.slidesList.length - 1;
  // la slide da visualizzare 
  // controllo quale slide sto visualizzando: è l'ultima alla ora dovrò visualizzare la prima,
  // altrimenti incremento currentIndex
  const newIndex = isLastSlide ? 0 : this.currentIndex + 1
  this.currentIndex = newIndex;
  // this.ref.nativeElement.classList.add('active')
}

getPreviousSlide() {
  const isFirstSlide = this.currentIndex === 0;
  const newIndex = isFirstSlide ? this.slidesList.length - 1 : this.currentIndex - 1;
  this.currentIndex = newIndex 
}

constructor() {
}


ngOnInit(): void {

  }
}

