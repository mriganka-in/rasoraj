import React from 'react'

import { FaArrowRight } from "react-icons/fa";

export default function banner() {
  return (
    <div className="bg-center bg-cover bg-no-repeat min-h-screen w-full flex justify-end" style={{ backgroundImage: "url('/banner_1.png')" }}>
      <div className="flex text-[#352f21] flex-col justify-center gap-4 text-right px-20 bg-opacity-70">
        <h2 className="text-6xl font-serif">Welcome to <br />Rasoraj Sweets</h2>
        <h3 className="text-2xl font-serif">Wide varieties of sweets and delicacies to choose from <br />Explore the deliciousness that awaits you!</h3>
        <button className="flex items-center font-serif gap-1 justify-center cursor-pointer border-[#F2E1C3] border-2 px-6 py-2 rounded-sm hover:bg-[#f5e5b9] hover:text-black hover:border-[#f5e5b9] focus:outline-none focus:ring-0">
          Shop Now <FaArrowRight />
        </button>
      </div>
    </div>
  )
}