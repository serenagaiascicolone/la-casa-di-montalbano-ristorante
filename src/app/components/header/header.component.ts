
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
  private activatedRoute: ActivatedRoute, 
  private dataSrv: dataService, 
  private stateSrv: StatesService) { 
this.scrolling = false
}




// array per ciclare e creare menu e cards in sections
  cards:{image: string, title: string, description: string, id: string}[] = this.dataSrv.cardsList
  
  // variabile da servizio che ascolta Header per cambiare menu in base alle rotte (le azioni provengono da sections)
 isHome: boolean;
 isRistorante: boolean;
 isPizzeria: boolean;
 sub: Subscription

// cambiare classe header in base allo scrolling della pagina
 scrolling: boolean; 
@HostListener('window:scroll', ['$event']) onScrollEvent(){

  if(document.documentElement.scrollTop > 500){
    this.scrolling = true
  
  }else {
    this.scrolling = false
  }
  // if(!this.scrolling){
  //   this.scrolling = true
  // }
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
  }
  // chiudi la navbar quando clicchi su una voce del menu 
 
  
  closeCollapse(event: Event){
    if ((<HTMLAnchorElement>event.target).tagName === 'A'){
      this.collapse = false
    }
  }

// subscribe : per rotta corrente
routerEvents: Subscription; 

// variabile per verificare l'url corrente 
currentLocation: string; 



ngOnInit(): void {
  // url corrente 
  this.routerEvents = this.router.events.subscribe(
    (event:any)=>{
      if(event instanceof NavigationEnd){
        this.currentLocation = event.url;
   
      }
    }
    ) 
    // header sta in ascolto sulle variabili che consentono il cambio menu 
   this.sub = this.stateSrv.isHome.subscribe((value) => {
      this.isHome = !value;
   
    }
    )
   this.sub = this.stateSrv.isRistorante.subscribe((value) => {
      this.isRistorante = value;
  
    })
   this.sub = this.stateSrv.isPizzeria.subscribe((value) => {
      this.isPizzeria = value;
  
    }
    )

  }
  


ngOnDestroy(): void {
  // distruggiamo le subscribe 
  this.routerEvents.unsubscribe();
  // Annulla l'iscrizione per evitare perdite di memoria
  this.sub.unsubscribe()
}
}

