import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class AppComponent {
  constructor(private readonly router: Router) {}

  openPermit(path: string) {
    window.open(path, '_blank');
  }

  isPrintRoute(): boolean {
    return [
      '/retailer-permit-print',
      '/dealer-permit',
      '/service-center-permit',
    ].includes(this.router.url);
  }
}
