import { InstructorComponent } from './instructor.component';

export const InstructorRoutes = [
  {
    path: 'i',
    pathMatch: 'full',
    redirectTo: 'i/dashboard'
  },
  {
    path: 'i/:view',
    component: InstructorComponent
  }
];