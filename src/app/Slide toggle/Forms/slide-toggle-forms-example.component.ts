import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatSlideToggleModule,
  _MatSlideToggleRequiredValidatorModule,
} from '@angular/material/slide-toggle';

/**
 * @title Slide-toggle with forms
 */
@Component({
  selector: 'slide-toggle-forms-example',
  templateUrl: './slide-toggle-forms-example.component.html',
  styleUrls: ['./slide-toggle-forms-example.component.css'], // Corrected from `styleUrl` to `styleUrls`
  standalone: true,
  imports: [
    MatSlideToggleModule,
    FormsModule,
    _MatSlideToggleRequiredValidatorModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class SlideToggleFormsExample {
  isChecked = true;
  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.formGroup = this._formBuilder.group({
      enableWifi: '',
      acceptTerms: ['', Validators.requiredTrue],
    });
  }

  alertFormValues() {
    alert(JSON.stringify(this.formGroup.value, null, 2));
  }
}
