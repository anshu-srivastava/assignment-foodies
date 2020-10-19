import { Component, OnInit } from '@angular/core';
import { CustomBtnElement } from '../../lit-element/button-element';
console.assert(CustomBtnElement !== undefined);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

}
