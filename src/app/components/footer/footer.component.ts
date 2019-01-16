import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink:'/employees'
     },
      {
          label: 'Employees',
          routerLink:'/employees'
         
      },
      {
        label: 'Titles',
        routerLink:'/titles'
    },
  ];
  }

}
