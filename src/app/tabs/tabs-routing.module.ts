import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "travel-new",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../travel-new/travel-new.module").then(
                (m) => m.TravelNewPageModule
              ),
          },
        ],
      },
      {
        path: "roadmap-list",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../roadmap-list/roadmap-list.module").then(
                (m) => m.RoadmapListPageModule
              ),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/travel-new",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/travel-new",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
