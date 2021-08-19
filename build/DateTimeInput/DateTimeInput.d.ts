/// <reference types="react" />
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
}
export declare const DateTimeInput: ({ name, label, required, disabled, readonly, timeEnabled, timeOnly, minDate, maxDate }: DateTimeInputProps) => JSX.Element;
export default DateTimeInput;
