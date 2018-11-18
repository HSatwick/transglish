import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sentences } from '../models/Sentences';

@Injectable({
  providedIn: 'root'
})
export class DetailServiceService {

  base = "http://localhost:8000";
  httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getTrasnlation(id): Observable<Sentences>{
    return this.http.get<Sentences>(this.base+'/sentence/'+id, {headers: this.httpHeader});
  }

}
