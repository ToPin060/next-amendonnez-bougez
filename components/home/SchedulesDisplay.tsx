"use server"

import Schedule from '@/types/Schedule';
import TimeSlot from '@/types/TimeSlot';

import React from 'react'

// Schedule
const schedules: Schedule[] = [
    {
        title: "Créneaux enfants",
        day: "Mercredi",
        timeslots: [
            new TimeSlot(9., 10., "3 ans"),
            new TimeSlot(10., 11., "4 ans"),
            new TimeSlot(11.25, 12.25, "5 et 6 ans")
        ]
    },
    {
        title: "Créneaux adultes",
        day:"Samedi",
        timeslots: [
            new TimeSlot(10., 11., "Remise en forme"),
            new TimeSlot(11.25, 12.25, "Remise en forme")
        ]
    }
];

export const SchedulesDisplay = ({className}: {className?: string}) => {
  return (
    <div className={`w-fit flex flex-col ${className || ''}`}>
            {
                schedules.map((schedule: Schedule, index: number) => (
                    <div key={"schedule" + index}>
                        <p className="lg:text-xl 2xl:text-2xl"><strong>{schedule.title} : </strong> {schedule.day}</p>
                        <div className="flex flex-col px-5 py-2">
                        {
                            schedule.timeslots!.map((timeslot: TimeSlot, index: number) => (
                                <p className="lg:text-xl 2xl:text-2xl" key={index}>{timeslot.toString()}</p>
                            ))
                        }
                        </div>
                    </div>
                ))
            }
        </div>
  )
}
