import { Component } from '@angular/core';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {


 constructor(private stateSrv: StatesService){}

 isRouteActive(url:string): boolean {
  return this.stateSrv.isRouteActive(url)
 } 

}
