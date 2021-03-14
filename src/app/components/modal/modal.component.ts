import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {ITeamMember, ITeam, IVacationsType} from '../../types/types';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  @Input() teams: Array<ITeam>;
  @Input() startDayVacation: string;
  @Input() endDayVacation: string;
  @Output() startDateVacationInput = new EventEmitter<string>();
  @Output() endDateVacationInput = new EventEmitter<string>();
  @Output() typeVacation = new EventEmitter<string>();
  @Output() indexTeam = new EventEmitter<number>();
  @Output() memberName = new EventEmitter<string>();
  @Output() showData = new EventEmitter();
  @Output() modalToggle = new EventEmitter();

  vacationForm: FormGroup;
  selectedStartDate: string = new DatePipe('en-US').transform(new Date(), 'yyyy-MM-dd');
  selectedEndDate: string = new DatePipe('en-US').transform(new Date().setDate(new Date().getDate() + 1), 'yyyy-MM-dd');
  selectedTeam = 'Frontend Team';
  selectedTeamIndex = 0;
  selectedTeamMembers: Array<ITeamMember>;
  selectedTypeVacation = 'Paid';
  selectedUser = 'FE_Team_User1';
  vacationsType: Array<IVacationsType> = [
    {type: 'Paid', description: 'Paid Day Off (PD)'},
    {type: 'UnPaid', description: 'UnPaid Day Off (UPD)'}
  ];
  quantityVacationDays = 2;

  constructor() {
  }

  ngOnInit(): void {
    this.initVacationForm();
    this.handleFormValue();
  }

  initVacationForm(): void {
    this.vacationForm = new FormGroup({
      startDate: new FormControl(this.selectedStartDate),
      endDate: new FormControl(this.selectedEndDate),
      team: new FormControl(this.selectedTeam),
      user: new FormControl(this.selectedUser),
      type: new FormControl(this.selectedTypeVacation),
    });
  }

  handleFormValue(): void {
    this.vacationForm.valueChanges.subscribe({
      next: (data) => {
        this.selectedTeam = data.team;
        this.selectedStartDate = data.startDate;
        this.selectedEndDate = data.endDate;
        this.selectedUser = data.user;
        this.getIndexTeam(data.team);
        this.countVacationDays(data.startDate, data.endDate);
      }
    });
  }

  getIndexTeam(selectedTeamName: string): void {
    this.selectedTeamIndex = this.teams.findIndex(team => team.name === selectedTeamName);
  }

  countVacationDays(startDate: Date, endDate: Date): void {
    this.quantityVacationDays = (
      new Date(endDate).getTime() - new Date(startDate).getTime()
    ) / 86400000 + 1;
  }

  setStartDayVacation(event): void {
    this.startDateVacationInput.emit(event.target.value);
  }

  setEndDayVacation(event): void {
    this.endDateVacationInput.emit(event.target.value);
  }

  // setTypeVacation(): void {
  //   this.typeVacation.emit(this.selectedTypeVacation);
  // }
  //
  // setIndexTeam(event): void {
  //   this.indexTeam.emit(event.target);
  //   console.log(event.target.value);
  // }
  //
  // setMemberName(event): void {
  //   this.memberName.emit(this.selectedUser);
  // }

  closeModal(): void {
    this.modalToggle.emit();
  }
}
