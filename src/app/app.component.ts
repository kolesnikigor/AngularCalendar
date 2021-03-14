import {Component, OnInit} from '@angular/core';
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
  }

  changeDate(newDate: Date): void {
    this.date = newDate;
  }
}
