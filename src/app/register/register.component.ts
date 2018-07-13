import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public myId="testId";
  name ="Selman";
  public yaz = "Yine mi sen!";

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Merhaba" + " " + this.name;
  }

  Renk(event){
    console.log(event);
    }  
}
