import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import routes
import { RouterModule } from '@angular/router';
// HTTP req
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialBundle } from './materialBundle.module';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ROUTES } from './app.routes';
import { SnackpotComponent } from './components/shared/snackpot/snackpot.component';
import { BrowserComponent } from './components/browser/browser.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardsComponent } from './components/shared/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    SnackpotComponent,
    BrowserComponent,
    NoimagePipe,
    CardsComponent,
    LoadingComponent,
    SafeUrlPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialBundle,
    RouterModule.forRoot( ROUTES, { useHash: false } ),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
