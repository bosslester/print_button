import { Component } from '@angular/core';

@Component({
  selector: 'app-ptpurchase-permit',
  standalone: true,
  templateUrl: './ptpurchase-permit-component.html',
  styleUrls: ['./ptpurchase-permit-component.css']
})
export class PTPurchasePermitComponent {

  print() {
    window.print();
  }
}
