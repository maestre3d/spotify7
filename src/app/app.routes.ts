import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { BrowserComponent } from './components/browser/browser.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'browser', component: BrowserComponent },
    // Redirect to default
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    // 404  redirect
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
