import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { Task, TaskService } from "../shared";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @ViewChild ( 'formTask', {static: false} ) formTask: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit() { 
    const id = +this.router.snapshot.params['id'];
    this.task = this.taskService.searchById(id) 
  }

  update(): void {
    if ( this.formTask.form.valid ) {
      this.taskService.update(this.task);
      this.route.navigate(["/tasks"])
    }
  }

}
