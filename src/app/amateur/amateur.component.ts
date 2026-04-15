import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-amateur',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './amateur.component.html',
  styleUrls: ['./amateur.component.css']
})
export class AmateurComponent {
  formData = {
    licensee: '',
    callSign: '',
    licenseClass: '',
    equipmentOne: '',
    equipmentTwo: '',
    address: '',
    stationLocation: '',
    validUntil: '',
    issuedOn: '',
    officialReceipt: '',
    amount: '',
    datePaid: '',
    cashier: '',
    footerLineOne: '',
    footerLineTwo: ''
  };

  print() {
    window.print();
  }
}
