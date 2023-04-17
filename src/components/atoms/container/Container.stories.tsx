import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Container } from './Container';

export default {
  title: 'Example/Container',
  component: Container,
  
  argTypes: {
    backgroundColor: { control: 'color' },
    sizeContainer: {
      options: ['1024px', '1100px', '1200px', '1440px'],
      control: 'select'
    }
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

