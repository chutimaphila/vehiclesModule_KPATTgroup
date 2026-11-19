import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const vehicleRoutes = [
  {
    exact: true,
    path: '/app/vehicles',
    component: () => <Redirect to="/app/vehicles/dashboard" />
  },
  {
    exact: true,
    path: '/app/vehicles/dashboard',
    component: lazy(() => import('./views/VehicleDashboardView'))
  },
  {
    exact: true,
    path: '/app/vehicles/list',
    component: lazy(() => import('./views/VehicleListView'))
  },
  {
    exact: true,
    path: '/app/vehicles/inspections',
    component: lazy(() => import('./views/InspectionListView'))
  },
  {
    exact: true,
    path: '/app/vehicles/inspections/create',
    component: lazy(() => import('./views/InspectionFormView'))
  },
  {
    exact: true,
    path: '/app/vehicles/inspections/:inspectionId/edit',
    component: lazy(() => import('./views/InspectionFormView'))
  },
  {
    exact: true,
    path: '/app/vehicles/defects',
    component: lazy(() => import('./views/DefectListView'))
  },
  {
    exact: true,
    path: '/app/vehicles/history',
    component: lazy(() => import('./views/InspectionHistoryView'))
  },
  {
    exact: true,
    path: '/app/vehicles/history/:inspectionId',
    component: lazy(() => import('./views/InspectionDetailsView'))
  },
  {
    exact: true,
    path: '/app/vehicles/documents',
    component: lazy(() => import('./views/DocumentExportView'))
  }
];

export default vehicleRoutes;
