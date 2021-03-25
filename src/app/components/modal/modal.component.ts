import {Component, Input, OnInit, Output, EventEmitter, OnChanges} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ITeamMember, ITeam, IVacationsType, ISelectedData} from '../../types/types';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit, OnChanges {
  @Input() teams: Array<ITeam>;
  @Input() selectedStartDate: string;
  @Input() selectedEndDate: string;
  @Input() selectedTeam: string;
  @Input() selectedUser: string;
  @Input() selectedTypeVacation: string;

  @Output() modalToggle = new EventEmitter();
  @Output() addVacations = new EventEmitter();
  @Output() getSelectedDataVacations = new EventEmitter<ISelectedData>();

  vacationForm: FormGroup;
  selectedTeamIndex = 0;
  selectedTeamMembers: Array<ITeamMember>;
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

  ngOnChanges(): void {
    this.udpateSelectedUser(this.selectedTeamIndex);
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
        this.countVacationDays(data.startDate, data.endDate);
        this.getIndexTeam(data.team);
        this.getSelectedDataVacations.emit(data);
      }
    });
  }

  getIndexTeam(selectedTeamName: string): void {
    this.selectedTeamIndex = this.teams.findIndex(team => team.name === selectedTeamName);
  }

  udpateSelectedUser(currentTeamIndex: number): void {
    console.log(this.teams[currentTeamIndex].members[0].name);
    this.selectedUser = this.teams[currentTeamIndex].members[0].name;
  }

  countVacationDays(startDate: Date, endDate: Date): void {
    const millisecondsPerDay = 86400000;
    this.quantityVacationDays = (
      new Date(endDate).getTime() - new Date(startDate).getTime()
    ) / millisecondsPerDay + 1;
  }

  addNewVacations(): void {
    this.addVacations.emit();
    this.modalToggle.emit();
  }
  closeModal(): void {
    this.modalToggle.emit();
  }
}
