import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  @Input() profileData: any;

  isMessageBoxOpened:boolean = false;

  constructor() { }

  ngOnInit(): void {
  
  }

  openMessageBox(){
    this.isMessageBoxOpened = true;
  }

  displayBuddyInfo(event: any){
    this.isMessageBoxOpened = event;
  }

}
