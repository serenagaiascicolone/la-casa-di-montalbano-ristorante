import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
@Input() payload: {user: {name: string, surname: string, email: string, telephone: number}, message: string, consent: {marketing: string, privacy: null | boolean }}
 
ngOnInit(): void {
console.log(this.payload.user.name)
}

}








