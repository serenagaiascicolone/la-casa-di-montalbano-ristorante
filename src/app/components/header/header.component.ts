import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
navItems = ['about us', 'ingredienti', 'pizzeria', 'ristorante', 'prenota', 'contatti']
collapse = false;

onToggleMenu() {
 this.collapse = !this.collapse; 
}

}
