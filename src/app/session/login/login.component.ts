import { SessionService } from './../session.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public gsUserName: string;
  public gsPassword: string;

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) {
    this.gsUserName = '';
    this.gsPassword = '';
  }

  ngOnInit(): void {
  }

  /**
   * Redirecciona a la pantalla principal
   */
  goToMain(): void {
    this.sessionService.loggedIn = true;
    this.router.navigate(['home']);
  }
}
