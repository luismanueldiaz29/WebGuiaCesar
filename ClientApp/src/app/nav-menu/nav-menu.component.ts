import { Component } from '@angular/core';
import { MaterialModule } from '../material/material';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  imports : [MaterialModule];
  isExpanded = false;

  constructor(){

  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
