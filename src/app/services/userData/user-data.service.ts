import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get("http://localhost:4000/api/user/getalluser", {
      withCredentials: true
    })
  }

  updateUserData(userData: any) {
    console.log(userData)
    return this.http.put("http://localhost:4000/api/user/update", {
      withCredentials: true,
      userData
    })
  }
}
