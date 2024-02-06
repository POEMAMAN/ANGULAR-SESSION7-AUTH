import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
registerForm!: FormGroup

constructor(private fb: FormBuilder, private authService: AuthService){
  this.registerForm = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(8), Validators.maxLength(12)]]
  })

}

formHandler() {
  if(this.registerForm.valid){
    const {name, surname, email, password} = this.registerForm.value;
    const objectToSend = {
      name,
      surname,
      email,
      password
    }
      this.authService.register(objectToSend).subscribe({
  
        next: (response) => {
          console.log(response)
        },
        error: (error) => {

        }
      })
      this.registerForm.reset()
      }
  }
}



