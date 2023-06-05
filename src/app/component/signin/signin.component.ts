import { LoginService } from './../../services/login/login.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms"
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private router: Router, private Login_Service: LoginService) {

  }
  compoName = "signIn"
  loginDetails = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

  onSubmit() {
    this.Login_Service.loginUser(this.loginDetails.value).subscribe(response => {
      let ans: any = response
      localStorage.setItem('clickUp_userData', JSON.stringify(ans.data))
      this.router.navigate([`/home`])
    },
      error => {
        let loginErr : any = error
        alert(loginErr.error.error.message)
      }
    )
  }

  navigateToRegister() {
    this.router.navigate(['/signup'])
  }
}