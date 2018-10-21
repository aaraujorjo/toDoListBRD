import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Task } from '../../model/task';
import { TaskService }  from '../../services/task.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  taskForm = new FormGroup({
    taskName: new FormControl('', Validators.required),
    taskDate: new FormControl('', Validators.required),
  });
  

  constructor(private location: Location, private taskService: TaskService, private translate: TranslateService) {
    this.translate.setDefaultLang('pt-br');
    this.translate.use('pt-br') 
  }

  ngOnInit() {
  }
  
  add(): void {
    const task = new Task(this.taskForm.value.taskName, this.taskForm.value.taskDate);
    this.taskService.addTask(task);
    this.goBack();
  }
  goBack(): void {
    this.location.back();
  }
}
