import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import './DateTimeInput.css';

import '../../styles/base/forms.scss';
import '../../styles/base/buttons.scss';

export interface DateTimeInputProps {
  name: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  timeEnabled?: boolean;
  timeOnly?: boolean;
  minDate?: Date;
  maxDate?: Date;
  // selectedDate: Date;
}

export const DateTimeInput = ({ name, label, required, disabled, readonly, timeEnabled, timeOnly, minDate, maxDate }: DateTimeInputProps) => {
  const { register, formState: { errors, dirtyFields, touchedFields } } = useFormContext();

  // const [dateValue, setDateValue] = useState(selectedDate ? selectedDate.toDateString() : '');


  return (
    <div className="input-row">
      <label htmlFor={name}>{label}</label>
      <div className={`input text${!!errors[name] ? ' invalid' : ''}${!!dirtyFields[name] ? ' dirty' : ''}${!!touchedFields[name] ? ' touched' : ''}`}>
        <input
          type="text"
          //name={name}
          id={name}
          //onChange={(e) => setDate(e.target.value)}
          //value={dateValue}
          placeholder="16/01/2021"
          {...register(name, { required: required })}
        />
      </div>
    </div>
  );
};

export default DateTimeInput;