import { Routes } from '@angular/router';
// import { DealerPermitComponent } from './dealer-permit/retailer-permit.component';
import { PermitPrintComponent } from './permit-print/permit-print.component';
import { RetailerPermitComponent } from './retailer-permit/retailer-permit.component';

export const routes: Routes = [
  { path: 'print-permit', component: PermitPrintComponent },
  // { path: 'dealer-permit', component: DealerPermitComponent },
  { path: 'retailer-permit', component: RetailerPermitComponent },
];
