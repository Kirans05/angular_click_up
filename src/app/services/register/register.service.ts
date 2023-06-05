import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerNewUser(data: any) {
    return this.http.post('http://localhost:4000/api/auth/signup', data)
  }
}
