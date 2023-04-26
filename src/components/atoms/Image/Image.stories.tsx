import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Image, ImageProps } from './Image';

export default {
  title: 'Atoms/Image',
  component: Image,
} as ComponentMeta<React.ComponentType<ImageProps>>;

const Template: ComponentStory<React.ComponentType<ImageProps>> = (args) => <Image {...args} />;

export const Example = Template.bind({});
Example.args = {
  width: 200,
  height: 200,
};
