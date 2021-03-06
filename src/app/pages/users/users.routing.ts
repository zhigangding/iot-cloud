import { Routes, RouterModule }  from '@angular/router';

import { UserComponent } from './components/index';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
