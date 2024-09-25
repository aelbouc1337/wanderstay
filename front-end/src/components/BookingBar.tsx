"use client";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { DatePicker, InputNumber, Space } from "antd";
import dayjs from "dayjs";
import { AutoComplete } from "antd";

const { RangePicker } = DatePicker;

const BookingBar = () => {
  const bookedDates = ["2024-09-28", "2024-10-01", "2024-10-03"]; // List of booked dates (in string format)

  // Function to disable specific dates
  const disabledDate = (current: any) => {
    return bookedDates.some((date) => current.isSame(dayjs(date), "day"));
  };

  const cities = [
    { value: "Martil" },
    { value: "El Hoceima" },
    { value: "Tetouan" },
  ];

  return (
    <section className="w-full font-inter lg:grid lg:grid-cols-4 lg:gap-2 flex flex-col rounded-3xl gap-4 bg-white px-4 py-4 lg:rounded-full">
      <div className="flex gap-3 w-full h-full items-center">
        <div className="rounded-full border w-12 h-12 flex items-center justify-center text-2xl bg-[#E6EEF3] text-[#779DB4] border-[#779DB4]">
          <CiLocationOn />
        </div>
        <AutoComplete
          options={cities}
          className="w-[80%] text-lg placeholder:text-lg"
          placeholder="type a city"
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
          variant="borderless"
        />
      </div>
      <div className="flex gap-3 w-full h-full items-center">
        <div className="rounded-full border w-12 h-12 flex items-center justify-center text-2xl bg-[#E6EEF3] text-[#779DB4] border-[#779DB4]">
          <FaRegCalendarAlt />
        </div>
        <RangePicker
          className="w-[75%] border-none"
          disabledDate={disabledDate} // Disable already booked dates
          format="YYYY-MM-DD"
        />
      </div>
      <div className="flex gap-3 w-full h-full items-center">
        <div className="rounded-full border w-12 h-12 flex items-center justify-center text-2xl bg-[#E6EEF3] text-[#779DB4] border-[#779DB4]">
          <FaUsers />
        </div>
        <div className="w-[75%] flex flex-col text-slate-500">
          <span>Nombre d'invités</span>
          <InputNumber
            className="border-none w-full text-slate-500"
            size="large"
            min={1}
            max={8}
            defaultValue={1}
          />
        </div>
      </div>
      <div className="flex gap-3 w-full h-full items-center">
        <button className=" text-white w-full bg-[#779DB4] py-4 px-5 rounded-full">
          Search
        </button>
      </div>
    </section>
  );
};

export default BookingBar;
