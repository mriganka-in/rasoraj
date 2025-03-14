import React from 'react'

export default function 
() {
  return (
    <div className="flex justify-center gap-15 px-6 py-6">

        <span className="flex flex-col gap-2">
            <img className="w-75 h-75 rounded-lg cursor-pointer" src="https://www.vegrecipesofindia.com/wp-content/uploads/2018/02/mishti-doi-recipe.jpg" alt="" />
            <h1 className="text-2xl font-semibold font-serif pl-2">Dahi</h1>
            <p className="text-xl font-semibold font-serif text-[#C1AC74] pl-2">₹280</p>
            <button className="h-10 w-75 cursor-pointer hover:bg-[#d6c080] bg-[#C1AC74] border rounded-md border-gray-300 focus:outline-none focus:ring-0" type="submit">View</button>
        </span>            
    </div>
  )
}
