import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  {ColourPicker} from'./ColourPicker'

export default {
  title: 'Components/ColourPicker',
  component: ColourPicker
} as ComponentMeta<typeof ColourPicker>;

const Template: ComponentStory<typeof ColourPicker> = (args) => {
  const form = useForm();
  const { register, handleSubmit, formState: { errors, isDirty } } = form;


  return <FormProvider {...form}>
    <form onSubmit={handleSubmit((data) => {
      console.log(`submitting: ${JSON.stringify(data)}`);
    })}>
      <ColourPicker {...args} />
    </form>
    </FormProvider>
};

export const ColourPickerPreview = Template.bind({});
ColourPickerPreview.args = {
};