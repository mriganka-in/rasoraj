import React from "react";

export default function contact() {
  return (
    <div className="flex justify-center items-center">
      <div className=" flex flex-col w-full max-w-3xl p-8 rounded-lg gap-3">
        <h1 className="text-4xl font-semibold text-center text-gray-800">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 ">
          Do you have any question?
        </p>

        <form className="mt-4 space-y-4">
          <span className="flex gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 p-3 border border-[#C1AC74] rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-[#C1AC74]"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-1/2 p-3 border border-[#C1AC74] rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-[#C1AC74]"
            />
          </span>

          <textarea
            placeholder="Message"
            rows={6}
            className="w-full p-3 border border-[#C1AC74] rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-[#C1AC74]"
          />
        </form>

        <div className="flex justify-center">
          <button className="bg-[#C1AC74] cursor-pointer text-black px-8 py-2 rounded-md text-lg font-medium hover:bg-[#d6c080] focus:outline-none focus:ring-0">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
