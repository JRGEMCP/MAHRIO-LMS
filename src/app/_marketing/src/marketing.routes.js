import { MarketingComponent } from './marketing.component';
import { SignIn } from './core/components/sign-in/sign-in.component';
import { Register } from './core/components/register/register.component';

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
    path: 'login',
    component: SignIn
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'm',
    pathMatch: 'full',
    redirectTo: ''
  }
];