import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  PostEvent(data: any) {
    return this.http.post<any>("http://localhost:3000/eventListes/", data);
  }

  postUser(data: any) {
    return this.http.post<any>("http://localhost:3000/signup/", data);
  }
  getEvent() {
    return this.http.get<any>("http://localhost:3000/eventListes/");
  }
  getUser() {
    return this.http.get<any>("http://localhost:3000/signup/");
  }
  putEvent(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/eventListes/" + id, data);

  }

  deleteEvent(id: number) {
    return this.http.delete<any>("http://localhost:3000/eventListes/" + id);
  }
  deletUser(id: number) {
    return this.http.delete<any>("http://localhost:3000/signup/" + id);


  }
  putuser(id: number) {
    // return this.http.put<any>("http://localhost:3000/signup/" + id, data);
  }


}
