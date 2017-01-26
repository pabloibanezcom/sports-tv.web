import { Channel } from './channel';
import { Team } from './team';

export class Event {
    date: Date;
    name: string;
    teams: Array<Team>;
    channels: Array<Channel>;
}
