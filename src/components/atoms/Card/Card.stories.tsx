import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'Example/Card',
  component: Card,
  
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  borderRadius: {
    options: ['0px', '4px', '8px', '16px'],
    control: 'select'
  },
  stroke: {
    options: ['shadow', 'bordered'],
    control: 'select'
  }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

