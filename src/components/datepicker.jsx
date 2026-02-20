import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Custom Button
const CustomButton = forwardRef(({ value, onClick }, ref) => (
  <button
    type="button"
    onClick={onClick}
    ref={ref}
    className="p-4 w-full bg-primary text-white rounded-lg"
  >
    {value || "Pilih Tanggal"}
  </button>
));

export default function SelectDatePicker({ value, onChange }) {
  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      customInput={<CustomButton />}
      dateFormat="dd/MM/yyyy"
      className="w-full! bg-red-400!"
    />
  );
}
