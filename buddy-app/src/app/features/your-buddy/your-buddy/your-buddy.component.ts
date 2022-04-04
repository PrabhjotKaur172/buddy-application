import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-buddy',
  templateUrl: './your-buddy.component.html',
  styleUrls: ['./your-buddy.component.css']
})
export class YourBuddyComponent implements OnInit {

  isMessageBoxOpened:boolean = false;

  buddy: any = {
    name : '',
    bio : '',
    module : '',
    moduleStartDate : null,
    moduleEndDate : null,
    country : '',
    hobby : ''
  }

  constructor() { }

  ngOnInit(): void {
    this.buddy = {
      image : './../../../assets/images/profile-picture.jpg',
      name : 'Ankit Khule',
      bio : 'I have completed my Masters in Business Analytics with 1:1 score in January 2022.',
      module : 'Msc in Business Analytics',
      moduleStartDate : '25-01-2021',
      moduleEndDate : '30-01-2022',
      country : 'India',
      hobby : 'Football'
    }
  }

  displayBuddyInfo(event: any){
    this.isMessageBoxOpened = event;
  }

  displayMessageBox(event: any){
    this.isMessageBoxOpened = event;
  }

}
