/// <reference types="react" />
import './NumericInput.css';
interface NumericInputProps {
    label: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (newvalue: string, name: string) => void;
}
declare const NumericInput: ({ label, name, value, placeholder, onChange }: NumericInputProps) => JSX.Element;
export default NumericInput;
