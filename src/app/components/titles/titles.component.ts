import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {TableModule} from 'primeng/table';
import {DialogModule, Dialog} from 'primeng/dialog';
import { Title } from '../../models/title';
import { identifierModuleUrl } from '@angular/compiler';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule }   from '@angular/forms';
@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {
  
  TitleList:any[]=[];
  displayDialog: boolean;
  title: any  = {};
  selectedTitle:any={};
  newTitle: boolean;
  cols: any[];
  titles:any[]=[];
  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'code', header: 'Code' }
  ];
  if (typeof(Storage) !== "undefined") {
    if(localStorage.getItem('titleList')){
      this.TitleList = JSON.parse(localStorage.getItem('titleList'));
    } 
   
  }
  }
  showDialogToAdd() {
    this.newTitle = true;
    this.title = {};
    this.displayDialog = true;
}

save() {
  let titles = this.TitleList;
  if(this.TitleList && this.TitleList.length>0){
    let employees=this.TitleList;
  }
    
    if (this.newTitle){
      titles.push(this.title);
    }else{
     // alert(JSON.stringify(this.title)+"dfhdfdhfdhfgdhgf"+JSON.stringify(this.selectedTitle));
      titles[this.TitleList.indexOf(this.selectedTitle)] = this.title;
    }
    this.TitleList = titles;
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem('titleList',JSON.stringify(this.TitleList));
    }
    this.title = null;
    this.displayDialog = false;
}

delete() {
    let index = this.TitleList.indexOf(this.selectedTitle);
    this.TitleList = this.TitleList.filter((val, i) => i != index);
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem('titleList',JSON.stringify(this.TitleList));
    }
    this.title = null;
    this.displayDialog = false;
}

onRowSelect(event) {
    this.newTitle = false;
    this.title = this.cloneTitle(event.data);
    this.displayDialog = true;
}

cloneTitle(e:Title):any{
   this.selectedTitle=e;
    let employee:any = {};
    for (let prop in e) {
      employee[prop] = e[prop];
    }
    return employee;
}


}
