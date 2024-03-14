import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Showcase } from './Showcase';

export default {
  title: 'Components/Showcase',
  component: Showcase,
} as Meta;

const Template: Story = (args) => <Showcase {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add any default props for the Showcase component if needed
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  // Override the colors using Tailwind classes
  headingColor: 'text-green-600',
  cardBackgroundColor: 'bg-gray-100',
  cardTitleColor: 'text-purple-800',
  cardDescriptionColor: 'text-purple-600',
  cardContentColor: 'text-purple-700',
  buttonBackgroundColor: 'bg-green-500',
  buttonTextColor: 'text-white',
  buttonHoverBackgroundColor: 'bg-green-600',
};
