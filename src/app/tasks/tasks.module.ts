import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskSearchComponent } from './components/task-search/task-search.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ],
  declarations: [
    TasksComponent,
    TaskFormComponent,
    TaskSearchComponent,
    TaskDetailComponent,
    TaskListComponent,
    TaskItemComponent
  ]
})
export class TasksModule { }
