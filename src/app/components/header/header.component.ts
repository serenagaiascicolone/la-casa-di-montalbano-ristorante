
import {Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
navItems = ['home', 'about us', 'ingredienti', 'pizzeria', 'ristorante', 'prenota', 'contatti']
collapse = false;
navItemsHome = this.navItems.filter(item => item !== 'home')
navItemsPizzeria = this.navItems.filter(item => item !== 'pizzeria')
navItemsRistorante= this.navItems.filter(item => item !== 'ristorante')


// subscribe 
routerEvents: any; 

// variabile per verificare l'url corrente 
currentLocation: string; 
constructor(private router: Router, private activatedRoute: ActivatedRoute) {
}



onToggleMenu() {
  this.collapse = !this.collapse; 
}
ngOnInit(): void {
  this.routerEvents = this.router.events.subscribe(
    (event:any)=>{
      if(event instanceof NavigationEnd){
        this.currentLocation = event.url;
      }
    }
    )  
  }
  

ngOnDestroy(): void {
  this.routerEvents.unsubscribe();
  // Annulla l'iscrizione per evitare perdite di memoria
}
}

