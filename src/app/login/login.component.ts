import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
/* import { CommonService } from 'src/app/common.service'; */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:any = FormGroup;
  users:any = [];
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      name:['',Validators.required],
      contra:['',Validators.compose([Validators.required,Validators.email])]
    })

  }
  loginForm(data:any){
    console.log(data)
    if(data.name){
        console.log(data.name)
        if(data.name === 'hola' && data.contra === '123'){
          localStorage.setItem("isLoggedIn","true");
          this.router.navigate(['home']);
          console.log("Entro");

        }
        else{
          localStorage.clear();
        }

    }
  }
  goToRegister(){
    this.router.navigate(['home'])
  }
}
