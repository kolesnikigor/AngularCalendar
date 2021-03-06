import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() date: Date;
  iconPlusUrl = '../../assets/images/plus.svg';
  isModalActive = false;

  modalToggle(): void {
    this.isModalActive = !this.isModalActive;
  }
  ngOnInit(): void {
  }
}
