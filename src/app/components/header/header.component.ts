
import {Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';
import { dataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  

  
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataSrv: dataService) { }

  
 isHome: boolean;
  sub: Subscription


  navItems: {label: string, url: string, fragment: string | undefined} [] = this.dataSrv.navItems
// navItem = this.navItems.map(item => item)
collapse = false;
// navItemsHome = this.navItems.filter(item => item !== 'home')
// navItemsPizzeria = this.navItems.filter(item => item !== 'pizzeria')
// navItemsRistorante= this.navItems.filter(item => item !== 'ristorante')
cards: {image: string, title: string, description: string, id: string}[]= this.dataSrv.cardsList; 




// subscribe 
routerEvents: any; 

// variabile per verificare l'url corrente 
currentLocation: string; 

// chiudi la navbar quando clicchi su una voce del menu 
closeNavbar(){
  this.collapse = false;

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
   this.sub = this.dataSrv.isHome.subscribe((value) => {
      this.isHome = !value;
      console.log(this.isHome)
    }
    )
  
  }
  
  changeMenu() {
    this.dataSrv.setIsHome(false);
    this.closeNavbar()
  }

ngOnDestroy(): void {
  this.routerEvents.unsubscribe();
  // Annulla l'iscrizione per evitare perdite di memoria
  this.sub.unsubscribe()
}
}

