"use client";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { DatePicker, InputNumber, Space } from "antd";
import dayjs from "dayjs";
import BookingBar from "./BookingBar";

const { RangePicker } = DatePicker;

const Header = () => {
  return (
    <div className="bg-[#2C4351] w-full flex flex-col items-center  gap-8 h-full border py-40 px-10">
      <h1 className="text-white font-inter font-bold text-7xl">WanderStay</h1>
      <h2 className="border-t border-white text-white text-xl text-center">
        Votre location de vacances Au Nord
      </h2>
      <BookingBar />
    </div>
  );
};

export default Header;
