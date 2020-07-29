import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsRoadmapPage } from "./tabs-roadmap.page";

const routes: Routes = [
  {
    path: "",
    component: TabsRoadmapPage,
    children: [
      {
        path: "roadmap-new",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../roadmap-new/roadmap-new.module").then(
                (m) => m.RoadmapNewPageModule
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
        redirectTo: "/roadmap-new",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/roadmap-new",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoadmapRoutingModule {}
