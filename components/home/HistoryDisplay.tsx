"use server"

import React from 'react'

export const HistoryDisplay = ({className}: {className?: string}) => {
  return (
    <div className={`text-justify ${className || ''}`}>
        <p className="lg:text-xl"><strong>Historique :</strong> Il était une fois, une association de Blagnac qui voulait faire découvrir plusieurs sports à tous les enfants. Dans le but <i>Amendonné</i> de pouvoir intégrer une association sportive qui lui plaise.</p>
    </div>
  )
}
