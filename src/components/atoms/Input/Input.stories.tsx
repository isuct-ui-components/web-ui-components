import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Example/SimpleInput',
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

export const Example = Template.bind({});
Example.args = {
<<<<<<< HEAD
<<<<<<< HEAD
  size: 'large',
  placeholderText: 'text'
};
=======
  placeholderText: '',
=======
  id: '',
  placeholderText: 'text',
  name: 'text',
>>>>>>> 7e3c0c1 (Correct non-working logic of Button, Input and LabelInput)
  disabled: false,
  readOnly: false,
  required: false,
  value: 'text',
  maxLenght: 50
};
>>>>>>> 31ee1c3 (Add LabelInput and Input components)
