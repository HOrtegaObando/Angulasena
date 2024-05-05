import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { PasswordValidationService } from '../services/password-validation.service';
import { CommonModule } from '@angular/common';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { Router, RouterModule } from '@angular/router';
import { catchError, throwError } from 'rxjs';
//import { PasswordValidationService } from '../password-validation.service';

@Component({
  standalone: true,
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  imports: [ReactiveFormsModule, CommonModule, RouterModule]
})
export class RegistrationFormComponent {
  messageError!: String;
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private passwordValidationService: PasswordValidationService, 
    private _route: Router
  ) {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
    }, {
      validators: this.matchValidator('password', 'confirmPassword')
    });
  }

  matchValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (abstractControl: AbstractControl) => {
        const control = abstractControl.get(controlName);
        const matchingControl = abstractControl.get(matchingControlName);

        if (matchingControl!.errors && !matchingControl!.errors?.['confirmedValidator']) {
            return null;
        }

        if (control!.value !== matchingControl!.value) {
          const error = { confirmedValidator: 'Passwords do not match.' };
          matchingControl!.setErrors(error);
          return error;
        } else {
          matchingControl!.setErrors(null);
          return null;
        }
    }
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.passwordValidationService.login(this.registrationForm.value)
      .pipe(catchError(err => {
        this.messageError = err?.error;
        return throwError(err);
      }))
      .subscribe(() => {
          this.messageError = "";
          this._route.navigate(['product']);
        }
      );
    } else {
      // Aquí puedes mostrar un mensaje de error o realizar alguna otra acción si el formulario no es válido
      console.log('Formulario inválido, por favor revisa los campos');
    }
  }
}