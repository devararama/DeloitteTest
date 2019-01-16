import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink:'/titles'
     },
      {
          label: 'Employees',
          routerLink:'/employees',
          items: [{
                  label: 'List', 
                  icon: 'pi pi-fw pi-plus',
                  routerLink:'/titles'
                 
              }
          ]
      },
      {
        label: 'Titles',
        routerLink:'/titles',
        items: [{
                label: 'List', 
                icon: 'pi pi-fw pi-plus',
                routerLink:'/titles'
            }
        ]
    },
  ];
  }

}
