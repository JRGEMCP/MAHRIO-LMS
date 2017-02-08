import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../../_core/src/core.module';

import { StudentComponent } from './student.component';
import { StudentDashboard } from './core/components/dashboard/dashboard.component';
import { StudentNetworks } from './core/components/courses/networks.component';
import { StudentUsers } from './core/components/classmates/users.component';
import { StudentChats } from './core/components/chats/chats.component';

import { StudentRoutes } from './student.routes';

import { StudentService } from './student.service';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild( StudentRoutes ),
    NgbModule.forRoot(),
    CoreModule,
  ],
  declarations: [
    StudentDashboard,
    StudentNetworks,
    StudentUsers,
    StudentChats,
    StudentComponent,
  ],
  providers: [
    StudentService
  ],
  bootstrap: [StudentComponent]
})

export class StudentModule {}