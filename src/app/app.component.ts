import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-router';
  
  constructor (private authService:AuthService, 
    private router:Router) {
}

logout() {
  if(this.authService.isloggedIn){
    this.authService.logoutUser();
    this.router.navigate(['home']);
  }

}
}
