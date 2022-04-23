import { Component, OnInit } from '@angular/core';
import { dataService } from './../../../services/data.service';
import { NgxUiLoaderService } from "ngx-ui-loader";
import { Router } from '@angular/router';

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
    private ngxService: NgxUiLoaderService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  loginUser(userInfo : any){
    this.ngxService.startLoader("loader-login-user"); 
    this.dataService.loginUser(userInfo).subscribe((response: any) => {
      if (response !== '' || response !== null || response !== undefined) {
        this.dataService.saveUserLoginInfo(response);
        this.router.navigate(['/myProfile']);
      } else {
        alert(response);
      }
      this.ngxService.stopLoader("loader-login-user");
    });
  }

}
