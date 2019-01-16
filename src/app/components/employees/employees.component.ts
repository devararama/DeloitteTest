import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {TableModule} from 'primeng/table';
import {DialogModule, Dialog} from 'primeng/dialog';
import { Employee } from '../../models/employee';
import { identifierModuleUrl } from '@angular/compiler';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule }   from '@angular/forms';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
   EmployeeList:any[]=[];
   displayDialog: boolean;
   employee: any  = {};
   selectedEmployee:any={};
   newEmployee: boolean;
   cols: any[];
   employees:any[]=[];
   titles:any[]=[];
   selectedTitle:any;
  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'age', header: 'Age' },
      { field: 'title', header: 'Title' }
  ];
  if (typeof(Storage) !== "undefined") {
    if(localStorage.getItem('titleList')){
      this.titles = JSON.parse(localStorage.getItem('titleList'));
    }   
    if(localStorage.getItem('employeeList')){
      this.EmployeeList=JSON.parse(localStorage.getItem('employeeList'));
    }
   
  }
  }

  showDialogToAdd() {
    this.newEmployee = true;
    this.employee = {};
    this.displayDialog = true;
}

save() {
  let employees = this.EmployeeList;
  if(this.EmployeeList && this.EmployeeList.length>0){
    let employees=this.EmployeeList;
  }
    
    if (this.newEmployee){
      employees.push(this.employee);
    }else{
    //  alert(JSON.stringify(this.employee)+"dfhdfdhfdhfgdhgf"+JSON.stringify(this.selectedEmployee));
      employees[this.EmployeeList.indexOf(this.selectedEmployee)] = this.employee;
    }
    this.EmployeeList = employees;
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem('employeeList',JSON.stringify(this.EmployeeList));
    }
    this.employee = null;
    this.displayDialog = false;
}

delete() {
    let index = this.EmployeeList.indexOf(this.selectedEmployee);
    this.EmployeeList = this.EmployeeList.filter((val, i) => i != index);
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem('employeeList',JSON.stringify(this.EmployeeList));
    }
    this.employee = null;
    this.displayDialog = false;
}

onRowSelect(event) {
    this.newEmployee = false;
    this.employee = this.cloneEmployee(event.data);
    this.displayDialog = true;
}

cloneEmployee(e:Employee):any{
   this.selectedEmployee=e;
    let employee:any = {};
    for (let prop in e) {
      employee[prop] = e[prop];
    }
    return employee;
}



displayData(val:any){
  if(val){
    return val.name;
  }
 
}

}
