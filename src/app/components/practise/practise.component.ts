import { Component } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent {
  onChangeFileField(event: any) {
    console.log(event.target.files[0])
  }




}
