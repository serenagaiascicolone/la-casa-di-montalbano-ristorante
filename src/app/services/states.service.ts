import { Injectable } from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  
  constructor(private router: Router) { }
 isRouteActive(url: string): boolean {
  const matchOptions: IsActiveMatchOptions = {
    paths: 'subset',
    queryParams: 'subset',
    fragment: 'ignored',
    matrixParams: 'ignored'
  };
  return this.router.isActive(url, matchOptions);
}

  isHeroUpSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isHeroUp = this.isHeroUpSubject.asObservable();

  setIsHero = (value: boolean) => {
    this.isHeroUpSubject.next(value)
  }

}
