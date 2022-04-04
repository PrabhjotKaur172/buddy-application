import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { dataService } from './../../../services/data.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {
  user:any;
  connections:any = [];
  isDisplayConnection: boolean = false;
  selectedConnection: any;
  isMessageBoxOpened:boolean = false;

  constructor(
    private dataService : dataService
  ) { }

  ngOnInit(): void {
    this.dataService.student$.subscribe(user => {
      this.user = user;
    });
    this.connections = [
      {
        name : 'Prabhjot Kaur',
        studentId : 10570999,
        bio : 'Hi.. I have registered in MSc Business Analytics in September 2021 intake.',
        module : 'MSc in Business Analytics',
        moduleStartDate : '25-01-2021',
        moduleEndDate : '30-01-2022',
        country : 'India',
        hobby : 'Football',
        image : './../../../assets/images/profile-picture.jpg'
      },
      {
        name : 'Meghna',
        studentId : 10570998,
        bio : 'Hi.. I have registered in MSc Business Analytics in September 2021 intake.',
        module : 'MSc in Business Analytics',
        moduleStartDate : '25-01-2021',
        moduleEndDate : '30-01-2022',
        country : 'India',
        hobby : 'Playing Guitar',
        image : './../../../assets/images/profile-picture.jpg'
      },
      {
        name : 'Tushar',
        studentId : 10570997,
        bio : 'Hi.. I have registered in MSc Business Analytics in September 2021 intake.',
        module : 'MSc in Business Analytics',
        moduleStartDate : '25-01-2021',
        moduleEndDate : '30-01-2022',
        country : 'India',
        hobby : 'Cricket',
        image : './../../../assets/images/profile-picture.jpg'
      },
      {
        name : 'Sumit Bhoslae',
        studentId : 10570996,
        bio : 'Hi.. I have registered in MSc Business Analytics in September 2021 intake.',
        module : 'MSc in Business Analytics',
        moduleStartDate : '25-01-2021',
        moduleEndDate : '30-01-2022',
        country : 'India',
        hobby : 'Cooking',
        image : './../../../assets/images/profile-picture.jpg'
      }
    ];
  }

  openConnectionInfo(connection: any){
    this.isDisplayConnection = true;
    this.selectedConnection = connection;
  }

  openConnections(){
    this.isDisplayConnection = false;
    this.isMessageBoxOpened = false;
  }

  displayBuddyInfo(event: any){
    this.isMessageBoxOpened = event;
  }

  displayMessageBox(event: any){
    this.isMessageBoxOpened = event;
  }
}
