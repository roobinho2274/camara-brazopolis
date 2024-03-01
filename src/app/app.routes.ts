import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: ()=> import('./modules/sitePrincipal/pages/pages.routes').then(r=>r.pageRoutes),
    },
    {
        path:'**',
        loadComponent: ()=> import('./modules/sitePrincipal/pages/not-found/not-found.component'),
    },
];
