import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder,
              private router : Router ,
              private activatedRoute:ActivatedRoute ,
              private authService: AuthService
              ) { }
  
  public loginForm !  : FormGroup ;

  retUrl:string | null ="home"; 

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username : ['',Validators.required],
      password : ['',Validators.required]
    }) ;
    
    this.activatedRoute.queryParamMap
              .subscribe(params => {
          this.retUrl = params.get('retUrl'); 
          console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
    });
  }
  onSubmit():void {
 
    this.authService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value).subscribe(data => {
           if (this.retUrl!=null) {
                this.router.navigate( [this.retUrl]);
           } else {
                this.router.navigate( ['home']);
           }
       });
    }
}
