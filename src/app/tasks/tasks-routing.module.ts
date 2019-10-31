import { Routes } from '@angular/router';

import { ListTaskComponent } from "./list";
import { RegistryComponent } from "./registry";

export const TaskRouter: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list'
    },
    {
        path: 'tasks/list',
        component: ListTaskComponent
    },
    {
        path: 'tasks/registry',
        component: RegistryComponent
    }
]