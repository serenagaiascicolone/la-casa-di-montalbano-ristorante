import { Component, OnInit } from '@angular/core';
import { dataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

constructor(private dataSrv: dataService){}

ngOnInit(): void {
 
}

}
