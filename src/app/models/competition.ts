import { Event } from './event';

export class Competition {
    key: string;
    name: string;
    order: number;
    country: string;
    events: Array<Event>;
}
