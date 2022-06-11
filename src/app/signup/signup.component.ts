import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!:FormGroup;

  constructor(private formBuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      cpwd:['']
    });
  }

  signup(){
    console.log('here my user',this.signupForm.value);
  }



}
