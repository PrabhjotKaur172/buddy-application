import { Component, OnInit } from '@angular/core';
import { dataService } from './../../services/data.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  profileInfoSaved: boolean = false;
  studentImage: any;

  student: any = {
    name : '',
    studentid : null,
    bio : '',
    module : '',
    startdate : null,
    enddate : null,
    country : '',
    hobby : ''
  }

  modules = [
    'MSc in Data Analytics',
    'MSc in Information System with Computing',
    'MSc in Business Analytics',
    'MSc in FinTech',
    'MSc in Artificial Intelligence',
    'MSc in Cyber Security',
    'MSc in Financial Analytics'
    ];

  countries = [
    'India',
    'China',
    'Sri Lanka',
    'Bangladesh',
    'Nepal',
    'Bhutan',
    'Ireland',
    'United States of America',
    'Mexico',
    'Norway',
    'Switzerland',
    'Italy',
    'Germany',
    'Belgium',
    'Amsterdam'
  ];

  selectedFile: ImageSnippet | undefined;

  constructor(
    private dataService : dataService
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  saveProfile(student:any){
    this.dataService.addStudentInfo(student).subscribe(response => {
      if (response) {
        alert("The profile is saved successfully.");
      }
    });
  }

  getProfile(){
    let studentid = 12345;
    this.dataService.getStudentInfo(studentid).subscribe(response => {
      if (response) {
        alert("The profile is retrieved successfully.");
      }
    });
  }
  
  processProfileImage(profileImage: any) {
    const file: File = profileImage.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      // remove this later
      const formData = new FormData();

      formData.append('image', this.selectedFile.file);
       // remove this later

      // this.dataService.uploadProfileImage(this.selectedFile.file).subscribe(
      //   (response) => {
      //     this.studentImage = response;
      //   },
      //   (error) => {
      //     console.log(error);
      //   });
    });

    reader.readAsDataURL(file);
  }
}
