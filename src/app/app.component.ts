import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  date = new Date();
  ngOnInit(): void {
    console.log('this is onInit of App');
  }
}
