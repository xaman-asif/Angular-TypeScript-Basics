import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  standalone: true,
  selector: 'app-app-nav',
  imports: [MatListModule],
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
})
export class AppNavComponent {}
