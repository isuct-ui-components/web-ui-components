import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CheckBox } from './CheckBox';

export default {
  title: 'Example/CheckBox',
  component: CheckBox,

  argTypes: {

  }
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const Example = Template.bind({})
Example.args = {
  name: 'test',
  labelText: 'test',
  isChecked: false,
  formId: 'test',
  isRequired: false,
  isDisabled: false,
  value: 'test'
}

