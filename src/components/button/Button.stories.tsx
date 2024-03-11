import type { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import React from 'react';
import { ThemeProvider } from '../theme/ThemeProvider';

export default {
  title: 'elements/Button',
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: 'radio',
        options: ['light', 'dark'],
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
  theme: 'light',
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  variant: 'secondary',
  theme: 'light',
};

export const WithCustomStyle = ButtonTemplate.bind({});
WithCustomStyle.args = {
  className: 'bg-red-500 text-sm rounded-full hover:bg-red-700',
  theme: 'light',
};

export const Disabled = ButtonTemplate.bind({});
Disabled.args = {
  disabled: true,
};

export const Sizes: StoryFn<ButtonProps> = (args) => (
  <ThemeProvider theme={args.theme}>
    <div>
      <Button {...args} size="sm">
        Small Button
      </Button>
      <br />
      <br />
      <Button {...args} size="md">
        Medium Button
      </Button>
      <br />
      <br />
      <Button {...args} size="lg">
        Large Button
      </Button>
    </div>
  </ThemeProvider>
);
Sizes.args = {
  variant: 'primary',
  theme: 'light',
};

export const Loading: StoryFn<ButtonProps> = (args) => (
  <ThemeProvider theme={args.theme}>
    <Button {...args} loading>
      Loading Button
    </Button>
  </ThemeProvider>
);
Loading.args = {
  variant: 'primary',
  theme: 'light',
};

export const OverrideThemeProvider: StoryFn<ButtonProps> = (args) => (
  <ThemeProvider theme="dark">
    <div>
      <p>ThemeProvider theme: dark</p>
      <Button {...args}>Button with ThemeProvider theme</Button>
      <br />
      <br />
      <p>prop theme: light within the provider</p>
      <Button {...args} theme="light">
        Button with overridden theme
      </Button>
    </div>
  </ThemeProvider>
);
OverrideThemeProvider.args = {
  variant: 'primary',
};
