import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './views/login/login.component';
import { EventsComponent } from './views/events/events.component';
import { ChannelsComponent } from './views/channels/channels.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'events', component: EventsComponent, canActivate: [AuthGuard] },
    { path: 'channels', component: ChannelsComponent, canActivate: [AuthGuard] }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
