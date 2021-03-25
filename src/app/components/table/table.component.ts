import {Component, Input, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
import {IAllDays, ICalendar} from '../../types/types';
import {checkVacationsDate, counterSumVacationByMonth, checkVacationsType, counterSumVacationByDay} from '../../utils/utils';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() date: Date;
  @Input() allDays: IAllDays[];
  @Input() teams: ICalendar;
  @Input() isModalActive: boolean;
  @Output() modalToggle = new EventEmitter();

  iconPlusUrl = '../../../assets/images/plus.svg';
  teamIcon = '../../../assets/images/team.svg';
  toggleIcon = '../../assets/images/toggle.svg';
  isTeamsMembersShown: boolean[];
  sumVacationByDay: number[] = [];
  checkVacationsDate = checkVacationsDate;
  checkVacationsType = checkVacationsType;
  counterSumVacation = counterSumVacationByMonth;

  ngOnChanges(): void {
    this.addSumVacationByDay();
  }

  ngOnInit(): void {
    this.isTeamsMembersShown = new Array(this.teams.teams.length);
  }

  addSumVacationByDay(): void {
    const allVacations = this.teams.teams.flatMap(({members}) => members).flatMap(({vacations}) => vacations);
    this.sumVacationByDay = this.allDays.map(day => counterSumVacationByDay(allVacations, day));
  }

  toggleIsTeamsMembersShow(i): void {
    this.isTeamsMembersShown[i] = !this.isTeamsMembersShown[i];
  }

  toggleModal(): void {
    this.modalToggle.emit();
  }

}
