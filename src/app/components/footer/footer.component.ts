import { Component, OnInit } from '@angular/core';
import { dataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

constructor(private dataSrv: dataService){}
navItems = this.dataSrv.navItems
navItemsFragment = this.navItems.map(item => item.fragment)
prenotaFragment = this.navItemsFragment[5]
contattiFragment = this.navItemsFragment[6]
ngOnInit(): void {
 
}

}
