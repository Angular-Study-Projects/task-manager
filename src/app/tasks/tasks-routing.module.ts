import { Routes } from '@angular/router';

import { ListTaskComponent } from "./list";
import { RegistryComponent } from "./registry";
import { EditComponent } from "./edit";


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
    },
    {
        path: 'tasks/edit/:id',
        component: EditComponent
    }
]