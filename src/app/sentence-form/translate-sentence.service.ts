import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sentences } from '../models/Sentences';

@Injectable({
  providedIn: 'root'
})
export class TranslateSentenceService {

  base = "http://localhost:8000";
  httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient
  ) { }

  translate_sentence(sentence: Sentences): Observable<Sentences>{
    return this.http.post<Sentences>(this.base+'/sentence/', sentence, {headers: this.httpHeader});
  }

}
