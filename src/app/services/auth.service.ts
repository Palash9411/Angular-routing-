import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   

  public  isloggedIn: boolean = false ;
  private userName:string = '';
  constructor() { }

  
  login(username: string, password:string):Observable<Boolean> {
 
    //Assuming users are provided the correct credentials.
    //In real app you will query the database to verify.
    this.isloggedIn=true;
    this.userName=username;
    return of(this.isloggedIn);
   }

   isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

   isAdminUser():boolean {
   
    if (this.userName.toLowerCase()==='admin') {
        return true; 
    }
    return false;
   }

   logoutUser(): void{
    this.isloggedIn = false;
  }
}
