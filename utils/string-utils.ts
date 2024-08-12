
export function computeHoursFromNumber(value_: number): string {
    let hours: number = Math.floor(value_);
    let minutes: number = (value_ - hours) * 60;
    return hours.toString().padStart(2, "0") + "H" + minutes.toString().padStart(2, "0");
}