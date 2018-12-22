import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import {MatchListComponent} from './matches/match-list.component';
import {MatchThumbnailComponent} from './matches/match-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    MatchListComponent,
    MatchThumbnailComponent,
    NavbarComponent
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
