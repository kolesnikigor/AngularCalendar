import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IAllDays, ICalendar} from '../../types/types';
import { checkVacationsDate, counterSumVacation } from '../../utils/utils';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() date: Date;
  @Input() allDays: IAllDays[];
  @Input() teams: ICalendar;
  @Input() isModalActive: boolean;
  @Output() modalToggle = new EventEmitter()

  iconPlusUrl = '../../../assets/images/plus.svg';
  teamIcon = '../../../assets/images/team.svg';
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


  toggleModal(): void {
    this.modalToggle.emit()
  }

  ngOnInit(): void {
    // this.sumVacationByDay = new Array(this.allDays.length);
    this.isTeamsMembersShown = new Array(this.teams.teams.length);
    // console.log(this.sumVacationByDay);
  }
}
