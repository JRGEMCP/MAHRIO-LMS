import { DashboardRoutes } from './dashboard/dashboard.routes';
import { ConversationRoutes } from './conversation/conversation.routes';
import { NetworkRoutes } from './network/network.routes';
import { UserRoutes } from './user/user.routes';
import { ErrorRoutes } from './error/error-404.routes';


export const AppRoutes = [
  ...ConversationRoutes,
  ...DashboardRoutes,
  ...NetworkRoutes,
  ...UserRoutes,
  ...ErrorRoutes,
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
  },
];
