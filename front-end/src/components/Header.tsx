import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-[#2C4351] to-[#6893ac] w-full h-full py-40 border px-10 lg:px-40">
      <section className="w-full grid grid-cols-5 bg-white px-4 py-4 rounded-full">
        <div className="flex gap-3 w-full h-full">
          <div className="rounded-full border w-12 h-12 flex items-center justify-center text-2xl bg-[#E6EEF3] text-[#779DB4] border-[#779DB4]">
            <CiLocationOn />
          </div>
          <input type="text" className="w-[75%] outline-none" />
        </div>
        <div className="flex gap-3 w-full h-full">
          <div className="rounded-full border w-12 h-12 flex items-center justify-center text-2xl bg-[#E6EEF3] text-[#779DB4] border-[#779DB4]">
            <FaRegCalendarAlt />
          </div>
          <input type="text" className="w-[75%] outline-none" />
        </div>
        <div className="flex gap-3 w-full h-full">
          <div className="rounded-full border w-12 h-12 flex items-center justify-center text-2xl bg-[#E6EEF3] text-[#779DB4] border-[#779DB4]">
            <FaRegCalendarAlt />
          </div>
          <input type="text" className="w-[75%] outline-none" />
        </div>
        <div className="flex gap-3 w-full h-full">
          <div className="rounded-full border w-12 h-12 flex items-center justify-center text-2xl bg-[#E6EEF3] text-[#779DB4] border-[#779DB4]">
            <FaUsers />
          </div>
          <input type="text" className="w-[75%] outline-none" />
        </div>
      </section>
    </div>
  );
};

export default Header;
