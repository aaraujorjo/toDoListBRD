import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './model/task';
import { TaskService }  from './services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getAllTasks();
    this.tasks$  = this.taskService.tasks;    
  }
  
  onRemoveTask(task) {
    this.taskService.removeTask(task);
  }

  onUpdateTask(task) {
    this.taskService.updateTask(task);
  }
}
