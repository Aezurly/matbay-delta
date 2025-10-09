import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Constitutions } from '../../services/constitutions';

const N_SONGS_DEFAULT = 1;

@Component({
  selector: 'app-constitution-form',
  imports: [ReactiveFormsModule],
  templateUrl: './constitution-form.html',
  styleUrl: './constitution-form.scss'
})
export class ConstitutionForm {
  // Service injections
  private constitutions = inject(Constitutions);

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      nSongs: new FormControl(N_SONGS_DEFAULT, Validators.required),
    });
  }

  onSubmit(): void {
    // Check if all required fields are set
    if (!this.form.valid) return;

    // Send data
    this.constitutions.create(this.form.value);

    // Clean form
    this.form.reset();
  }
}
