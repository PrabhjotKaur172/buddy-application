import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class dataService {

  constructor(private http: HttpClient) { }

//   public uploadProfileImage(image: File): Observable<Response> {
//     const formData = new FormData();

//     formData.append('image', image);

//     return this.http.post('/api/student/upload-profile-picture', formData);
//   }
 
}