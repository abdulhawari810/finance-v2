import { useState } from "react";

import Select from "react-select";

export default function SelectForm({
  options,
  title,
  value,
  onChange,
  isDisabled = false,
}) {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "64px",
      height: "64px",
      backgroundColor: "#cad5e2", // bg-gray-800
      borderColor: state.isFocused ? "#1f1c2c" : "#314158", // focus blue, normal gray
      boxShadow: "none",
      "&:hover": {
        borderColor: "#1f1c2c",
      },
      borderRadius: "8px",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "#1f1c2c" : "#6b7280",
      "&:hover": {
        color: "#1f1c2c",
      },
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: "#1f1c2c",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#cad5e2", // dropdown background
    }),
    singleValue: (provided) => ({
      ...provided,
      backgroundColor: "#cad5e2", // bg-gray-800
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#1f1c2c" // warna saat selected
        : state.isFocused
          ? "#e5e7eb" // warna saat hover
          : "white",
      color: state.isSelected ? "white" : "black",
      padding: "12px 16px",
      cursor: "pointer",
    }),
  };

  return (
    <>
      <h1 className="text-lg font-b mt-2.5">{title}</h1>
      <Select
        styles={customStyles}
        options={options}
        value={value}
        onChange={onChange}
        isDisabled={isDisabled}
        isSearchable={false}
        isClearable
      />
    </>
  );
}
