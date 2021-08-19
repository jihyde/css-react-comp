import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { useForm } from "react-hook-form";

export interface DropdownButtonProperties {
    text: string;
    name: string;
    required: boolean;
    availableOptions: DropdownOptions[];
}

export interface DropdownOptions {
    value: any;
    label: string;
}

export function DropdowButton({ name, required, text, availableOptions }: DropdownButtonProperties) {

    const { register, handleSubmit } = useForm();

    return (
        <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                <i className="fa fa-magic" />{text}
            </Dropdown.Toggle>

            <Dropdown.Menu {...register(name, { required: required })} >
                {
                    availableOptions.map((item, index) => {
                        return (<option value={item.value}>{item.label}</option>);
                    })
                }
            </Dropdown.Menu>
        </Dropdown>
    )




}

export default DropdowButton;