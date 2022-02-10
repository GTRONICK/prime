import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private gbIsLoggedIn = false;

  constructor(private router: Router) {
    if ( sessionStorage.getItem('loggedIn') === 'true' ) {
      this.loggedIn = true;
    }
  }

  
  public get isLoggedIn() : boolean {
    return this.gbIsLoggedIn;
  }

  
  public set loggedIn(v : boolean) {
    if ( v ) {
      sessionStorage.setItem('loggedIn', 'true');
    }
    this.gbIsLoggedIn = v;
  }

  public logOut(): void {
    sessionStorage.clear();
    this.loggedIn = false;
    this.router.navigate(['login']);
  }
}
