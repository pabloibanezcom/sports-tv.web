import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FacebookService } from 'ng2-facebook-sdk';

import { routing } from './app.routing';
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';
import { EventsComponent } from './views/events/events.component';

import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';
import { AlertService } from './services/alert.service';
import { ArenavisionService } from './services/arenavision.service';
import { UsersService } from './services/users.service';


import { BoxSportComponent } from './base/box-sport/box-sport.component';
import { BoxCompetitionComponent } from './base/box-competition/box-competition.component';
import { BoxEventComponent } from './base/box-event/box-event.component';
import { ChannelsComponent } from './views/channels/channels.component';
import { TeamShowComponent } from './base/team-show/team-show.component';
import { DefaultImageDirective } from './directives/default-image.directive';
import { OptionalImageContainerComponent } from './base/optional-image-container/optional-image-container.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { DayShowComponent } from './base/day-show/day-show.component';
import { LoginComponent } from './views/login/login.component';
import { UsersComponent } from './views/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    BoxSportComponent,
    BoxCompetitionComponent,
    BoxEventComponent,
    ChannelsComponent,
    TeamShowComponent,
    DefaultImageDirective,
    OptionalImageContainerComponent,
    OrderByPipe,
    DayShowComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [AuthGuard, FacebookService, AuthService, HttpService, AlertService, ArenavisionService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
