import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  private URl="/assets/data.json"
  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get<any>(this.URl);
  }
}
