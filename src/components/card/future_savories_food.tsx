import React from 'react'

export default function savories_food() {
  return (
    <div className="flex justify-center gap-15 px-6 py-6">

        <span className="flex flex-col gap-2">
            <img className="w-75 h-75 rounded-lg cursor-pointer" src="https://www.vegrecipesofindia.com/wp-content/uploads/2018/02/mishti-doi-recipe.jpg" alt="" />
            <h1 className="text-2xl font-semibold font-serif pl-2">Dahi</h1>
            <p className="text-xl font-semibold font-serif text-[#C1AC74] pl-2">₹280</p>

            <span className="flex items-center space-x-2">
                <select defaultValue={"1kg"} className="flex justify-center cursor-pointer border border-gray-300 h-10 w-36 px-3  py-1 rounded-md focus:outline-none">
                    <option>250g</option>
                    <option>500g</option>
                    <option >1kg</option>
                    <option>2kg</option>
                </select>
           
                <div className="flex justify-center items-center border border-gray-300 h-10 w-37 px-2 py-1 rounded-md">
                    <button className="px-2 text-lg cursor-pointer focus:outline-none focus:ring-0">-</button>
                    <span className="px-3">1</span>
                    <button className="px-2 text-lg cursor-pointer focus:outline-none focus:ring-0">+</button>
                </div>
            </span>
            <button className="h-10 w-75 cursor-pointer hover:bg-[#d6c080] bg-[#C1AC74] rounded-md focus:outline-none focus:ring-0" type="submit">Add to cart</button>
        </span>           
            
    </div>
  )
}
