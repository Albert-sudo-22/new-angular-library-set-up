import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Stepper with editable steps
 */
@Component({
  selector: 'stepper-editable-example',
  templateUrl: 'stepper-editable-example.component.html',
  styleUrl: 'stepper-editable-example.component.css',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class StepperEditableExample {
    firstFormGroup;
    secondFormGroup;
    isEditable = false;
  
    constructor(private _formBuilder: FormBuilder) {
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
      });
    }
  }
  
