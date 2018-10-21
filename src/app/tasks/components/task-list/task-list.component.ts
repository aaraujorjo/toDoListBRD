import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../model/task';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  @Input('tasks') tasks$: Observable<Task[]>;
  @Output() remove: EventEmitter<any> = new EventEmitter(false);
  @Output() edit: EventEmitter<any> = new EventEmitter(false);
  @Output() finish: EventEmitter<any> = new EventEmitter(false);

  onRemove(task) {
    this.remove.emit(task);
  }

  onUpdate(task) {
    this.edit.emit(task);
  }
  onFinish(task){
    this.finish.emit(task);
  }


}
