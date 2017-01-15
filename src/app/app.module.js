import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarketingModule } from './_marketing/src/marketing.module';
import { StudentModule } from './_student/src/student.module';
import { InstructorModule } from './_instructor/src/instructor.module';
import { OwnerModule } from './_owner/src/owner.module';
import 'rxjs/add/operator/map';


import { AppRoutes } from './app.routes';

import { MahrioApp } from './app.component';
import { AppProvider } from './app.provider';
import { Error404 } from './error/error-404.component';


if( 'PROD' === WPCONFIG.ENV ) {
  enableProdMode();
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MarketingModule,
    StudentModule,
    InstructorModule,
    OwnerModule,
    RouterModule.forRoot(AppRoutes),
    NgbModule.forRoot(),
  ],
  declarations: [
    MahrioApp,
    Error404,
  ],
  providers: [AppProvider],
  bootstrap: [MahrioApp],
})
export class AppModule {
}
