import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  user = null;
  constructor(
    private auth: AuthService,
    public db: AngularFireDatabase) { }

  ngOnInit() {
    this.auth.getAuthState().subscribe(  (user)=> this.user = user );
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
}
