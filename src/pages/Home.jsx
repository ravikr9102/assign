import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaLayerGroup,
  FaStar,
} from "react-icons/fa";
import { LiaFilterSolid } from "react-icons/lia";
import { FaBarsProgress, FaBars } from "react-icons/fa6";
import { BsCalendarDateFill, BsBuildingFill } from "react-icons/bs";
import { VscGraphLine } from "react-icons/vsc";

const navigationButtons = [
  { label: "Day", active: false },
  { label: "Week", active: true },
  { label: "Month", active: false },
  { label: "Year", active: false },
];

const controlButtons = [
  { icon: <LiaFilterSolid />, label: "Filters" },
  { icon: <FaLayerGroup />, label: "Group By" },
  { icon: <FaStar />, label: "Favourites" },
];

const icons = [
  { icon: <FaBarsProgress /> },
  { icon: <FaBars /> },
  { icon: <BsCalendarDateFill /> },
  { icon: <BsBuildingFill /> },
  { icon: <VscGraphLine /> },
];

const tableData = [
  {
    name: "Assembly Line 1",
    days: ["", "", "", "WH/MO/00...", "WH/MO/000...", "", ""],
  },
  {
    name: "Dril Station 2",
    days: ["", "", "", "", "", "", ""],
  },
  {
    name: "Assembly Line 2",
    days: ["", "", "", "", "", "", ""],
  },
  {
    name: "Dril Station 1",
    days: ["", "", "", "", "", "", ""],
  },
];

const backgroundColor = {
  "WH/MO/00...": "bg-[#B99DAE]",
  "WH/MO/000...": "bg-[#F5BABC]",
};

export const Home = () => {
  return (
    <div className="px-6 tracking-wide">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center text-sm">
            <IconBox icon={<FaArrowLeft />} />
            <DateBox label="Today" />
            <IconBox icon={<FaArrowRight />} />
          </div>

          <div className="ml-5 uppercase">
            {navigationButtons.map((btn, index) => (
              <span
                key={index}
                className={`cursor-pointer p-2 px-1.5 rounded-md ${
                  btn.active
                    ? "bg-gray-200 text-black"
                    : "bg-white text-[#02898E] hover:bg-gray-200 hover:text-black"
                } mx-1 transition-all duration-300 ease-in-out text-sm`}
              >
                {btn.label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          {controlButtons.map((item, index) => (
            <ControlItem key={index} icon={item.icon} label={item.label} />
          ))}
        </div>

        <div className="flex items-center">
          {icons.map((item, index) => (
            <div key={index} className={`text-gray-700 mx-3`}>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100/30 border-b border-gray-200 text-sm">
              <th
                rowSpan="2"
                className="py-2 px-4 text-center border border-gray-200 font-semibold"
              >
                Operations
              </th>
              <th
                colSpan="8"
                className="py-2 px-4 text-center border border-gray-200 font-semibold"
              >
                23 April 2023 - 29 April 2023
              </th>
            </tr>
            <tr className="bg-gray-100/30 border-b border-gray-200 text-sm">
              <th className="py-2 px-4 text-left border border-gray-200 font-semibold">
                Sunday, 23rd
              </th>
              <th className="py-2 px-4 text-left border border-gray-200 font-semibold bg-[#FFFBEF]">
                Monday, 24th
              </th>
              <th className="py-2 px-4 text-left border border-gray-200 font-semibold">
                Tuesday, 25th
              </th>
              <th className="py-2 px-4 text-left border border-gray-200 font-semibold">
                Wednesday, 26th
              </th>
              <th className="py-2 px-4 text-left border border-gray-200 font-semibold">
                Thursday, 27th
              </th>
              <th className="py-2 px-4 text-left border border-gray-200 font-semibold">
                Friday, 28th
              </th>
              <th className="py-2 px-4 text-left border border-gray-200 font-semibold">
                Saturday, 29th
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <TableRow key={rowIndex} name={row.name} days={row.days} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const IconBox = ({ icon }) => (
  <div className="w-7 h-7 bg-[#02898E] text-white flex justify-center items-center">
    {icon}
  </div>
);

const DateBox = ({ label }) => (
  <div className="mx-1 w-16 h-7 bg-[#02898E] text-white flex justify-center items-center uppercase">
    {label}
  </div>
);

const ControlItem = ({ icon, label }) => (
  <div className="flex items-center mx-3 text-gray-700">
    {icon}
    <p className="ml-1">{label}</p>
  </div>
);

const TableRow = ({ name, days }) => (
  <tr className="text-sm">
    <td className="py-2 px-4 border-b border-gray-200 relative">
      {name === "Assembly Line 1" && (
        <div className="relative">
          <div className="absolute left-[115px] bg-[#D1ECD6] w-6 h-7" />
          <span className="relative">{name}</span>
        </div>
      )}
      {name !== "Assembly Line 1" && <span>{name}</span>}
    </td>
    {days.map((day, index) => {
      let specificBgColor = "border border-gray-300";
      if (index === 0) specificBgColor += " bg-[#EBEEF1]";
      else if (index === 6) specificBgColor += " bg-[#EBEEF1]";
      else if (index === 1) specificBgColor += " bg-[#FFFBEF]";
      return (
        <td key={index} className={specificBgColor}>
          <span
            className={`inline-block px-2 py-1 ${backgroundColor[day] || ""}`}
          >
            {day}
          </span>
        </td>
      );
    })}
  </tr>
);
