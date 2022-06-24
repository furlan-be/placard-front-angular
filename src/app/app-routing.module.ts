import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {GestionComponent} from "./pages/gestion/gestion.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {ScanComponent} from "./pages/scan/scan.component";
import {StorageComponent} from "./pages/storage/storage.component";
import {StatisticsComponent} from "./pages/statistics/statistics.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: "home",
    component: HomeComponent
  }, {
    path: "gestion",
    component: GestionComponent
  }, {
    path: "scan",
    component: ScanComponent
  }, {
    path: "storage",
    component: StorageComponent
  }, {
    path: "statistics",
    component: StatisticsComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
