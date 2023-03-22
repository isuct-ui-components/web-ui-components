import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LabelInput } from './Input';

export default {
  title: 'Example/LabelInput',
  component: LabelInput,

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
    },
    labelDirection: {
      options: ['row', 'column'],
      control: {type: 'select'}
    }
  },
} as ComponentMeta<typeof LabelInput>;

const Template: ComponentStory<typeof LabelInput> = (args) => <LabelInput {...args} />;

export const Example = Template.bind({});
Example.args = {
  placeholderText: '',
  disabled: false,
  required: false,
  readOnly: false,
  name: '',
  value: '',
  type: 'text',
  size: 'large',
  borderRadius: '',
  maxLenght: 50,
  labelFor: '',
  labelText: '',
  labelDirection: '',
};
