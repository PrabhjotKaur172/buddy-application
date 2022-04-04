import { Component, OnInit } from '@angular/core';

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
    day : '',
    time : '',
    content : ''
  }];

  constructor() { }

  ngOnInit(): void {
    this.collegeNews = [
      {
        heading : 'Castle House - Re-Opened tomorrow 4th March',
        author : 'John Doe',
        date : '3 March 2022', 
        day : 'Thursday',
        time : '6:02 PM',
        content : 'Castle House will re-open tomorrow morning 4th March after a fire in an adjacent building this afternoon. All classes due on campus in Castle House will take place as normal. Thank you for your patience.'
      },
      {
        heading : 'Castle House - Re-Opened tomorrow 4th March',
        author : 'John Doe',
        date : '3 March 2022', 
        day : 'Thursday',
        time : '6:02 PM',
        content : 'Castle House will re-open tomorrow morning 4th March after a fire in an adjacent building this afternoon. All classes due on campus in Castle House will take place as normal. Thank you for your patience.'
      },
      {
        heading : 'Castle House - Re-Opened tomorrow 4th March',
        author : 'John Doe',
        date : '3 March 2022', 
        day : 'Thursday',
        time : '6:02 PM',
        content : 'Castle House will re-open tomorrow morning 4th March after a fire in an adjacent building this afternoon. All classes due on campus in Castle House will take place as normal. Thank you for your patience.'
      }
  ]
  }

}
