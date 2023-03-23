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
    }
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Example = Template.bind({});
Example.args = {
  size: 'large',
  placeholderText: 'text'
};