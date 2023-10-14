import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(private stateSrv: StatesService){}

  @Input() payload: {user: {name: string, surname: string, email: string, telephone: number}, message: string, consent: {marketing: string, privacy: null | boolean }}
  
  isSubmitted = this.stateSrv.isSubmitted
  closeModal() {
    this.stateSrv.setIsSubmitted(false)
  }
}
