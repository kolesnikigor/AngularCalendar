import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ICalendar} from '../types/types';
import {Observable} from 'rxjs';
import { teams } from '../api/teamsData';

const httpOptions = {headers: new HttpHeaders({'Content-type': 'application/json; charset=UTF-8'})};

@Injectable({
  providedIn: 'root'
})
export class PutTeamsService {

  constructor(private http: HttpClient) { }
   teams: ICalendar = teams;
   teamsUrl = 'https://jsonplaceholder.typicode.com/posts/1';

  putTeams(): Observable<any> {
   return this.http.put(this.teamsUrl, this.teams, httpOptions);
  }
}
