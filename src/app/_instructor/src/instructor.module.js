import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../../_core/src/core.module';

import { InstructorComponent } from './instructor.component';
import { InstructorDashboard } from './core/components/dashboard/dashboard.component';
import { InstructorNetworks } from './core/components/networks/networks.component';
import { InstructorStudents } from './core/components/students/students.component';
import { InstructorChats } from './core/components/chats/chats.component';

import { InstructorRoutes } from './instructor.routes';

import { InstructorService } from './instructor.service';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild( InstructorRoutes ),
    NgbModule.forRoot(),
    CoreModule
  ],
  declarations: [
    InstructorDashboard,
    InstructorNetworks,
    InstructorStudents,
    InstructorChats,
    InstructorComponent,
  ],
  providers: [
    InstructorService
  ],
  bootstrap: [InstructorComponent]
})

export class InstructorModule {}