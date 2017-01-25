import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './views/events/events.component';
import { ChannelsComponent } from './views/channels/channels.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'events', component: EventsComponent },
    { path: 'channels', component: ChannelsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
