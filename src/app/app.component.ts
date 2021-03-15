import {Component, OnInit, OnChanges} from '@angular/core';
import {IAllDays, ICalendar, ISelectedData} from './types/types';
import {PutTeamsService} from './services/put-teams.service';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private putTeamsService: PutTeamsService) {
  }

  date: Date = new Date();
  teams: ICalendar;
  isLoading: boolean;
  isModalActive = false;
  startDayVacation: string;
  endDayVacation: string;
  selectedTeam: string;
  selectedUser: string;
  typeVacation: string;

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

  // ngOnChanges(SimpleChanges): void {
  // }

  ngOnInit(): void {
    this.getTeams();
  }

  modalToggle(): void {
    this.isModalActive = !this.isModalActive;
  }

  changeDate(newDate: Date): void {
    this.date = newDate;
  }

  getSelectedDataVacations(data: ISelectedData): void {
    this.startDayVacation = new DatePipe('en-US').transform(new Date(data.startDate), 'dd.MM.yyyy');
    console.log(this.startDayVacation)
    this.endDayVacation = new DatePipe('en-US').transform(new Date(data.endDate), 'dd.MM.yyyy');
    this.selectedTeam = data.team;
    this.selectedUser = data.user;
    this.typeVacation = data.type;

  }

  addVacationns(): void {
    console.log(this.startDayVacation)
    console.log(this.endDayVacation)
    console.log(this.selectedTeam)
    console.log(this.selectedUser)
    console.log(this.typeVacation)
  }
}
