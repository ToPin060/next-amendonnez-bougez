"use server"

import Schedule from '@/types/Schedule';
import TimeSlot from '@/types/TimeSlot';

import React from 'react'

// Schedule
const schedules: Schedule[] = [
    {
        title: "Créneaux enfants",
        day: "Samedi",
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
                        <p className="lg:text-xl"><strong>{schedule.title} : </strong> {schedule.day}</p>
                        <div className="flex flex-col px-5 py-2">
                        {
                            schedule.timeslots!.map((timeslot: TimeSlot, index: number) => (
                                <p className="lg:text-xl" key={index}>{timeslot.toString()}</p>
                            ))
                        }
                        </div>
                    </div>
                ))
            }
        <div className="pt-5">
            <p><strong>Jérôme VIOTTO</strong>, président d'Amendonnez Bougez</p>
            <p><strong>Email :</strong> <a href="mailto:jeromeviotto@yahoo.fr">jeromeviotto@yahoo.fr</a></p>
            <p><strong>Téléphone :</strong> <a href="tel:0613422072">06 13 42 20 72</a></p>
        </div>
    </div>
  )
}
