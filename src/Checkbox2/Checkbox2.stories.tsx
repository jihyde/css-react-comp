import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox2, CheckboxOption } from './Checkbox2';


export default {
  title: 'Components/Checkbox2',
  component: Checkbox2
} as ComponentMeta<typeof Checkbox2>;

const Template: ComponentStory<typeof Checkbox2> = (args) => {
  const form = useForm();
  const { register, handleSubmit, formState: { errors, isDirty } } = form;


  return <FormProvider {...form}>
    <form onSubmit={handleSubmit((data) => {
      console.log(`submitting: ${JSON.stringify(data)}`);
    })}>
      <Checkbox2 {...args} />
    </form>
  </FormProvider>
};

const propertyTypes: CheckboxOption[] = [
  { value: "Hotel", selected: false },
  { value: "House", selected: false },
  { value: 'Flat', selected: true },
  { value: 'Residential', selected: false },
  { value: 'Commercial', selected: false },
  { value: 'Industrial', selected: false }
];

const numbers: CheckboxOption[] = [
  { value: "One", selected: false },
  { value: "Two", selected: false },
  { value: 'Three', selected: false }
];


export const CheckboxPreview = Template.bind({});
CheckboxPreview.args = {
  values: numbers,
  onClick: (event) => { console.log("Clicked on " + (event.target as HTMLTextAreaElement).value) }
};


export const CheckboxProperties = Template.bind({});
CheckboxProperties.args = {
  values: propertyTypes,
  onClick: (event) => { console.log("Clicked on " + (event.target as HTMLTextAreaElement).value) }
};