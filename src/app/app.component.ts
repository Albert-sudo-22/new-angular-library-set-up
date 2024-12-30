import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BadgeOverviewExample } from './Badge/badge-overview-example.component';
import { AutocompleteRequireSelectionExample } from './AutoComplete/Required autoComplete/autocomplete-require-selection-example.component';
import { AutocompleteSimpleExample } from './AutoComplete/Simple/autocomplete-simple-example.component';
import { BottomSheetOverviewExample } from './Bottom Sheet/bottom-sheet-overview-example.component';
import { ButtonOverviewExample } from './Buttons/button-overview-example.component';
import { ButtonToggleModeExample } from './Buttons toggle/button-toggle-mode-example.component';
import { CardFancyExample } from './Cards/card-fancy-example.component';
import { ChipsReactiveFormExample } from './Chips/chips-reactive-form-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BadgeOverviewExample, AutocompleteRequireSelectionExample
    ,AutocompleteSimpleExample,BottomSheetOverviewExample, ButtonOverviewExample,
    ButtonToggleModeExample, CardFancyExample, ChipsReactiveFormExample
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
}
