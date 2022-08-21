import config from '~/config';
import { Route } from '~/types/common';

// Layouts

// Pages
import HomePage from '~/pages/HomePage';

const publicRoutes: Route[] = [{ path: config.routes.home, component: HomePage }];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };
