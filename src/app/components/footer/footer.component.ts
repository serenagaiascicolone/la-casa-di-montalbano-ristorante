import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

constructor(private router: Router){}



ngOnInit(): void {
 
}
// attivare la classe 'active' nei button quando vengono cliccati 
activeButton: string
setActive (buttonName: string){
  this.activeButton = buttonName;

}

isActive (buttonName: string){
  return this.activeButton === buttonName
}


goToContatti(){
this.router.navigate(['/contatti'])
this.setActive('contatti')
}

goToStoreLocator() {
  this.setActive('map')
}

}
