import { Routes } from '@angular/router';
import { DealerPermitComponent } from './dealer-permit/dealer-permit.component';
import { RetailerPermitComponent } from './retailer-permit-print/retailer-permit-print.component';
import { ServiceCenterPermitComponent } from './service-center-permit/service-center-permit.component';
import { PTPurchasePermitComponent } from './ptpurchase/ptpurchase-permit-component';

export const routes: Routes = [
  { path: 'retailer-permit-print', component: RetailerPermitComponent },
  { path: 'dealer-permit', component: DealerPermitComponent },
  { path: 'service-center-permit', component: ServiceCenterPermitComponent },
  { path: 'ptpurchase', component: PTPurchasePermitComponent },

];