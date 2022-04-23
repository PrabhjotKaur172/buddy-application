import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class dataService {

  student$ = new BehaviorSubject(null);
  userInfo$ = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

//   public uploadProfileImage(image: File): Observable<Response> {
//     const formData = new FormData();

//     formData.append('image', image);

//     return this.http.post('/api/student/upload-profile-picture', formData);
//   }

addStudentInfo(student: any){
  this.student$.next(student);
  return this.http.post('http://localhost:5000//saveProfile', student);
}

updateProfile(student: any){
  this.student$.next(student);
  return this.http.put('http://localhost:5000//updateProfile?id='+ student.studentid, student);
}

getStudentInfo(id: any){
  return this.http.get('http://localhost:5000//getProfile?id='+ id);
}

updateStudentInfo(student: any){
  this.student$.next(student);
}

getUnassignedBuddies(){
  return this.http.get('http://localhost:5000//getUnassignedBuddys');
}

getYourAssignedBuddy(id: any){
  return this.http.get('http://localhost:5000//getYourAssignedBuddy?id='+ id);
}

getConnections(student: any){
  return this.http.get('http://localhost:5000//getConnections?module=' + student.module +'&startdate=' + student.startdate);
}

getCollegeNews(){
  return this.http.get('http://localhost:5000//getCollegeNews');
}

postNews(news: any){
  return this.http.post('http://localhost:5000//postCollegeNews', news);
}

registerNewUser(user: any){
  return this.http.post('http://localhost:5000//register', user);
}

loginUser(user: any){
  return this.http.post('http://localhost:5000//login', user);
}

saveUserLoginInfo(user: any){
  this.userInfo$.next(user);
}

 
}