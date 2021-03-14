import {Component, Input, OnInit} from '@angular/core';
import {IAllDays, ICalendar} from '../../types/types';
import {PutTeamsService} from '../../services/put-teams.service';
import { checkVacationsDate, counterSumVacation } from '../../utils/utils';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor(private putTeamsService: PutTeamsService) {
  }

  @Input() date: Date;
  @Input() allDays: IAllDays[];
  iconPlusUrl = '../../assets/images/plus.svg';
  teamIcon = '../../assets/images/team.svg';
  isModalActive = false;
  teams: ICalendar;
  isLoading: boolean;
  isTeamsMembersShown: boolean[];
  toggleIcon = '../../assets/images/toggle.svg';
  checkVacationsDate = checkVacationsDate;
  counterSumVacation = counterSumVacation;

  toggleHandler(i): void {
    this.isTeamsMembersShown[i] = !this.isTeamsMembersShown[i];
  }

  getTeams(): void {
    this.putTeamsService.putTeams().subscribe(value => {
      this.teams = value;
      this.isLoading = !this.isLoading;
      this.isTeamsMembersShown = new Array(this.teams.teams.length);
    });
  }

  modalToggle(): void {
    this.isModalActive = !this.isModalActive;
  }

  ngOnInit(): void {
    this.getTeams();
  }
}
