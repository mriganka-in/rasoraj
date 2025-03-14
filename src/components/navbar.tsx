import React from 'react'

import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function navbar() {
  return (
    <nav className="flex justify-between gap-2 items-center p-8 h-15 bg-amber-200">

      <div id="logo" className="flex items-center cursor-pointer">
        <h1 className="font-bold font-serif text-3xl text-orange-600">Rasoraj</h1>
      </div>

      <div id="menu">
        <ul className="flex text-xl space-x-16 text-black">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">About</li>
          <li className="hover:text-orange-500 cursor-pointer">Sweets</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact</li>
        </ul>
      </div>

      <div id = "menu-icons" className="flex text-xl gap-4 text-black">
        <IoIosSearch className="hover:text-orange-500 cursor-pointer"/>
        <CgProfile className="hover:text-orange-500 cursor-pointer"/>      
        <HiOutlineShoppingCart className="hover:text-orange-500 cursor-pointer"/>
      </div>
    </nav>
  )
}
