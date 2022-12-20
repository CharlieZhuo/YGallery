import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LoginForm from "../../components/form/loginForm/LoginForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/LoginForm",
  component: LoginForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LoginForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginForm> = (args) => {
  return <LoginForm {...args} />;
};

export const Submit = Template.bind({});
Submit.args = {
  onSubmit(values, formikHelpers) {
    setTimeout(() => {
      formikHelpers.setSubmitting(false);
      formikHelpers.resetForm();
    }, 5000);
  },
};
