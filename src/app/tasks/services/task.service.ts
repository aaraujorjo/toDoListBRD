import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskCollection: AngularFirestoreCollection<Task>;
  private taskDoc: AngularFirestoreDocument<Task>;
  tasks: Observable<Task[]>;
  task: Observable<any>;
  taski: Task;
  constructor(private readonly afs: AngularFirestore) {
    this.taskCollection = afs.collection<Task>('tasks', ref => ref.orderBy('taskDate', 'desc'));
    this.tasks = this.taskCollection.snapshotChanges().pipe(
      map(tasks => tasks.map(a => {
        const data = a.payload.doc.data() as Task;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getAllTasks() {
    this.tasks = this.taskCollection.snapshotChanges().pipe(
      map(tasks => tasks.map(a => {
        const data = a.payload.doc.data() as Task;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  addTask(task: Task) {
    const id = this.afs.createId();
    this.taskCollection.doc(id).set(Object.assign({}, task)).catch(err => console.log(err));;
  }

  getTask(id: string) {
    this.taskDoc = this.afs.doc<Task>('tasks/' + id);
    this.task = this.taskDoc.snapshotChanges().pipe(
      map(a => {
        const data = a.payload.data() as Task;
        const id = a.payload.id;
        return { id, ...data };
      })
    );
  }


  removeTask(id: string) {
    this.taskCollection.doc(id).delete().catch(err => console.log(err));
  }

  updateTask(task: Task) {
    this.taskCollection.doc(task.id).update((Object.assign({}, task))).catch(err => console.log(err));;
  }

}
