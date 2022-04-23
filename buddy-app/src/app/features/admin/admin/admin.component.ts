import { Component, OnInit } from '@angular/core';
import { dataService } from './../../../services/data.service';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  news : any = {
    heading : null,
    content : null,
    author : null,
    dateofnews : null
  }

  isnNewsPosted: any;

  constructor(
    private dataService : dataService,
    private ngxService: NgxUiLoaderService
  ) { 
    this.isnNewsPosted = false;
  }

  ngOnInit(): void {
  }

  postNews(news: any){
    this.ngxService.startLoader("loader-post-news"); 
    this.dataService.postNews(news).subscribe(response => {
      if (response) {
        this.isnNewsPosted = true;
        this.ngxService.stopLoader("loader-post-news");
      }
    });
  }

}
