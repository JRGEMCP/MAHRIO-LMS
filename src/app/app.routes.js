import { DashboardRoutes } from './dashboard/dashboard.routes';
import { UserRoutes } from './user/user.routes';
import { ErrorRoutes } from './error/error-404.routes';


export const AppRoutes = [
  ...DashboardRoutes,
  ...UserRoutes,
  ...ErrorRoutes,
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
  },
];
