import { Component, OnInit } from '@angular/core';
import { dataService } from './../../../services/data.service';
import { NgxUiLoaderService } from "ngx-ui-loader";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isRegisterPageOpen: boolean;
  user: any =  {
    username : null,
    id : null,
    email : null,
    password : null
  }

  constructor(
    private dataService : dataService,
    private ngxService: NgxUiLoaderService,
    private router: Router
  ) { 
    this.isRegisterPageOpen = true;
  }

  ngOnInit(): void {
  }

  registerNewUser(newUser: any){
    this.ngxService.startLoader("loader-register-newuser"); 
    this.dataService.registerNewUser(newUser).subscribe((response: any) => {
      if (response) {
        alert("User has been registered successfully.");
        this.ngxService.stopLoader("loader-register-newuser");
        this.router.navigate(['/login']);
      }
    });
  }
}
