import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from "@angular/forms"
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private router: Router, private register_service: RegisterService) {

  }
  compoName = "signup"
  genderSelected: any = ""
  signUpValues: any = {}
  navigateToRegister() {
    this.router.navigate(['/loginIn'])
  }

  signUpDetails = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    mobile: new FormControl(""),
    password: new FormControl(""),
    confirmPassword: new FormControl(""),
    dob: new FormControl("")
  })

  onSubmit() {
    this.signUpValues = { ...this.signUpValues, ...this.signUpDetails.value, gender: this.genderSelected.toLowerCase() }
    this.register_service.registerNewUser(this.signUpValues).subscribe(response => {
      // console.log(response)
      this.router.navigate(["/loginIn"])
    },
      error => {
        console.log(error)
      })
  }


}
