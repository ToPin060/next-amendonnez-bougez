
import { PicturesDisplay } from '@/components/home/PicturesDisplay'
import { HistoryDisplay } from '@/components/home/HistoryDisplay'
import React from 'react'

export default function Home() {
  return (

    <div
      className="
        grid grid-cols-1 md:grid-cols-4 gap-5 justify-center items-center"
    >
      <PicturesDisplay className="col-span-1 md:col-span-3"/>
      <HistoryDisplay className="col-span-1 lg:text-xl 2xl:text-2xl"/>
    </div>
  );
}
