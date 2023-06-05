import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router:Router){

  }
  @Input() sidebarValue = ''

  onButtonClick(val: string) {
    this.router.navigate([val])
  }

  logoutUser(){
    localStorage.removeItem("clickUp_userData")
    this.router.navigate(['/loginIn'])
  }
}
