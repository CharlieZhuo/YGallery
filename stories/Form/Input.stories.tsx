import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "../../components/form/input/Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => {
  const [Value, setValue] = useState("abcdefg");
  return (
    <Input
      {...args}
      value={Value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export const Email = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Email.args = {
  id: "email",
  name: "Email",
  inputType: "email",
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...Email.args,
  hasError: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Email.args,
  isDisabled: true,
};
// PasswordInput.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);

//   // 👇 Simulate interactions with the component
//   await userEvent.type(canvas.getByTestId("email"), "email@provider.com");

//   await userEvent.type(canvas.getByTestId("password"), "a-random-password");

//   // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
//   await userEvent.click(canvas.getByRole("button"));
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
