import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'sidenav-autosize-example',
  templateUrl: 'sidenav-autosize-example.component.html',
  styleUrl: 'sidenav-autosize-example.component.css',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule],
})
export class SidenavAutosizeExample {
  showFiller = false;
}
