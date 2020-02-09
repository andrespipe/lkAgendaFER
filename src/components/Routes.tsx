import React from 'react';

const Activities = React.lazy(() => import('../modules/activities/activities'));
const Agenda = React.lazy(() => import('../modules/agenda/agenda'));
const Home = React.lazy(() => import('./home/home'));
const Locations = React.lazy(() => import('../modules/locations/locations'));
const Reports = React.lazy(() => import('../modules/reports/reports'));
const Staff = React.lazy(() => import('../modules/staff/staff'));
const Account = React.lazy(()=> import('../modules/account/account'));

export type Route = {
  path: string;
  component: any;
}

const MAIN_ROUTES: Route[] =[
  { path: '/', component: Home },
  { path: '/Account',component: Account },
  { path: '/Agenda', component: Agenda },
  { path: '/Activities', component: Activities },
  { path: '/Locations', component: Locations },
  { path: '/Staff', component: Staff },
  { path: '/Reports', component: Reports },
];

export default MAIN_ROUTES;