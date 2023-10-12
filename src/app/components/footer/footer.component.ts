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

goToContatti(){
this.router.navigate(['/contatti'])
}

}
