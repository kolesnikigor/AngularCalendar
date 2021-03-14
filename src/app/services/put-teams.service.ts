import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ICalendar} from '../types/types';
import {Observable} from 'rxjs';

const httpOptions = {headers: new HttpHeaders({'Content-type': 'application/json; charset=UTF-8'})};

@Injectable({
  providedIn: 'root'
})
export class PutTeamsService {

  constructor(private http: HttpClient) { }
   teams: ICalendar = {
    id: 1,
    teams: [
      {
        name: 'Frontend Team',
        percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
        members: [
          {
            name: 'FE_Team_User1',
            vacations: [
              { startDate: '20.03.2021', endDate: '22.03.2021', type: 'Paid' },
              { startDate: '03.02.2021', endDate: '05.02.2021', type: 'Paid' },
            ],
          },
          {
            name: 'FE_Team_User2',
            vacations: [
              { startDate: '03.03.2021', endDate: '05.03.2021', type: 'UnPaid' },
              { startDate: '20.03.2020', endDate: '22.03.2020', type: 'UnPaid' },
            ],
          },
        ],
      },
      {
        name: 'Backend Team',
        percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
        members: [
          {
            name: 'BE_Team_User1',
            vacations: [
              { startDate: '15.02.2020', endDate: '22.02.2020', type: 'UnPaid' },
              { startDate: '06.03.2021', endDate: '09.03.2021', type: 'UnPaid' },
            ],
          },
          {
            name: 'BE_Team_User2',
            vacations: [
              { startDate: '20.02.2020', endDate: '22.02.2020', type: 'UnPaid' },
              { startDate: '17.03.2021', endDate: '20.03.2021', type: 'UnPaid' },
            ],
          },
        ],
      },
      {
        name: 'Designers Team',
        percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
        members: [
          {
            name: 'DE_Team_User1',
            vacations: [
              { startDate: '15.02.2020', endDate: '22.02.2020', type: 'UnPaid' },
              { startDate: '20.03.2020', endDate: '22.03.2020', type: 'UnPaid' },
            ],
          },
          {
            name: 'DE_Team_User2',
            vacations: [
              { startDate: '20.02.2020', endDate: '22.02.2020', type: 'UnPaid' },
              { startDate: '20.03.2020', endDate: '22.03.2020', type: 'UnPaid' },
            ],
          },
        ],
      },
      {
        name: 'PM Team',
        percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
        members: [
          {
            name: 'PM_Team_User1',
            vacations: [
              { startDate: '15.02.2020', endDate: '22.02.2020', type: 'UnPaid' },
              { startDate: '20.03.2020', endDate: '22.03.2020', type: 'UnPaid' },
            ],
          },
          {
            name: 'PM_Team_User2',
            vacations: [
              { startDate: '20.02.2020', endDate: '22.02.2020', type: 'UnPaid' },
              { startDate: '20.03.2020', endDate: '22.03.2020', type: 'UnPaid' },
            ],
          },
        ],
      },
      {
        name: 'DevOps Team',
        percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
        members: [
          {
            name: 'DE_Team_User1',
            vacations: [
              { startDate: '15.02.2020', endDate: '22.02.2020', type: 'UnPaid' },
              { startDate: '20.03.2020', endDate: '22.03.2020', type: 'UnPaid' },
            ],
          },
          {
            name: 'DE_Team_User2',
            vacations: [
              { startDate: '20.02.2020', endDate: '22.02.2020', type: 'UnPaid' },
              { startDate: '20.03.2020', endDate: '22.03.2020', type: 'UnPaid' },
            ],
          },
        ],
      },
    ],
  };
   teamsUrl = 'https://jsonplaceholder.typicode.com/posts/1';

  putTeams(): Observable<any> {
   return this.http.put(this.teamsUrl, this.teams, httpOptions);
  }
}