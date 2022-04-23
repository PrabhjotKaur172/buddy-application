import { Component, OnInit } from '@angular/core';
import { dataService } from './../../../services/data.service';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {
    email : null,
    password : null
  }

  constructor(
    private dataService : dataService,
    private ngxService: NgxUiLoaderService
    ) { }

  ngOnInit(): void {
  }

  loginUser(user : any){
    this.ngxService.startLoader("loader-login-user"); 
    this.dataService.loginUser(user).subscribe((response: any) => {
      if (response) {
        alert(response);
        this.ngxService.stopLoader("loader-login-user");
      }
    });
  }

}
