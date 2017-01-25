import { Channel } from './channel';

export class Event {
    date: Date;
    name: string;
    channels: Array<Channel>;
}
