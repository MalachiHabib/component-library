import type { Meta, StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from '../theme/ThemeProvider';
import { Button, ButtonProps } from './Button';
import React from 'react';

export default {
  title: 'elements/Button',
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: 'radio',
        options: [Theme.Light, Theme.Dark],
      },
    },
  },
} as Meta<typeof Button>;

const ButtonTemplate: StoryFn<ButtonProps> = (args) => (
  <ThemeProvider theme={args.theme}>
    <Button {...args}>Button</Button>
  </ThemeProvider>
);

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  variant: 'primary',
  theme: Theme.Light,
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  variant: 'secondary',
  theme: Theme.Light,
};

export const WithCustomStyle = ButtonTemplate.bind({});
WithCustomStyle.args = {
  className: 'bg-red-500 p-8 w-[200px] text-sm rounded-full',
  theme: Theme.Light,
};
