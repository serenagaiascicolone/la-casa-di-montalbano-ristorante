import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
contactForm: FormGroup;


  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'user': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'surname': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'telephone': new FormControl(null, [Validators.required,  Validators.pattern("^[0-9]*$")]),
      }),
        'message': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
        'consent': new FormGroup({
          'marketing': new FormControl('accept', Validators.required),
          'privacy': new FormControl(null)
        })
      })
}

// simulo l'invio al server dei dati della form
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
  this.isSubmitted = true;
  this.payload.user.name = this.contactForm.value.user.name; 
  this.payload.user.surname = this.contactForm.value.user.surname; 
  this.payload.user.email = this.contactForm.value.user.email; 
  this.payload.user.telephone = this.contactForm.value.user.telephone;
  
  this.payload.message = this.contactForm.value.message;
  this.payload.consent.marketing = this.contactForm.value.consent.marketing;
  this.payload.consent.privacy = this.contactForm.value.consent.privacy;
  
  
  console.log(this.payload)
}
}