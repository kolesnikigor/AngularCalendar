import {Component, Input, OnInit} from '@angular/core';
import {IAllDays, ICalendar} from '../../types/types';
import { checkVacationsDate, counterSumVacation } from '../../utils/utils_2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() date: Date;
  @Input() allDays: IAllDays[];
  @Input() teams: ICalendar;
  iconPlusUrl = '../../../assets/images/plus.svg';
  teamIcon = '../../../assets/images/team.svg';
  isModalActive = false;
  isTeamsMembersShown: boolean[];
  toggleIcon = '../../assets/images/toggle.svg';
  sumVacationByDay: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  checkVacationsDate = checkVacationsDate;
  counterSumVacation = counterSumVacation;

  // addSumVacationByDay(ind): void {
  //   this.sumVacationByDay[ind] += 1;
  // }

  toggleHandler(i): void {
    this.isTeamsMembersShown[i] = !this.isTeamsMembersShown[i];
  }


  modalToggle(): void {
    this.isModalActive = !this.isModalActive;
  }

  ngOnInit(): void {
    // this.sumVacationByDay = new Array(this.allDays.length);
    this.isTeamsMembersShown = new Array(this.teams.teams.length);
    // console.log(this.sumVacationByDay);
  }
}
