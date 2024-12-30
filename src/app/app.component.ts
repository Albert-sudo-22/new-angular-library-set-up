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
import { DatepickerCustomHeaderExample } from './Datepicker/datepicker-custom-header-example.component';
import { DialogContentExample } from './Dialog/dialog-content-example.component';
import { ExpansionStepsExample } from './Expansion/expansion-steps-example.component';
import { FormFieldOverviewExample } from './Form field/form-field-overview-example.component';
import { InputClearableExample } from './Input/input-clearable-example.component';
import { ListSingleSelectionExample } from './List/list-single-selection-example.component';
import { MenuNestedExample } from './Menu/menu-nested-example.component';
import { PaginatorOverviewExample } from './Paginator/paginator-overview-example.component';
import { ProgressBarConfigurableExample } from './Progress bar/progress-bar-configurable-example.component';
import { ProgressSpinnerOverviewExample } from './Progress spinner/progress-spinner-overview-example.component';
import { RadioNgModelExample } from './Radio button/radio-ng-model-example.component';
import { SelectCustomTriggerExample } from './Select/Select-custom-trigger-text/select-custom-trigger-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BadgeOverviewExample, AutocompleteRequireSelectionExample
    ,AutocompleteSimpleExample,BottomSheetOverviewExample, ButtonOverviewExample,
    ButtonToggleModeExample, CardFancyExample, ChipsReactiveFormExample,
    DatepickerCustomHeaderExample,DialogContentExample,ExpansionStepsExample,
    FormFieldOverviewExample, InputClearableExample, ListSingleSelectionExample,
    MenuNestedExample,PaginatorOverviewExample,ProgressBarConfigurableExample,
    ProgressSpinnerOverviewExample, RadioNgModelExample, SelectCustomTriggerExample
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
}
