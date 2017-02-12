import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  isCollapsed: boolean = true;

  constructor(private auth: AuthService) {
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
