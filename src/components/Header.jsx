import React, { useState } from "react";
import { IoSearchOutline, IoClose } from "react-icons/io5";
import { LiaFilterSolid } from "react-icons/lia";
import { FaLayerGroup } from "react-icons/fa";

export const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([
    {
      value: "In Progress or Ready or Waiting or Pending",
      icon: <LiaFilterSolid className="text-white" />,
    },
    {
      value: "Work Center",
      icon: <FaLayerGroup className="text-white" />,
    },
  ]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setTags([
        ...tags,
        {
          value: inputValue.trim(),
          icon: <IoSearchOutline className="text-white" />,
        },
      ]);
      setInputValue("");
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };
  return (
    <div className="p-6 tracking-wide">
      <div className="flex justify-between items-center">
        <div>
          <h2>Work Orders Planning</h2>
        </div>
        <div className="relative w-full max-w-4xl">
          <div className="flex flex-wrap items-center border-b border-b-gray-400">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="border-b border-b-gray-400 border-t border-t-gray-400 border-r border-r-gray-400 text-gray-700 pr-2.5 mr-2 flex items-center"
              >
                <div className="bg-[#74556C] p-1 flex items-center justify-center w-6 h-6">
                  {tag.icon}
                </div>
                <span className="ml-1">{tag.value}</span>
                <IoClose
                  className="ml-2 cursor-pointer"
                  onClick={() => removeTag(index)}
                />
              </div>
            ))}
            <input
              className="flex-grow pl-2 py-1.5 outline-none"
              type="text"
              placeholder="Search..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <IoSearchOutline className="ml-2 text-gray-500 text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
