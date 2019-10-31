import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService } from "./shared";
import { ListTaskComponent } from './list';
import { RegistryComponent } from './registry';
import { EditComponent } from './edit';

@NgModule({
  declarations: [ListTaskComponent, RegistryComponent, EditComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
