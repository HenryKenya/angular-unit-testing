import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _URL: string = "https://jsonplaceholder.typicode.com/users"

  constructor(private httpClient: HttpClient) { }

  fetchData() : Observable<any>{
    return this.httpClient.get(this._URL)
  }
}
