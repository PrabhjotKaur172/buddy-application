import { Component, OnInit} from '@angular/core';
import { dataService } from './../../../services/data.service';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-college-news',
  templateUrl: './college-news.component.html',
  styleUrls: ['./college-news.component.css']
})
export class CollegeNewsComponent implements OnInit {

  collegeNews: any = [{
    heading : '',
    author : '',
    date : '',
    content : ''
  }];

  constructor(
    private dataService : dataService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
  this.getCollegeNews();
  }

  getCollegeNews(){
     this.ngxService.startLoader("loader-get-collegenews"); 
     this.dataService.getCollegeNews().subscribe( response => {
        this.collegeNews = response;
        this.ngxService.stopLoader("loader-get-collegenews"); 
     });
  }

  updateNews(news : any){
    this.dataService.updateNews(news).subscribe( response => {
       let updatedNews: any = response;
       this.collegeNews.forEach((news: any) => {
         if(news.id === updatedNews.id){
            news = updatedNews;
         }
       });
    })
  }

}
