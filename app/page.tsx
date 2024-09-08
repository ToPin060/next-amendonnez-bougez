
import { PicturesDisplay } from '@/components/home/PicturesDisplay'
import { HistoryDisplay } from '@/components/home/HistoryDisplay'
import { SchedulesDisplay } from '@/components/home/SchedulesDisplay';

import React from 'react'
import { LocationDisplay } from '@/components/home/LocationDisplay';
import { SportsDisplay } from '@/components/home/SportsDisplay';
import { ContactDisplay } from '@/components/home/ContactDisplay';

export default function Home() {
  return (

    <div
      className="
        grid grid-cols-1 md:grid-cols-4 gap-5 justify-center items-center"
    >
      <HistoryDisplay className="col-span-1 md:col-start-4" />
      <PicturesDisplay className="col-span-1 md:col-span-3 md:row-start-1" />
      <SportsDisplay className="col-span-1 md:col-span-4 md:row-start-2" />
      <SchedulesDisplay className="col-span-1 md:col-span-2" />
      <LocationDisplay className="col-span-1 md:col-span-2 md:row-start-3" />
    </div>
  );
}
