import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { FooterComponent } from './footer/footer.component';
import { LanguagesComponent } from './nav-bar/languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PlaylistsComponent,
    FooterComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
