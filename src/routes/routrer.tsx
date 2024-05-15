import { ReactNode } from 'react';
import { Error } from '@/pages/Error';
import { Main } from '@/pages/Main';
import { Profile } from '@/pages/Profile';
import { Logo } from '@/pages/Logo';
import { FAQ } from '@/pages/FAQ';
import { Info } from '@/pages/Info';
import { Cart } from '@/pages/Cart';

export interface IRoute {
    path: string;
    component: ReactNode;
}

export enum RouteNames {
    HOME = '/',
    PROFILE = '/profile',
    LOGO = '/logo',
    FAQ = '/faq',
    INFO = '/info',
    CART = '/cart',
    ERROR = '*',
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.HOME, component: <Main /> },
    { path: RouteNames.PROFILE, component: <Profile /> },
    { path: RouteNames.LOGO, component: <Logo /> },
    { path: RouteNames.FAQ, component: <FAQ /> },
    { path: RouteNames.INFO, component: <Info /> },
    { path: RouteNames.CART, component: <Cart /> },
    { path: RouteNames.ERROR, component: <Error /> },
];
