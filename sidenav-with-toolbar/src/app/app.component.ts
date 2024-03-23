import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sidenav-with-toolbar';

  isSideNavcollapsed = false;
  screenWidth = 0;
  onToggleSideNav(data:SideNavToggle) {
    this.screenWidth = data.screenWidth;
    this.isSideNavcollapsed = data.collapsed;

  };
}
