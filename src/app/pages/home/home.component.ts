import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dataService } from 'src/app/services/data.service';
import { StatesService } from './../../services/states.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 

  constructor(private router: Router, 
    private dataSrv: dataService,
   ){
  }
cards: {image: string, title: string, description: string, id: string}[]= this.dataSrv.cardsList

goToPizzeria() {
this.router.navigate(['/menu-pizzeria'])


}

goToRistorante() {
  this.router.navigate(['/menu-ristorante'])
  
}

ngOnInit(): void {

}


}
