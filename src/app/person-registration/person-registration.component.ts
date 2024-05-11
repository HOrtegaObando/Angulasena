import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-person-registration',
  templateUrl: './person-registration.component.html',
  styleUrls: ['./person-registration.component.css'],
  imports: [ReactiveFormsModule],
})
export class userRegistrationComponent implements OnInit {
  registrationForm!: FormGroup; // Initialize with non-null assertion

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // Prevent default form submission if invalid
    if (this.registrationForm.invalid) {
      return;
    }

    const usernameValue = this.registrationForm.get('username')?.value;
    const emailValue = this.registrationForm.get('email')?.value;
    const passwordValue = this.registrationForm.get('password')?.value;

    // Check for null values and handle appropriately (optional)
    if (!usernameValue || !emailValue || !passwordValue) {
      console.error('Error: One or more form values are null.');
      return;
    }

    const formData = {
      username: usernameValue,
      email: emailValue,
      password: passwordValue
    };

    // Implement your backend API call here (replace with your actual logic)
    console.log('Form data:', formData);

    // Reset the form after successful submission (optional)
    this.registrationForm.reset();
  }
}