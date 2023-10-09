import { Component } from '@angular/core';
import { StatesService } from './services/states.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ristorante-app';
  constructor(private stateSrv: StatesService){}
// scroll al top della pagina
onActivate(event: any){
  window.scroll ({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
isRouteActive(url:string): boolean {
  return this.stateSrv.isRouteActive(url)
 } 
 
}
