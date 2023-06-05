import { Component } from '@angular/core';
import { UserDataService } from 'src/app/services/userData/user-data.service';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.css']
})
export class TodoModalComponent {
  user_list:any = "no value"
  condition:boolean = false
}
