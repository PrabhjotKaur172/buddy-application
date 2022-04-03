import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

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
      name : 'Ankit Khule',
      bio : 'I have completed my Masters in Business Analytics with 1:1 score in January 2022.',
      module : 'Msc in Business Analytics',
      moduleStartDate : '25-01-2021',
      moduleEndDate : '30-01-2022',
      country : 'India',
      hobby : 'Football'
    }
  }

}
