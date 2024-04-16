import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})
export class SampleComponent {
  testForm! :  FormGroup;
  showFormData = false;
  ngOnInit(): void {
    this.testForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email:['',Validators.required],
      password: ['',Validators.required]
    });
    
}
constructor(
  private formBuilder: FormBuilder,
) { }
  onSubmit() {
    if (this.testForm.valid) {
      console.log('Form submitted successfully!');
      console.log('Form Data:', this.testForm.value);
      this.showFormData = true; // Set the flag to true after submitting the form
    } else {
      console.error('Form is invalid!');
    }
  }
}
