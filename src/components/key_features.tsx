import React from 'react'

import { SiTicktick } from "react-icons/si";
import { TiLeaf } from "react-icons/ti";
import { GiFloatingCrystal } from "react-icons/gi";


export default function key_features() {
  return (
    <div className="flex justify-center gap-30 py-8">
        <span className="flex h-full gap-2 items-center text-2xl">
            <SiTicktick />
            <h3 className="font-serif">High Quality</h3>
        </span>
        <span className="flex h-full gap-2 items-center text-2xl">
            <TiLeaf />
            <h3 className="font-serif">100 % Vegetarian</h3>
        </span>
        <span className="flex h-full gap-2 items-center text-2xl">
            <GiFloatingCrystal />
            <h3 className="font-serif">Hygienic</h3>
        </span>
    </div>
  )
}
