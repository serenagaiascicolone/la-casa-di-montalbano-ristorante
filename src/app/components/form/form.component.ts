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


onSubmit(){
  
}
}