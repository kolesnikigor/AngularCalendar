import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { IMember, ITeam, IVacationsType } from '../../interfaces/interfaces';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})  

export class ModalComponent implements OnInit {
  @Input() teams: Array<ITeam>
  @Input() startDayVacation: string
  @Input() endDayVacation: string
  @Output() someEvent = new EventEmitter()
  @Output() startDateVacationInput = new EventEmitter<string>()
  @Output() endDateVacationInput = new EventEmitter<string>()
  @Output() showData = new EventEmitter()

  vacationForm: FormGroup
  selectedStartDate: string = new DatePipe('en-US').transform(new Date(), 'yyyy-MM-dd')
  selectedEndDate: string = new DatePipe('en-US').transform(new Date().setDate(new Date().getDate() + 1), 'yyyy-MM-dd')
  selectedTeam: string = 'Frontend Team'
  selectedTeamIndex: number = 0
  selectedTeamMembers: Array<IMember>
  vacationsType: Array<IVacationsType> = [
    {type: 'Paid', description: 'Paid Day Off (PD)'},
    {type: 'UnPaid', description: 'UnPaid Day Off (UPD)'}
  ]
  quantityVacationDays: number = 1

  constructor() {}

  ngOnInit(): void {
    this.initVacationForm()
    this.handleFormValue()
  }

  initVacationForm(): void {
    this.vacationForm = new FormGroup({
      startDate: new FormControl(this.selectedStartDate),
      endDate: new FormControl(this.selectedEndDate),
      team: new FormControl(this.selectedTeam),
      user: new FormControl('FE_Team_User1'),
      type: new FormControl('Paid'),
    })
  }

  handleFormValue(): void {
    this.vacationForm.valueChanges.subscribe({
      next: (data) => {
        this.selectedTeam = data.team
        this.getIndexTeam(data.team)
        this.countVacationDays(data.startDate, data.endDate)
      }
    })
  }

  getIndexTeam(selectedTeamName: string): void {
    this.selectedTeamIndex = this.teams.findIndex(team => team.name === selectedTeamName)
  }

  countVacationDays(startDate: Date, endDate: Date): void {
    this.quantityVacationDays = (
      new Date(endDate).getTime() - new Date(startDate).getTime()
    ) / 86400000 + 1
  }

  callEvent(): void {
    this.someEvent.emit()
  }

  setStartDayVacation(event): void {
    this.startDateVacationInput.emit(event.target.value)
  }

  setEndDayVacation(event): void {
    this.endDateVacationInput.emit(event.target.value)
  }

  habdleShow(): void {
    this.showData.emit()
  }
}
