import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';


const firebaseConfig = {
    apiKey: "E4fbo7isswisHsG0zEJKv7cx5r2ZXvz27F7ZVtkn",
    authDomain: "rebill-499bc.firebaseapp.com",
    databaseURL: "https://rebill-499bc.firebaseio.com/",
    storageBucket: "rebill-499bc.appspot.com"
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
