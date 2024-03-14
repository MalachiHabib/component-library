import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'components/theme/ThemeProvider';

import { Badge, BadgeProps } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'warning', 'error'],
      },
    },
  },
} as Meta<typeof Badge>;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Badge',
};

export const WithThemeProviderTheme: StoryFn<BadgeProps> = (args) => (
  <ThemeProvider theme={args.theme}>
    <Badge {...args}></Badge>
  </ThemeProvider>
);
WithThemeProviderTheme.args = {
  children: 'Themed Badge from ThemeProvider',
};

export const CustomTheme = Template.bind({});
CustomTheme.args = {
  children: 'Custom Theme',
  theme: {
    colors: {
      primary: 'bg-indigo-600 text-white',
      secondary: 'bg-pink-600 text-white',
      success: 'bg-teal-600 text-white',
      warning: 'bg-orange-600 text-white',
      error: 'bg-red-600 text-white',
    },
  },
};
