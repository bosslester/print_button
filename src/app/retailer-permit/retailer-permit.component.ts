import { Component } from '@angular/core';

@Component({
  selector: 'app-retailer-permit',
  standalone: true,
  templateUrl: './retailer-permit.component.html',
  styleUrls: ['./retailer-permit.component.css']
})
export class RetailerPermitComponent {
  print() {
    window.print();
  }
}
