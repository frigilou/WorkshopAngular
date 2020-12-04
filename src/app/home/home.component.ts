import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';
import { LoginService } from '../Shared/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  UserName:string;
  PassWord:string;
  users:User[];
  login:boolean;

  constructor(private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.loginservice.GetAllUsers().subscribe(data=>this.users=data);
    this.login=false;
  }

  click_register(username:string,password:string){
    
    for(let i of this.users)
    {
      if(i.password=== this.PassWord && i.username=== this.UserName)
      { 
         const id:number=i.id;
         this.router.navigate(['gestion']);
      }
    }
    this.login= true;
  }


}
