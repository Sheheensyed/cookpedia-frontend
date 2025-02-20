import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  testimonialForm: FormGroup

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.testimonialForm = this.fb.group({
      name: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]*")]],
      email: ["", [Validators.required, Validators.email]],
      message: ["", [Validators.required, Validators.pattern("^[a-zA-Z0-9!]*")]]
    })
  }

  addTestimonial() {
    if (this.testimonialForm.valid) {
      const name = this.testimonialForm.value.name
      const email = this.testimonialForm.value.email
      const message = this.testimonialForm.value.message
      // alert(`${name}, ${email},${message}`);

      this.api.addTestimonyApi({ name, email, message }).subscribe((res: any) => {
        alert(`Thanks for your valuable testimonial`)
        this.testimonialForm.reset()
      })

    } else {
      alert('Invalid form')
    }
  }
}
