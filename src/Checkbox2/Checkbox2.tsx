import React, { useState, MouseEvent } from 'react';

export interface CheckboxProps {
    values: CheckboxOption[];
    onClick?: (event: MouseEvent) => void;
}

export interface CheckboxOption {
    value: string;
    selected?: boolean;
};


export function Checkbox2({ values, onClick }: CheckboxProps) {

    const [stateValues, setValues] = useState(values);

    function handleSelection(event: MouseEvent, value: CheckboxOption) {

        setValues(stateValues.map(v => {
            if (v.value === value.value) {
                return { ...v, selected: !v.selected };
            }
            return v;
        }));

        if(onClick != undefined){
            onClick(event);
        }

    }

    return (

        <>
            {stateValues.map((value, index) =>
                <>
                    <input type="checkbox" key={index} name={value.value} id={value.value} value={value.value} checked={value.selected} onClick={(e) => handleSelection(e, value)} />
                    {value.value}
                    <br />
                </>)}  
        </>
    )
}