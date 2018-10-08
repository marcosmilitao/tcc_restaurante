import { AuthService } from './shared/auth.service';
import {Component, OnInit} from "@angular/core";

import { AngularFireDatabase } from 'angularfire2/database';
import {  FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';


@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  user = null;
  restaurants: FirebaseListObservable<any[]>;

  content = 'Bem vindo ao FOOD SHOP !!'
  
  constructor(
    private auth: AuthService,
    public db: AngularFireDatabase) { }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

  ngOnInit() {
   this.auth.getAuthState().subscribe(  (user)=> this.user = user );

    
   
  }

}
