import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { Task, TaskService } from "../shared";

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  @ViewChild ( 'formTask', {static: false} ) formTask: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
    this.task = new Task();
  }

  registry(): void {
    if ( this.formTask.form.valid ) {
      this.taskService.addTask(this.task);
      this.router.navigate(["/tasks"])
    }
  }

}
