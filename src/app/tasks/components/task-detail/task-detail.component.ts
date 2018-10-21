import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService }  from '../../services/task.service';
import { Task } from '../../model/task';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  taskForm: FormGroup;
  task: any;
  taskSelected: Task;
  constructor( 
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      taskName: ['', Validators.required],
      taskDate: ['', Validators.required]
    });
    
    const id = this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id);

    this.task = this.taskService.task.subscribe((task: Task) => {
      const date : any = task.taskDate;
      task.taskDate = new Date(date.toDate());
      this.taskForm.patchValue(task);
      this.taskSelected = task;
      });
     
  }

  update(): void {
    const task = new Task(this.taskForm.value.taskName, this.taskForm.value.taskDate);
    task.id = this.taskSelected.id;
    task.completed = this.taskSelected.completed;
    this.taskService.updateTask(task);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
  //getTask(): void {
   // const id = +this.route.snapshot.paramMap.get('id');
   // this.task = this.taskService.getTask(id.toString());
  //}
}
