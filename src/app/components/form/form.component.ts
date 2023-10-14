import { TmplAstHoverDeferredTrigger } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StatesService } from './../../services/states.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
contactForm: FormGroup;

constructor(private stateSrv: StatesService){
}


  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'user': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'surname': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'telephone': new FormControl(null, [Validators.required,  Validators.pattern("^[0-9]*$")]),
      }),
        'message': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(500)]),
        'consent': new FormGroup({
          'marketing': new FormControl('accept', Validators.required),
          'privacy': new FormControl(null)
        })
      })

      this.subSubmit = this.stateSrv.isSubmitted.subscribe(value => {
        this.isSubmitted = value;
      })
}

// simulo l'invio al server dei dati della form/ in realtà li visualizzo nel componente 'modal'
subSubmit: Subscription
isSubmitted = false;
payload:  {user: {name: string, surname: string, email: string, telephone: number}, message: string, consent: {marketing: string, privacy: null | boolean }}= {
  user: {
    name: '',
    surname: '',
    email: '',
    telephone: 0,
  },
  message: '',
  consent: {
    marketing: '',
    privacy: null,
  }
}
onSubmit(){
  this.stateSrv.setIsSubmitted(true)
  this.payload.user.name = this.contactForm.value.user.name; 
  this.payload.user.surname = this.contactForm.value.user.surname; 
  this.payload.user.email = this.contactForm.value.user.email; 
  this.payload.user.telephone = this.contactForm.value.user.telephone;
  
  this.payload.message = this.contactForm.value.message;
  this.payload.consent.marketing = this.contactForm.value.consent.marketing;
  this.payload.consent.privacy = this.contactForm.value.consent.privacy;


  this.contactForm.reset(
    {
      user: {
        name: '',
        surname: '',
        email: '',
        telephone: '',
      },
      message: '',
      consent: {
        marketing: 'accept',
        privacy: null,
      }
    }
  )
}
}