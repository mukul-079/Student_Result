import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent} from './login-page/login-page.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import {TeacherViewComponent} from './teacher-view/teacher-view.component';
import {StudentViewComponent} from './student-view/student-view.component';
import { AuthGuard } from './shared/auth.guard';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'teacher-login',
    component:TeacherLoginComponent
  },
  {
    path:'student-login',
    component:StudentLoginComponent
  },
  {
    path:'teacher-view',
    canActivate: [AuthGuard],
    component:TeacherViewComponent
  },
  {
    path:'student-view',
    component:StudentViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
