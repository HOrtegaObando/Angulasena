import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidationService } from '../services/password-validation.service';
//import { PasswordValidationService } from '../password-validation.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private passwordValidationService: PasswordValidationService) {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordValidationService.matchingPasswords('password', 'confirmPassword')
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Aquí puedes enviar los datos del formulario al servidor
      console.log('Formulario válido, datos enviados:', this.registrationForm.value);
    } else {
      // Aquí puedes mostrar un mensaje de error o realizar alguna otra acción si el formulario no es válido
      console.log('Formulario inválido, por favor revisa los campos');
    }
  }
}