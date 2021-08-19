import { useState } from "react";
import { useFormContext } from "react-hook-form";

export interface LogoFormProps {
  name:  string;
  required?: boolean;
}

export function ColourPicker({ name, required }: LogoFormProps) {
  const { register, formState: { errors, dirtyFields, touchedFields } } = useFormContext();

  let [colorState, setColorState] = useState('#1569a8');
  let [activeState, setActiveState] = useState(false);


  function handleChange(e: any) {
    setColorState(e.target.value);
    setActiveState(!activeState);
  };


  return (
    <>
      <input
      //  {...register(name, { required: required })}
        type="color"
        value={colorState}
        onChange={(e) => handleChange(e)}
        className="hidden"

      />
    </>
  )

}
