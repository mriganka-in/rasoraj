import React from 'react'
import Types from "@/components/types_of_sweets";
import Sweet from "@/components/sweet";

import { GiLeafSwirl } from "react-icons/gi";
import { PiPackageFill } from "react-icons/pi";
import { LuClock } from "react-icons/lu";
import { FaGlobeAmericas } from "react-icons/fa";
import { TbLeafOff } from "react-icons/tb";


export default function sweets() {
  return (
    <div className="flex flex-col items-center my-10 gap-8">
        <span className="flex items-center justify-center font-bold font-serif gap-2"> 
            <GiLeafSwirl className="text-[#C1AC74] text-5xl" />
            <h1 className="text-black text-6xl">Sweets</h1>
            <GiLeafSwirl className="text-[#C1AC74] text-5xl" />
        </span>

        <section className="flex justify-center gap-35 mb-6">
          <span className="flex flex-col items-center gap-1.5">
            <PiPackageFill className="text-[#C1AC74] text-3xl" />
            <h2 className="text-black text-xl">National Shipping in 2-3 days</h2>
          </span>
          <span className="flex flex-col items-center gap-1.5">
            <LuClock className="text-[#C1AC74] text-3xl" />
            <h2 className="text-black text-xl">18 Days Shelf Life</h2>
          </span>
          <span className="flex flex-col items-center gap-1.5">
            <FaGlobeAmericas className="text-[#C1AC74] text-3xl" />
            <h2 className="text-black text-xl">International Shipping in 6-9 Days</h2>
          </span>
          <span className="flex flex-col items-center gap-1.5">
            <TbLeafOff className="text-[#C1AC74] text-3xl" />
            <h2 className="text-black text-xl">No Preservatives</h2>
          </span>
        </section>

        <Types />
        <Sweet />

    </div>
  )
}


