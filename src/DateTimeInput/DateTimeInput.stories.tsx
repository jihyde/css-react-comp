import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DateTimeInput } from './DateTimeInput';

export default {
  title: 'Components/DateTimeInput',
  component: DateTimeInput
} as ComponentMeta<typeof DateTimeInput>;

//const Template: ComponentStory<typeof DateTimeInput> = (args) => <DateTimeInput {...args} />;

const Template: ComponentStory<typeof DateTimeInput> = (args) => {
  const form = useForm();
  const { register, handleSubmit, formState: { errors, isDirty } } = form;


  return <FormProvider {...form}>
    <form onSubmit={handleSubmit((data) => {
      console.log(`submitting: ${JSON.stringify(data)}`);
    })}>
      <DateTimeInput {...args} />
      <input type="submit" />
    </form>
  </FormProvider>;
};

export const SimpleDateRequired = Template.bind({});
SimpleDateRequired.args = {
  name: "requiredDate",
  label: "Example Required Date",
  required: true
};

export const SimpleDateNotRequired = Template.bind({});
SimpleDateNotRequired.args = {
  name: "date",
  label: "Example Date",
  required: false
};

export const DatePlusTime = Template.bind({});
DatePlusTime.args = {
  name: "datetime",
  label: 'Example Date Time',
  timeEnabled: true
};

export const TimeOnly = Template.bind({});
TimeOnly.args = {
  name: "timeonly",
  label: 'Example Time',
  timeOnly: true
};

export const TooFarInTheFutureDate = Template.bind({});
TooFarInTheFutureDate.args = {
  name: "date",
  label: "Example Date",
  maxDate: new Date(2025, 1, 1),
  //selectedDate: new Date(2050, 1, 1)
};

export const TooFarInThePastDate = Template.bind({});
TooFarInThePastDate.args = {
  name: "date",
  label: "Example Date",
  minDate: new Date(2050, 1, 1),
  //selectedDate: new Date(2025, 1, 1)
};