import {Component, OnInit} from '@angular/core';
import teamsData from './api/teamsData';
import { ITeams } from './interfaces/teamsDepartments';
import { convertDateToShow } from './utils/utils';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  teamsDepartments: ITeams
  startDayVacation: string
  endDayVacation: string

  ngOnInit() {
    this.teamsDepartments = teamsData
    this.startDayVacation = convertDateToShow(
      new Date().toLocaleDateString('en-Us', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
    )
    this.endDayVacation = convertDateToShow(
      new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString('en-Us', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
    )
  }

  checkState(): void {
    console.log("app-component")
  }

  handleStartDayVacation(date: string) {
    this.startDayVacation = date
  }

  handleEndDayVacation(date: string) {
    this.endDayVacation = date
  }

  showData() {
    console.log("start", this.startDayVacation)
  }
}
