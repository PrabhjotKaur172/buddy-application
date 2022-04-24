import { Component, OnInit } from '@angular/core';
import { dataService } from './../../services/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  student: any = {
    "email": null, 
    "id": null, 
    "username": ""
  }

  constructor(
    private dataService : dataService
  ) {
    this.dataService.userInfo$.subscribe(userData => {
      let data: any = userData;
      this.student = data;
      if(this.student == null || this.student == undefined){
        this.student = {
          "email": null, 
          "id": null, 
          "username": ""
        }
      }
    });
   }

  ngOnInit(): void {
  }

}
