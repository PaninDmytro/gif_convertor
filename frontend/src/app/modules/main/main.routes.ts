import { Routes } from '@angular/router';
import { MainComponent } from "./main.component";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home-page',
        pathMatch: 'full',
      },
      {
        path: 'home-page',
        loadComponent: () =>
          import('./components/home-page/home-page.component').then(
            (c) => c.HomePageComponent,
          ),
        title: 'Home page',
      }
    ]
  }
];
