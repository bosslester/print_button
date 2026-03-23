import { Component } from '@angular/core';

@Component({
  selector: 'app-permit-print',
  standalone: true,
  templateUrl: './permit-print.component.html',
  styleUrls: ['./permit-print.component.css']
})
export class PermitPrintComponent {

  print() {
    window.print();
  }
}