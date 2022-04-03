import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class dataService {

  student$ = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

//   public uploadProfileImage(image: File): Observable<Response> {
//     const formData = new FormData();

//     formData.append('image', image);

//     return this.http.post('/api/student/upload-profile-picture', formData);
//   }

addStudentInfo(student: any){
  // const subject = new Subject();
  // subject.next(student);
  this.student$.next(student);
}
 
}