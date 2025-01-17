import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'module-3',
        loadComponent: () => import('./module-3/module-3.component').then(m => m.Module3Component)
    },
    {
        path: 'module-4', 
        loadComponent: () => import('./module-4/module-4.component').then(m => m.Module4Component)
    }
];
