import { Component } from '@angular/core';

@Component({
  selector: 'app-amateur',
  standalone: true,
  templateUrl: './amateur.component.html',
  styleUrls: ['./amateur.component.css']
})
export class AmateurComponent {

  print() {
    window.print();
  }
}