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
  selectedStartDate: string = new DatePipe('en-US').transform(new Date(), 'yyyy-MM-dd');
  selectedEndDate: string = new DatePipe('en-US').transform(new Date().setDate(new Date().getDate() + 1), 'yyyy-MM-dd');
  selectedTeam = 'Frontend Team';
  selectedUser = 'FE_Team_User1';
  selectedTypeVacation = 'Paid';

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.putTeamsService.putTeams().subscribe(value => {
      this.teams = value;
      this.isLoading = !this.isLoading;
    });
  }

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

  modalToggle(): void {
    this.isModalActive = !this.isModalActive;
  }

  changeDate(newDate: Date): void {
    this.date = newDate;
  }

  getSelectedDataVacations(data: ISelectedData): void {
    this.selectedStartDate = data.startDate;
    this.selectedEndDate = data.endDate;
    this.selectedTeam = data.team;
    this.selectedUser = data.user;
    this.selectedTypeVacation = data.type;
  }

  addVacations(): void {
    this.selectedStartDate = new DatePipe('en-US').transform(new Date(this.selectedStartDate), 'dd.MM.yyyy');
    this.selectedEndDate = new DatePipe('en-US').transform(new Date(this.selectedEndDate), 'dd.MM.yyyy');
    const teamIndex = this.teams.teams.findIndex(t => t.name === this.selectedTeam);
    const userIndex = this.teams.teams[teamIndex].members.findIndex(t => t.name === this.selectedUser);
    const newVacation = { startDate: this.selectedStartDate, endDate: this.selectedEndDate, type: this.selectedTypeVacation};
    this.teams.teams[teamIndex].members[userIndex].vacations.push(newVacation);
    this.setDefaultDelectedDate();
  }

  setDefaultDelectedDate() : void {
    this.selectedStartDate = new DatePipe('en-US').transform(new Date(), 'yyyy-MM-dd');
    this.selectedEndDate = new DatePipe('en-US').transform(new Date().setDate(new Date().getDate() + 1), 'yyyy-MM-dd');
  }
}
