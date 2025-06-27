"use server"

import React from 'react'

export const HistoryDisplay = ({className}: {className?: string}) => {
  return (
    <div className={`text-justify ${className || ''}`}>
        {/* <p className="lg:text-xl"><strong>Historique :</strong> Il était une fois, une association de Blagnac qui voulait faire découvrir plusieurs sports à tous les enfants. Dans le but <i>Amendonné</i> de pouvoir intégrer une association sportive qui lui plaise.</p> */}
        <p className="lg:text-xl"><strong>Historique :</strong> Le projet de l'association est de faire découvrir un très grand nombre d'activités sportives en partenariat avec les associations sportives blagnacaises aux enfants scolarisés a Blagnac en priorité. Ceci leur permettra de choisir au mieux l'activité sportive préférée. De toute façon Amendonnez, il faut se Bougez pour les petits et les grands 😁
</p>
    </div>
  )
}
