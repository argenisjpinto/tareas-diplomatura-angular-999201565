import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.minLength(10), Validators.maxLength(200)]],
    });
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
    }
  }

  getErrors(field: string): string[] {
    const control = this.form.get(field);

    if (!control || !control.touched || !control.errors) {
      return [];
    }

    const errorMap: any = {
      required: 'Este campo es obligatorio.',
      minlength: `Debe tener mínimo ${control.errors?.['minlength']?.requiredLength} caracteres.`,
      maxlength: `Debe tener máximo ${control.errors?.['maxlength']?.requiredLength} caracteres.`,
      email: 'Formato de email inválido.'
    };

    return Object.keys(control.errors).map(key => errorMap[key]);
  }
}