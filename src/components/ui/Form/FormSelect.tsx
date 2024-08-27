"use client";

import { useFormContext, Controller } from "react-hook-form";
import { useState, useEffect } from "react";



interface ISelectField {
  name: string;
  placeholder?: string;
  label?: string;
  options: { label: string; value: string }[];
  validation?: object;
}



const FormSelect = ({
  name,
  placeholder = "Please select an option",
  label,
  options,
  validation,
}: ISelectField) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {label && <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>}
      <Controller
        name={name}
        control={control}
        rules={validation}
        render={({ field }) => (
          <CustomSelect
            options={options}
            placeholder={placeholder}
            {...field} 
          />
        )}
      />
    </>
  );
};

export default FormSelect;






function CustomSelect({ options, label, placeholder, value, onChange }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<{ label: string; value: string } | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionSelect = (option: { label: string; value: string }) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option.value); // Notify Controller of the selected value
  };

  // Update selectedOption when value prop changes
  useEffect(() => {
    const foundOption = options.find((opt: { label: string; value: string }) => opt.value === value);
    setSelectedOption(foundOption || null);
  }, [value, options]);

  return (
    <div className="relative w-auto">
      <div
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        <span className={selectedOption ? "text-gray-900" : "text-gray-500"}>
          {selectedOption?.label || placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 transform ${isOpen ? "rotate-180" : ""
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="max-h-60 py-1 overflow-auto">
            {options.map((option: { label: string; value: string }, index: number) => (
              <li
                key={index}
                onClick={() => handleOptionSelect(option)}
                className="px-3 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}




