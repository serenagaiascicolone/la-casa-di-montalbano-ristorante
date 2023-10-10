import { Component } from '@angular/core';

import { dataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-ristorante',
  templateUrl: './ristorante.component.html',
  styleUrls: ['./ristorante.component.scss']
})
export class RistoranteComponent {

  constructor(private dataSrv: dataService){}
dishes = this.dataSrv.restaurantList;

// ordine di categoria piatti
keepOrder = (a: any, b: any) => {
  return a;
}
 
}