import dynamic from 'next/dynamic';

import React from 'react'

const lieu: string = "Gymnase Jean Moulin";
const address: string = "2 rue Felix Debax, 31700 Blagnac";

const MapDisplay = dynamic(() => import('../lib/MapDisplay'), {
  ssr: false,
});

export const LocationDisplay = ({className}: {className?: string}) => {
  return (
    <div className={`lg:text-xl 2xl:text-2xl ${className || ''}`}>
        <p><strong>Lieux d'activités : </strong>{lieu}</p>
        <p><strong>Adresse : </strong>{address}</p>
        <MapDisplay className="py-5"/>
    </div>
  )
}
