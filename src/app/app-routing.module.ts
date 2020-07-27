import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'travel-list',
    loadChildren: () =>
      import('./travel-list/travel-list.module').then(
        (m) => m.TravelListPageModule
      ),
  },
  {
    path: 'travel-new',
    loadChildren: () =>
      import('./travel-new/travel-new.module').then(
        (m) => m.TravelNewPageModule
      ),
  },
  {
    path: 'travel-new/:id',
    loadChildren: () =>
      import('./travel-new/travel-new.module').then(
        (m) => m.TravelNewPageModule
      ),
  },
  {
    path: 'travel-roadmap-list',
    loadChildren: () =>
      import('./travel-roadmap-list/travel-roadmap-list.module').then(
        (m) => m.TravelRoadmapListPageModule
      ),
  },
  {
    path: 'travel-roadmap-new',
    loadChildren: () =>
      import('./travel-roadmap-new/travel-roadmap-new.module').then(
        (m) => m.TravelRoadmapNewPageModule
      ),
  },
  {
    path: 'travel-around',
    loadChildren: () => import('./travel-around/travel-around.module').then( m => m.TravelAroundPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
