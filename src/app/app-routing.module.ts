import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskRouter } from './tasks';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tasks/list',
    pathMatch: 'full'
  },
  ...TaskRouter
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
