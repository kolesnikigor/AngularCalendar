import {Component, OnInit, OnChanges} from '@angular/core';
import {IAllDays, ICalendar} from './types/types';
import {PutTeamsService} from './services/put-teams.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  constructor(private putTeamsService: PutTeamsService) {
  }

  date: Date = new Date();
  teams: ICalendar;
  isLoading: boolean;
  isModalActive = false;
  startDayVacation: string;
  endDayVacation: string;
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

  ngOnChanges(SimpleChanges): void {
  }

  ngOnInit(): void {
    this.getTeams();
  }

  modalToggle(): void {
    this.isModalActive = !this.isModalActive;
  }

  changeDate(newDate: Date): void {
    this.date = newDate;
  }

  handleStartDayVacation(date: string): void {
    this.startDayVacation = date;
  }

  handleEndDayVacation(date: string): void {
    this.endDayVacation = date;
  }

  handleTypeVacation(data: string): void {
    this.typeVacation = data;
  }
}
