import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ITeam } from '../interfaces/teamsDepartments';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() teams: ITeam
  @Input() startDayVacation: string
  @Input() endDayVacation: string
  @Output() someEvent = new EventEmitter()
  @Output() startDateVacationInput = new EventEmitter<string>()
  @Output() endDateVacationInput = new EventEmitter<string>()
  @Output() showData = new EventEmitter()

  vacationForm: FormGroup
  startDate: string = new DatePipe('en-US').transform(new Date(), 'yyyy-MM-dd')
  endDate: string = new DatePipe('en-US').transform(new Date().setDate(new Date().getDate() + 1), 'yyyy-MM-dd')


  constructor() {}

  ngOnInit(): void {
    this.initVacationForm()
    console.log("----> ", this.teams[0].name);
  }

  initVacationForm(): void {
    this.vacationForm = new FormGroup({
      team: new FormControl(this.teams[0]),
      startVacationDate: new FormControl(this.startDate),
      endVacationDate: new FormControl(this.endDate),
    })
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
