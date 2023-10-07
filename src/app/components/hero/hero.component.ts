import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { StatesService } from './../../services/states.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent implements OnInit, OnDestroy{



constructor(private router: Router, private activatedRoute: ActivatedRoute, private stateSrv: StatesService ){
  // url corrente 
  this.routerEvents = this.router.events.subscribe(
    (event:any)=>{
      if(event instanceof NavigationEnd){
        this.currentLocation = event.url;

      }
    }
    ) 

}


isRouteActive(url:string): boolean {
  return this.stateSrv.isRouteActive(url)
 } 

  routerEvents: Subscription; 
  currentLocation: string; 
  // currentLocation2 = this.router.url

  currentFragment: string | null;
  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.fragment)
    this.routerEvents = this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      this.currentFragment = fragment
    })
    
    }

  ngOnDestroy(): void {
    this.routerEvents.unsubscribe()
  }

}
