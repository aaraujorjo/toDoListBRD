import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar layout-align="center center" color="primary">
    <img src="assets/images/todolistlogo-1.png" class="title-center">
  </mat-toolbar>
  <router-outlet></router-outlet>
  <footer></footer>
  `
})
export class AppComponent {
  items: Observable<any[]>;
  title = 'toDoListBRD';
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }
  
}
