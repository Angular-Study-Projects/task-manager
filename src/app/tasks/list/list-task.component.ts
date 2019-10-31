import { Component, OnInit } from '@angular/core';

import { Task, TaskService } from "../shared";

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Task[];

  constructor( private taskService: TaskService )  {}

  ngOnInit() {
    this.tasks = this.listAll();
  }

  listAll (): Task[] {
    return this.taskService.listAll();
  }

  remove( $event: any, task: Task ): void {
    $event.preventDefault();
    if ( confirm( 'Would you like to remove ' + task.name + '?' ) ) {
      this.taskService.remove(task.id);
      this.tasks = this.taskService.listAll();
    }
  }
  changeStatus( task: Task ): void {
    if ( confirm( 'Would you like to change ' + task.name + ' to completed?' ) ) {
      this.taskService.changeStatus(task.id);
      this.tasks = this.taskService.listAll();
    }
  }

}
