import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      // {
      //   path: 'travel-list',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../travel-list/travel-list.module').then(m => m.TravelListPageModule)
      //     }
      //   ]
      // },
      {
        path: 'travel-new',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../travel-new/travel-new.module').then(m => m.TravelNewPageModule)
          }
        ]
      },
      {
        path: 'travel-roadmap-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../travel-roadmap-list/travel-roadmap-list.module').then(m => m.TravelRoadmapListPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/travel-new',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/travel-new',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
