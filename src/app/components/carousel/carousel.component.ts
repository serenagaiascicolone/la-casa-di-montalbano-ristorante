import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { dataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  constructor (private dataSrv: dataService) {
    this.scrolling = false
    // this.opacity = 0;
  }
  

  // aumentare opacity in base allo scroll del documento
  opacity: number;
  scrolling: boolean; 
  opacityString: string; 
  @HostListener('window:scroll', ['$event']) onScrollEvent(){
    let scroll = document.documentElement.scrollTop
      if(scroll >= 1){
        this.opacity = 0 + Math.round((scroll/1) * 10) / 10
        // diminuire opacità: this.opacity = Math.max(0, Math.min(1, -scroll/500 + 2))
        this.opacityString = String(this.opacity)
      
      }
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


slideSub: Subscription

ngOnInit(): void {
 this.slideSub = interval(5000).subscribe(value => this.getNextSlide())
  }

ngOnDestroy(): void {
  this.slideSub.unsubscribe()
}
}

