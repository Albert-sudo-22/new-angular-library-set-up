import {Component} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

/**
 * @title Basic slide-toggles
 */
@Component({
  selector: 'slide-toggle-overview-example',
  templateUrl: 'slide-toggle-overview-example.component.html',
  styleUrl:'slide-toggle-overview-example.component.css',
  standalone: true,
  imports: [MatSlideToggleModule],
})
export class SlideToggleOverviewExample {}
