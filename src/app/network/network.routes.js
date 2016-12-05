import { Network } from './network.component';
import { NetworkShow } from './show/network-show.component';

export const NetworkRoutes = [
  { path: 'networks/:title', component: NetworkShow },
  { path: 'networks', component: Network },
];
