import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,  
    HttpClientModule
  ],
  providers: [HttpClientModule],  
  bootstrap: [RegistrationFormComponent] 
})
export class AppModule { }