import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sentences } from '../models/Sentences';


@Injectable({
  providedIn: 'root'
})
export class GetListService {

  base = "http://localhost:8000";
  httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient
  ) { }


  getAllTranslations(): Observable<Sentences[]>{
    return this.http.get<Sentences[]>(this.base + "/sentence/", {headers: this.httpHeader});
  }

}
