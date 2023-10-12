
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, IsActiveMatchOptions } from '@angular/router';
import {Subscription } from 'rxjs';
import { dataService } from 'src/app/services/data.service';
import { StatesService } from './../../services/states.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
constructor(private router: Router, 
  private dataSrv: dataService, 
  private stateSrv: StatesService) { 
this.scrolling = false
}






// array per ciclare e creare menu e cards in sections
  cards:{image: string, title: string, description: string, id: string}[] = this.dataSrv.cardsList
  


// cambiare classe header in base allo scrolling della pagina
 scrolling: boolean; 
@HostListener('window:scroll', ['$event']) onScrollEvent(){

  if(document.documentElement.scrollTop > 500){
    this.scrolling = true
  
  }else {
    this.scrolling = false
  }

}


 // per cambiare classe alle ancore selezionate 
 selectedIndex: number;

 setIndex(index: number){
  this.selectedIndex = index;
 }

// gestire classe attiva per i fragment
 linkActiveOptions: IsActiveMatchOptions = {
  matrixParams: 'exact',
  queryParams: 'exact',
  paths: 'exact',
  fragment: 'exact',
};


 // per far vedere la navBar 
 collapse = false;
 onToggleMenu() {
   this.collapse = !this.collapse; 
   this.stateSrv.setIsHero(true)
  }
  
  
  // chiudi la navbar quando clicchi su una voce del menu 
  closeCollapse(event: Event){
    if ((<HTMLAnchorElement>event.target).tagName === 'A'){
      this.collapse = false
    }
  }



// variabile per verificare l'url corrente 
// currentLocation = this.router.url; 

// funzione importata dal servizio che serve a controllare la rotta corrente
isRouteActive(url:string): boolean {
 return this.stateSrv.isRouteActive(url)
} 



ngOnInit(): void {

  }
  


ngOnDestroy(): void {
 ;
}
}

