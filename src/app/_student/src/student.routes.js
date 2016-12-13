import { StudentComponent } from './student.component';

//import { DashboardRoutes } from './dashboard/dashboard.routes';

export const StudentRoutes = [
  {
    path: 's',
    pathMatch: 'full',
    redirectTo: 's/dashboard'
  },
  {
    path: 's/:view',
    component: StudentComponent
  }
];