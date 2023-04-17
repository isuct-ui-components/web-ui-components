import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ImageContainer, ImageProps } from './ImageContainer';

export default {
  title: 'Common/ImageContainer',
  component: ImageContainer,
} as ComponentMeta<React.ComponentType<ImageProps>>;

const Template: ComponentStory<React.ComponentType<ImageProps>> = (args) => <ImageContainer {...args} />;

export const Example = Template.bind({});
Example.args = {
  width: 200,
  height: 200,
};
