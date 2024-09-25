import React from "react";

const Navbar = () => {
  return (
    <div className="w-full font-inter text-[#243242] bg-white shadow-md flex justify-between py-9 px-14">
      <h4 className="font-bold uppercase">WanderStay</h4>
      <ul className="hidden lg:flex gap-4 items-center">
        <li className="cursor-pointer font-semibold text-xl hover:scale-105 transition-all duration-500">
          WanderStay
        </li>
        <li className="w-2 h-2 rounded-full bg-slate-500"></li>
        <li className="cursor-pointer font-semibold text-xl hover:scale-105 transition-all duration-500">
          Tous les Appartements
        </li>
        <li className="w-2 h-2 rounded-full bg-slate-500"></li>
        <li className="cursor-pointer font-semibold text-xl hover:scale-105 transition-all duration-500">
          Contactez Nous
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
