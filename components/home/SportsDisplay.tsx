"use server"

import React from 'react'

const sports: string[] = [
    "Athlétisme", "Football",
    "Volleyball", "Tennis de table",
    "Pelote basque", "Hockey sur gazon",
    "Gymnastique", "Rugby",
    "Judo", "Danse",
    "Tennis", "Handball",
    "Kindball", "Boxe",
    "Acrogym", "Escrime",
    "Badminton"
];

export const SportsDisplay = ({ className }: { className: string }) => {
  return (
    <div className={`${className || ''}`}>
        <p className="lg:text-xl 2xl:text-2xl"><strong>Les sports découvertes :</strong></p>
        <ul className="grid grid-cols-2 md:grid-cols-4 list-disc list-inside">
            {sports.map((sport, index) => (
                <li className="lg:text-xl 2xl:text-2xl" key={index}>{sport}</li>
            ))}
        </ul>
    </div>
  )
}
