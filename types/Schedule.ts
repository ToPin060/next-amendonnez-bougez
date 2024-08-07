
import TimeSlot from "./TimeSlot";

export interface ISchedule {
    title: string,
    day: string,
    timeslot?: TimeSlot[] | undefined
}

export default class Schedule implements ISchedule {
    title: string;
    day: string;
    timeslots: TimeSlot[] | undefined;
    
    constructor(title_: string, day_: string, timeslots_?: TimeSlot[]) {
        this.title = title_;
        this.day = day_;
        if (timeslots_ !== undefined) {
            this.timeslots = timeslots_;
        }
    }
}