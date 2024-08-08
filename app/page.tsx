
import { PicturesDisplay } from '@/components/home/PicturesDisplay'
import { HistoryDisplay } from '@/components/home/HistoryDisplay'
import { SchedulesDisplay } from '@/components/home/SchedulesDisplay';

import React from 'react'

export default function Home() {
  return (

    <div
      className="
        grid grid-cols-1 md:grid-cols-4 gap-5 justify-center items-center"
    >
      <HistoryDisplay className="col-span-1 md:col-start-4" />
      <PicturesDisplay className="col-span-1 md:col-span-3 md:row-start-1" />
      <SchedulesDisplay className="col-span-1 md:col-span-2" />
    </div>
  );
}
