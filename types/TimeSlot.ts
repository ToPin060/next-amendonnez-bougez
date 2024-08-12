import { computeHoursFromNumber } from "@/utils/string-utils";

export interface ITimeSlot {
    start: number,
    end: number,
    note?: string | undefined
};

export default class TimeSlot implements ITimeSlot {
    start: number;
    end: number;
    note?: string | undefined;

    constructor(start_: number, end_: number, note_?: string) {
        this.start = start_;
        this.end = end_;
        if (note_ !== undefined) {
            this.note = note_;
        }
    }

    public toString(): string {
        return `${computeHoursFromNumber(this.start)}    ${computeHoursFromNumber(this.end)} - ${this.note}`;
    }
}