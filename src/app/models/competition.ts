import { Day } from './day';

export class Competition {
    key: string;
    name: string;
    order: number;
    country: string;
    days: Array<Day>;
}
