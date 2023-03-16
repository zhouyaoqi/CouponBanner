import { IRouterConfig, lazy } from 'ice';

const Home = lazy(() => import('@/pages/CouponBanner/index'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Home,
  },
];

export default routerConfig;
