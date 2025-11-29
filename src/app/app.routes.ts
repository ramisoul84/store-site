import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
    { path: "", component: MainComponent },
    { path: "auth", component: AuthComponent },
    { path: '**', component: MainComponent }
];
