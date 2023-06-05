import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {
  }
  @Input() name = ''
  goToPage(pageValue: string) {
    this.router.navigate([pageValue])
  }

  logoutUser(){
    localStorage.removeItem("clickUp_userData")
    this.router.navigate(["/loginIn"])
  }
}
