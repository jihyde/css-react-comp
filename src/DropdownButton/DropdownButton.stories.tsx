import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { nameof } from 'ts-simple-nameof';
import { DropdowButton } from './DropdownButton'


export default {
    title: 'Components/DropdowButton',
    component: DropdowButton
} as ComponentMeta<typeof DropdowButton>;

const Template: ComponentStory<typeof DropdowButton> = (args) => {
    const form = useForm();
    const { register, handleSubmit, control, formState: { errors, isDirty } } = form;

    return <FormProvider {...form}>
        <form onSubmit={handleSubmit((data) => {
            console.log(`Submitting: ${JSON.stringify(data)}`);
        }, (errors) => {
            console.log(`Oh that's so invalid.`);
        })}>
            <DropdowButton {...args}></DropdowButton>
            <input type="submit" />
        </form>
    </FormProvider>;

};

export const EmptyForm = Template.bind({});
EmptyForm.args = {
    //value: 'button',
    availableOptions: [
        { value: 1, label: 'Option One' },
        { value: 2, label: 'Option Two' },
        { value: 4, label: 'Option Three' },
        { value: 8, label: 'Option Four' },
    ]


};
