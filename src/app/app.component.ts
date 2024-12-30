import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BadgeOverviewExample } from './Badge/badge-overview-example.component';
import { AutocompleteRequireSelectionExample } from './AutoComplete/Required autoComplete/autocomplete-require-selection-example.component';
import { AutocompleteSimpleExample } from './AutoComplete/Simple/autocomplete-simple-example.component';
import { BottomSheetOverviewExample } from './Bottom Sheet/bottom-sheet-overview-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BadgeOverviewExample, AutocompleteRequireSelectionExample
    ,AutocompleteSimpleExample,BottomSheetOverviewExample
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
}
