import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { StatesService } from './../../services/states.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent implements OnInit, OnDestroy{
scrolling: boolean;

// in ascolto dell'evento scroll 
@HostListener('window:scroll', ['$event']) onScrollAndChangeClass(){
   
  if(document.documentElement.scrollTop > 0){
    this.scrolling = true;
  } else {
    this.scrolling = false;
  }
}

constructor(private router: Router, private activatedRoute: ActivatedRoute, private stateSrv: StatesService ){
}

// per controllare rotta corrente 
isRouteActive(url:string): boolean {
  return this.stateSrv.isRouteActive(url)
 } 

sub: Subscription;
isHeroUp: boolean;

  ngOnInit(): void {
   this.sub = this.stateSrv.isHeroUp.subscribe((value) => {
      this.isHeroUp = value;
    })    
    }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
