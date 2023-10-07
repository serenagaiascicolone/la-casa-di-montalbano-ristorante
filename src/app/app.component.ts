import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ristorante-app';

// scroll al top della pagina
onActivate(event: any){
  window.scroll ({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

}
