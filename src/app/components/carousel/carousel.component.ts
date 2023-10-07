import { Component, OnInit, HostListener } from '@angular/core';
import { dataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor (private dataSrv: dataService) {

  }


  // creo array
slidesList = this.dataSrv.slides;



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




ngOnInit(): void {
  }
}

