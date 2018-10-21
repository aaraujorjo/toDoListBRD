export class Task {
    
    id: string;
    taskName: string;
    taskDate: Date;
    completed: boolean;
  
    constructor(taskName: string, taskDate: Date) {
      this.taskName = taskName;
      this.taskDate = taskDate;
      this.completed = false;
    }
  }