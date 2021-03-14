import {Component, OnInit} from '@angular/core';
import teamsData from './api/teamsData';
import { ITeams } from './interfaces/interfaces';
import { convertDateToShow } from './utils/utils';
import {IAllDays, ICalendar} from './types/types';
import {PutTeamsService} from './services/put-teams.service';


@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private putTeamsService: PutTeamsService) {
  }

  public date: Date = new Date();
  teams: ICalendar;
  isLoading: boolean;
  isModalActive: boolean = false
  teamsDepartments: ITeams = teamsData
  startDayVacation: string
  endDayVacation: string

  getDaysOfActivePeriod(): IAllDays[] {
    const year = this.date.getFullYear();
    const month = this.date.getMonth();
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      const item = new Date(date);
      days.push({
        dayName: item.toLocaleDateString('en-US', {weekday: 'short'}),
        date: item.getDate(),
        isDayOff: item.getDay() === 0 || item.getDay() === 6,
        fullDate: item,
      });
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  getTeams(): void {
    this.putTeamsService.putTeams().subscribe(value => {
      this.teams = value;
      this.isLoading = !this.isLoading;
    });
  }

  ngOnInit(): void {
    this.getTeams();
    // this.startDayVacation = convertDateToShow(
    //   new Date().toLocaleDateString('en-Us', {
    //     year: 'numeric',
    //     month: '2-digit',
    //     day: '2-digit',
    //   })
    // )
    // this.endDayVacation = convertDateToShow(
    //   new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString('en-Us', {
    //     year: 'numeric',
    //     month: '2-digit',
    //     day: '2-digit'
    //   })
    // )
  }

  modalToggle(): void {
    this.isModalActive = !this.isModalActive;
  }

  changeDate(newDate: Date): void {
    this.date = newDate;
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
}
