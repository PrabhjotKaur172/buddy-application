import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() userInfo:any;
  @Output() displayBuddyInfo = new EventEmitter<string>();
  showMessageBox:any;
  message:any = '';
  yourMessage:any = [];
  duplicateMessagesArray:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  openBuddyInfo(){
    this.showMessageBox = false;
    this.displayBuddyInfo.emit(this.showMessageBox);
  }

  sendMessage(message:any){
    this.yourMessage.push(message);
    this.duplicateMessagesArray = JSON.parse(JSON.stringify(this.yourMessage));
    this.message = '';
  }
}
