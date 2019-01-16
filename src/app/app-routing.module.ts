import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { TitlesComponent } from './components/titles/titles.component';

const routes: Routes = [
  {path:'',redirectTo:'employees',pathMatch:'full'},
  {path:'employees',component:EmployeesComponent},
  {path:'titles',component:TitlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
