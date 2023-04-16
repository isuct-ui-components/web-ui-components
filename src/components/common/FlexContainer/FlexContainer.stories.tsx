import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FlexContainer, FlexConatinerType } from './FlexContainer';

export default {
  title: 'Common/FlexContainer',
  component: FlexContainer,
} as ComponentMeta<React.ComponentType<FlexConatinerType>>;

const Template: ComponentStory<React.ComponentType<FlexConatinerType>> = (args) => <FlexContainer {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: [<div>dawdawda</div>, <div>1452141</div>, <div>14124dawdawd</div>],
  maxWidth: 200,
  flexDirection: 'column',
  gap: 40,
  alignItems: 'center',
};
