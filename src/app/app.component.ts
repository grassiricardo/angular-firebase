import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireDatabase]
})
export class AppComponent {
  title = 'app works!';

  public items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.items = af.list('/items');
  }
}
