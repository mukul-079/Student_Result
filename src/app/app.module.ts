import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentViewComponent } from './student-view/student-view.component';
import { AuthGuard } from './shared/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TeacherLoginComponent,
    TeacherViewComponent,
    StudentLoginComponent,
    StudentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
