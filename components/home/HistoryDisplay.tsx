"use server"

import React from 'react'

export const HistoryDisplay = ({className}: {className?: string}) => {
  return (
    <div className={`text-justify ${className || ''}`}>
        <p className="lg:text-xl 2xl:text-2xl"><strong>Historique :</strong> Il était une fois, une association de Blagnac qui voulais faire découvrir plusieurs sports à tous les enfants. Dans le but <i>Amendonné</i> de pouvoir intégrer une association sportive qui lui plaise.</p>
    </div>
  )
}
