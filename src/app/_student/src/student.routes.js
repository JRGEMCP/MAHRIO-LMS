import { StudentComponent } from './student.component';

import { StudentNetworks } from './core/components/courses/networks.component';
//import { DashboardRoutes } from './dashboard/dashboard.routes';

export const StudentRoutes = [
  {
    path: 's',
    pathMatch: 'full',
    redirectTo: 's/dashboard'
  },
  {
    path: 's/courses/:title',
    component: StudentComponent
  },
  {
    path: 's/:view',
    component: StudentComponent
  }
];