import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private gbIsLoggedIn = false;

  constructor(private router: Router) { }

  
  public get isLoggedIn() : boolean {
    return this.gbIsLoggedIn;
  }

  
  public set loggedIn(v : boolean) {
    this.gbIsLoggedIn = v;
  }

  public logOut(): void {
    this.router.navigate(['login']);
  }
}
