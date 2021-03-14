import {Component, Input, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
import {IAllDays, ICalendar} from '../../types/types';
import {checkVacationsDate, counterSumVacation, checkVacationsType} from '../../utils/utils';

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
  isTeamsMembersShown: boolean[];
  toggleIcon = '../../assets/images/toggle.svg';
  sumVacationByDay: number[] = [];
  checkVacationsDate = checkVacationsDate;
  checkVacationsType = checkVacationsType;
  counterSumVacation = counterSumVacation;

  preventRepeatCheckVacation: string[] = [];

  addSumVacationByDay(member, ind): void {
    if (!this.preventRepeatCheckVacation.includes(`${member}${ind}`)) {
      this.preventRepeatCheckVacation.push(`${member}${ind}`);
      this.sumVacationByDay[ind] = this.sumVacationByDay[ind] + 1;
    }
  }

  createEmptyArraySumVacationByDay(): void {
    this.allDays.forEach(() => {
      this.sumVacationByDay.push(0);
    });
  }

  toggleIsTeamsMembersShow(i): void {
    this.isTeamsMembersShown[i] = !this.isTeamsMembersShown[i];
  }

  ngOnChanges(SimpleChanges): void {
    this.preventRepeatCheckVacation = [];
    this.sumVacationByDay = [];
    this.createEmptyArraySumVacationByDay();
  }

  toggleModal(): void {
    this.modalToggle.emit();
  }

  ngOnInit(): void {
    this.createEmptyArraySumVacationByDay();
    this.isTeamsMembersShown = new Array(this.teams.teams.length);
  }
}
