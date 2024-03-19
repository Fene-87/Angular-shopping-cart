import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';

export const routes: Routes = [
    {
        path: 'header',
        component: HeaderComponent,
    },
    {
        path: 'top-header',
        component: TopHeaderComponent,
    }
];
