import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/Model/user';
import { SigninService } from 'src/app/Services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 loginForm!:FormGroup;
 user= new User();

  constructor(private formBuilder:FormBuilder , private userService:SigninService) { }

  ngOnInit(): void {

  }

  login(){
       console.log(this.user);
       this.userService.loginUser(this.user).subscribe(data=>
        {
          alert("login success");
        }
        ,error=>alert("Please enter correct UserId and Password "));

  }

}
