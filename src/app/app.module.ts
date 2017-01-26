import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventsComponent } from './views/events/events.component';

import { ArenavisionService } from './services/arenavision.service';
import { BoxSportComponent } from './base/box-sport/box-sport.component';
import { BoxCompetitionComponent } from './base/box-competition/box-competition.component';
import { BoxEventComponent } from './base/box-event/box-event.component';
import { ChannelsComponent } from './views/channels/channels.component';
import { TeamShowComponent } from './base/team-show/team-show.component';
import { DefaultImageDirective } from './directives/default-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    BoxSportComponent,
    BoxCompetitionComponent,
    BoxEventComponent,
    ChannelsComponent,
    TeamShowComponent,
    DefaultImageDirective
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [ArenavisionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
