import {  RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'user-profile', title: 'Booking Details',  icon:'person', class: '' },
    { path: 'table-list', title: 'Special Booking Details',  icon:'content_paste', class: '' },
    { path: 'typography', title: 'Enquiry',  icon:'library_books', class: '' },
    { path: 'icons', title: 'Resources',  icon:'bubble_chart', class: '' },
    { path: 'maps', title: 'Deal’s',  icon:'location_on', class: '' },
    { path: 'notifications', title: 'Admin Work',  icon:'notifications', class: '' },
    { path: 'upgrade', title: 'Graphical Representation',  icon:'unarchive', class: 'active-pro' },
];
