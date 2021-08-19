/// <reference types="react" />
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
export declare function DropdowButton({ name, required, text, availableOptions }: DropdownButtonProperties): JSX.Element;
export default DropdowButton;
