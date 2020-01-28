import React from 'react';

const Home = React.lazy(() => import('./home/home'));
const Activities = React.lazy(() => import('../modules/activities/activities'));
const Agenda = React.lazy(() => import('../modules/agenda/agenda'));
const Locations = React.lazy(() => import('../modules/locations/locations'));
const Staff = React.lazy(() => import('../modules/staff/staff'));
const Reports = React.lazy(() => import('../modules/reports/reports'));

export type Route = {
  path: string;
  component: any;
}

const MAIN_ROUTES: Route[] =[
  { path: '/', component: Home },
  { path: '/Agenda', component: Agenda },
  { path: '/Activities', component: Activities },
  { path: '/Locations', component: Locations },
  { path: '/Staff', component: Staff },
  { path: '/Reports', component: Reports },
];

export default MAIN_ROUTES;