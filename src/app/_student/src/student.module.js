import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StudentComponent } from './student.component';
import { StudentDashboard } from './core/components/dashboard/dashboard.component';
import { StudentNetworks } from './core/components/networks/student-networks.component';
import { Students } from './core/components/students/students.component';
import { StudentChats } from './core/components/chats/chats.component';

import { StudentRoutes } from './student.routes';

import { StudentTopNav } from './core/components/nav/top.component';
import { StudentLeftNav } from './core/components/nav/left.component';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild( StudentRoutes ),
    NgbModule.forRoot()
  ],
  declarations: [
    StudentTopNav,
    StudentLeftNav,
    StudentDashboard,
    StudentNetworks,
    Students,
    StudentChats,
    StudentComponent,
  ],
  bootstrap: [StudentComponent]
})

export class StudentModule {}