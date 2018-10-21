import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar layout-align="center center" color="accent">
    <img src="assets/images/todolistlogo-1.png" class="title-center">
  </mat-toolbar>
  <router-outlet></router-outlet>
  <br><br>
  <footer></footer>
  `
})
export class AppComponent {
  items: Observable<any[]>;
  title = 'toDoListBRD';
  constructor(db: AngularFirestore, private translate: TranslateService) {
    this.items = db.collection('items').valueChanges();
    this.translate.setDefaultLang('pt-br');
    this.translate.use('pt-br');
  }
  
  
}
