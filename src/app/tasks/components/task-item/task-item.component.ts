import { Component, Input, EventEmitter, Output  } from '@angular/core';
import { Task } from './../../model/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent  {
  @Input() task: Task;
  @Output() remove: EventEmitter<any> = new EventEmitter(false);
  @Output() finish: EventEmitter<any> = new EventEmitter(false);
  @Output() edit: EventEmitter<any> = new EventEmitter(false);

  onRemove() {
    this.remove.emit(this.task);
  }

  onEdit() {
    this.edit.emit(this.task);
  }
  onFinish(){
    this.finish.emit(this.task);
  }
  constructor() { }

}
