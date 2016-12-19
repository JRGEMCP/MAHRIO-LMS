import { ErrorRoutes } from './error/error-404.routes';


export const AppRoutes = [
  ...ErrorRoutes,
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
  },
];
