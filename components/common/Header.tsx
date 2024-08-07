
import Image from 'next/image'

import React from 'react'

export const Header = () => {
  return (
    <div
      className="
        grid grid-cols-4 grid-gap items-center bg-white
        h-28 md:h-48
        p-3 md:py-5 md:px-[10%] xl:px-[20%]"
    >
      <Image
        className="
          col-span-1
          w-auto h-20 md:h-36"
        src="/logo.svg"
        alt="Logo Amendonnez Bougez"
        width={600} height={600} 
      />
      
      <div 
        id="titles"
        className="
          col-span-3
          flex flex-col items-center"
      >
        <h1 className="font-bold text-xl md:text-4xl">AMENDONNEZ BOUGEZ</h1>
        <h2 className="text-xs md:text-l">ASSOCIATION MULTISPORTS. Loi 1901</h2>
      </div>
  </div>
  )
}
