import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input,

  argTypes: {
    type: {
      options: ['text','tel','password','date','hidden'],
      control: {type: 'select'}
    },
    size: {
      options: ['small','medium','large'],
      control: {type: 'select'}
    },
    borderRadius: {
      options: ['bR-0', 'bR-4', 'bR-99'],
      control: {type: 'select'}
    }
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  size: 'large',
  placeholderText: 'Enter the text...',
  readOnly: false,
  required: false,
  inactive: false,
  name: 'text',
  type: 'text',
  maxLenght: 50
};
