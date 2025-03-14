import React from 'react'

import Savories from "@/components/card/savories_food";

import { GiLeafSwirl } from "react-icons/gi";

export default function sweets() {
  return (
    <div className="flex flex-col items-center my-10 gap-8">
        <span className="flex items-center justify-center font-bold font-serif gap-2"> 
            <GiLeafSwirl className="text-[#C1AC74] text-5xl" />
            <h1 className="text-black text-6xl">Savories</h1>
            <GiLeafSwirl className="text-[#C1AC74] text-5xl" />
        </span>
        
        <Savories />
    </div>
  )
}


