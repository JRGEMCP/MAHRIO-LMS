import { OwnerComponent } from './owner.component';

export const OwnerRoutes = [
  {
    path: 'o',
    pathMatch: 'full',
    redirectTo: 'o/analysis'
  },
  {
    path: 'o/:view',
    component: OwnerComponent
  }
];