import dynamic from 'next/dynamic';

import React from 'react'

const lieu: string = "Gymnase Jean Moulin";
const address: string = "2 rue Felix Debax, 31700 Blagnac";

const MapDisplay = dynamic(() => import('../lib/MapDisplay'), {
  ssr: false,
});

export const LocationDisplay = ({className}: {className?: string}) => {
  return (
    <div className={`lg:text-xl ${className || ''}`}>
        <MapDisplay className="py-5"/>
        <p><strong>Lieux d'activités : </strong>{lieu}</p>
        <p><strong>Adresse : </strong>{address}</p>
    </div>
  )
}
