import React, { useRef } from 'react';
import './NumericInput.css';

interface NumericInputProps {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (newvalue: string, name: string) => void;
}

const NumericInput = ({ label, name, value, placeholder, onChange }: NumericInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: any) => {
    e.preventDefault()
    const { value, selectionEnd } = e.target;
    const rightCharsCount: number = value.length - selectionEnd;
    const newValue: string = value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const newPosition: number = (newValue.length - rightCharsCount) !== -1 ? newValue.length - rightCharsCount : 0;

    onChange(newValue, name);
    setTimeout(() => {
      if (inputRef.current != null) {
        inputRef.current.setSelectionRange(newPosition, newPosition);
      }
    }, 0);
  };

  return (
    <div className="container">
      <label htmlFor={name}>{label}</label>
      <div className="NumericInputdiv">
        <p>£</p>
        <input
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default NumericInput;