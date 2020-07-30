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
    path: 'tabs-roadmap',
    loadChildren: () =>
      import('./tabs-roadmap/tabs-roadmap.module').then((m) => m.TabsRoadmapPageModule),
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
    path: 'roadmap-list',
    loadChildren: () =>
      import('./roadmap-list/roadmap-list.module').then(
        (m) => m.RoadmapListPageModule
      ),
  },
  {
    path: 'roadmap-new',
    loadChildren: () =>
      import('./roadmap-new/roadmap-new.module').then(
        (m) => m.RoadmapNewPageModule
      ),
  },
  {
    path: 'travel-around',
    loadChildren: () => import('./travel-around/travel-around.module').then( m => m.TravelAroundPageModule)
  },
  {
    path: 'travel-detail',
    loadChildren: () => import('./travel-detail/travel-detail.module').then( m => m.TravelDetailPageModule)
  },
  {
    path: 'guide-list',
    loadChildren: () => import('./guide-list/guide-list.module').then( m => m.GuideListPageModule)
  },  {
    path: 'daily',
    loadChildren: () => import('./daily/daily.module').then( m => m.DailyPageModule)
  }



];
@NgModule({
  imports: [
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
