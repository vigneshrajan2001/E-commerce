import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'reg',component:RegisterComponent},
  {path:'',component:NavbarComponent},
  {path:'log',component:LoginComponent},
  // {path:'',component:NavbarComponent},
  {path:'search/:studentsec',component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
