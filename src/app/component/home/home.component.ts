import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from "@angular/forms"
import { UserDataService } from 'src/app/services/userData/user-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private userDate:UserDataService) {
    this.getUserDetails()
  }

  userDetails: any = ""
  status: string = "show_details"
  genderSelected = ""
  editUserDetails: any = ""
  getUserDetails() {
    if (localStorage.getItem("clickUp_userData") == null) {
      this.router.navigate(['/loginIn'])
    } else {
      this.userDetails = localStorage.getItem("clickUp_userData")
      this.userDetails = JSON.parse(this.userDetails)
    }
  }

  changeStatus() {
    if (this.status == 'show_details') {
      this.status = 'edit_user'
      this.genderSelected = this.userDetails.gender
      this.editUserDetails = new FormGroup({
        firstName: new FormControl(this.userDetails.firstName),
        lastName: new FormControl(this.userDetails.lastName),
        gender: new FormControl(this.userDetails.gender),
        email: new FormControl(this.userDetails.email),
        mobile: new FormControl(this.userDetails.mobile),
        dob: new FormControl(this.userDetails.dob),
      })
    } else {
      this.status = 'show_details'
    }
  }


  editUserDetailsHandler() {
    let userData = { ...this.editUserDetails.value, gender: this.genderSelected }
    this.userDate.updateUserData(userData).subscribe(response => {
      console.log(response)
    },error => {
      console.log(error)
    })
  }
}
