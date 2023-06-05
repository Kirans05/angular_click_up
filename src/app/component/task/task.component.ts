import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDataService } from 'src/app/services/userData/user-data.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  constructor(public dialog: MatDialog) {
    var dialogRef
    dialogRef = this.dialog.open(todoDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openDialog(type: string) {
    var dialogRef
    if (type === 'todo') {
      dialogRef = this.dialog.open(todoDialog);
    } else if (type === 'progress') {
      dialogRef = this.dialog.open(progressDialog);
    } else {
      dialogRef = this.dialog.open(completedDialog);
    }

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  hoverTask = ""

  mouseEnterHandler(val: string) {
    this.hoverTask = val
  }


  mouseLeaveHandler() {
    this.hoverTask = ""
  }
}


@Component({
  selector: 'todoModal',
  templateUrl: '../modal/todo-modal/todo-modal.component.html',
})
export class todoDialog {
  user_list:any = 'no value'
  condition:boolean = false
  constructor(private user_data: UserDataService) {
    this.user_data.getAllUsers().subscribe(response => {
      console.log(response)
      let responseData:any = response
      this.user_list = responseData.data
    }, error => {
      console.log(error)
    })
  }
}


@Component({
  selector: 'todoModal',
  templateUrl: '../modal/progress-modal/progress-modal.component.html',
})
export class progressDialog { }


@Component({
  selector: 'todoModal',
  templateUrl: '../modal/completed-modal/completed-modal.component.html',
})
export class completedDialog { }