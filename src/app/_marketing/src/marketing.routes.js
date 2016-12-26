import { MarketingComponent } from './marketing.component';

export const MarketingRoutes = [
  {
    path: '',
    component: MarketingComponent
  },
  {
    path: 'm/courses/:title',
    component: MarketingComponent
  },
  {
    path: 'm/:view',
    component: MarketingComponent
  },
  {
    path: 'm',
    pathMatch: 'full',
    redirectTo: ''
  }
];