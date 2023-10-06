
import {Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, IsActiveMatchOptions } from '@angular/router';
import {Subscription } from 'rxjs';
import { dataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataSrv: dataService) { }

// array per ciclare e creare menu e cards in sections
  cards:{image: string, title: string, description: string, id: string}[] = this.dataSrv.cardsList
  
  // variabile da servizio che ascolta Header per cambiare menu in base alle rotte (le azioni provengono da sections)
 isHome: boolean;
 isRistorante: boolean;
 isPizzeria: boolean;
 sub: Subscription
 
 // per cambiare classe alle ancore selezionate (click definito nel template)
 selectedIndex: number;

// gestire classe attiva per i fragment
 linkActiveOptions: IsActiveMatchOptions = {
  matrixParams: 'exact',
  queryParams: 'exact',
  paths: 'exact',
  fragment: 'exact',
};

 setIndex(index: number){
  this.selectedIndex = index;
 }



 // per far vedere la navBar 
 collapse = false;
 onToggleMenu() {
   this.collapse = !this.collapse; 
  }
  // chiudi la navbar quando clicchi su una voce del menu 
  closeNavbar(){
    this.collapse = false;
  }
  
// subscribe : per rotta corrente
routerEvents: any; 

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
   this.sub = this.dataSrv.isHome.subscribe((value) => {
      this.isHome = !value;
      console.log(this.isHome)
    }
    )
   this.sub = this.dataSrv.isRistorante.subscribe((value) => {
      this.isRistorante = value;
      console.log('ristorante', this.isRistorante)
    })
   this.sub = this.dataSrv.isPizzeria.subscribe((value) => {
      this.isPizzeria = value;
      console.log('Pizzeria', this.isPizzeria)
    }
    )
  
  }
  
  // changeMenu() {
  //   this.dataSrv.setIsHome(false);
  //   this.closeNavbar()
  // }

ngOnDestroy(): void {
  // distruggiamo le subscribe 
  this.routerEvents.unsubscribe();
  // Annulla l'iscrizione per evitare perdite di memoria
  this.sub.unsubscribe()
}
}

