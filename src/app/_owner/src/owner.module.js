import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../../_core/src/core.module';

import { OwnerComponent } from './owner.component';
import { OwnerDashboard } from './components/analysis/dashboard.component';
import { OwnerNetworks } from './components/networks/networks.component';
import { OwnerUsers } from './components/users/users.component';
import { OwnerChats } from './components/support/chats.component';

import { OwnerRoutes } from './owner.routes';

import { OwnerService } from './owner.service';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild( OwnerRoutes ),
    NgbModule.forRoot(),
    CoreModule,
  ],
  declarations: [
    OwnerDashboard,
    OwnerNetworks,
    OwnerUsers,
    OwnerChats,
    OwnerComponent,
  ],
  providers: [
    OwnerService
  ],
  bootstrap: [OwnerComponent]
})

export class OwnerModule {}