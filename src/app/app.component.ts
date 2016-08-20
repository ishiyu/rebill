import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
  }

  addItem(value:string) {
    console.log('addItem');
    this.items.push({value:value});
  }

  updateItem(key:string, newValue:string) {
    this.items.update(key, { value: newValue });
  }

  removeItem(key:string) {
    this.items.remove(key);
  }

  removeAllItems() {
    this.items.remove();
  }
}
