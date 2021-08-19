import { MouseEvent } from 'react';
export interface CheckboxProps {
    values: CheckboxOption[];
    onClick?: (event: MouseEvent) => void;
}
export interface CheckboxOption {
    value: string;
    selected?: boolean;
}
export declare function Checkbox2({ values, onClick }: CheckboxProps): JSX.Element;
