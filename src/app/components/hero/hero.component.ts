import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent implements OnInit, OnDestroy{



constructor(private router: Router){
  // url corrente 
  this.routerEvents = this.router.events.subscribe(
    (event:any)=>{
      if(event instanceof NavigationEnd){
        this.currentLocation = event.url;

      }
    }
    ) 

}




  routerEvents: Subscription; 
  currentLocation: string; 


  ngOnInit(): void {
    }

  ngOnDestroy(): void {
    this.routerEvents.unsubscribe()
  }

}
