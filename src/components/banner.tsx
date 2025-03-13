import React from 'react'

import { FaArrowRight } from "react-icons/fa";

export default function banner() {
  return (
    <div className="h-screen bg-center bg-cover bg-[url('https://as2.ftcdn.net/v2/jpg/00/64/34/41/1000_F_64344122_VyUU1ZDESZkKmrkh1WK6HE4kgyH8oK4A.jpg')] flex justify-end">
      <div className="flex text-[#f0f8ff] flex-col h-full justify-center gap-4 text-right px-20">
        <h2 className="text-6xl font-serif">Welcome to <br />Rasoraj Sweets</h2>
        <h3 className="text-2xl font-serif">Wide varieties of sweets and delicacies to choose from <br />Explore the deliciousness that awaits you!</h3>
        <button className="flex items-center font-serif gap-1 justify-center cursor-pointer border-2 px-6 py-2 rounded-sm hover:bg-slate-300 hover:text-black hover:border-slate-300">Shop Now<FaArrowRight/></button>
      </div>
    </div>
  )
}