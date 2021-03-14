import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() {
  }

  @Input() date: Date;
  @Output() newDate = new EventEmitter<Date>();

  changeDate(value: Date): void {
    this.newDate.emit(value);
  }

  nextMonth(): void {
    this.date = new Date(this.date.setMonth(this.date.getMonth() + 1));
    this.changeDate(this.date);
  }

  prevMonth(): void {
    this.date = new Date(this.date.setMonth(this.date.getMonth() - 1));
    this.changeDate(this.date);
  }

  ngOnInit(): void {
  }
}
