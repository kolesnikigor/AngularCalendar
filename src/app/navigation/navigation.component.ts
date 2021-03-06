import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() {
  }

  date = new Date();

  nextMonth(): void {
    this.date = new Date(this.date.setMonth(this.date.getMonth() + 1));
  }

  prevMonth(): void {
    this.date = new Date(this.date.setMonth(this.date.getMonth() - 1));
  }

  ngOnInit(): void {
  }
}
