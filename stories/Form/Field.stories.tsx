import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Field from "../../components/form/field/Field";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/Field",
  component: Field,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Field>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Field> = (args) => {
  const [Value, setValue] = useState("abcdefg");
  return (
    <Field
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
  labelText: "Email",
  inputType: "email",
};
export const withError = Template.bind({});
withError.args = {
  ...Email.args,
  hasError: true,
  errorMessage: "输入的不是有效的邮箱地址",
};
