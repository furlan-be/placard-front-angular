import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from './pages/header/header.component';
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {GestionComponent} from './pages/gestion/gestion.component';
import {ScanComponent} from './pages/scan/scan.component';
import {StorageComponent} from './pages/storage/storage.component';
import {StatisticsComponent} from './pages/statistics/statistics.component';
import {FooterComponent} from './pages/footer/footer.component';
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    GestionComponent,
    ScanComponent,
    StorageComponent,
    StatisticsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule,
    BarcodeScannerLivestreamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
