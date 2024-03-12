import type { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from 'components/button/Button';
import React from 'react';
import { ThemeProvider } from 'components/theme/ThemeProvider';
import { defaultTheme } from 'utils/predefinedThemes';

export default {
  title: 'elements/Button',
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: 'object',
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
  theme: defaultTheme,
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  variant: 'secondary',
  theme: defaultTheme,
};

export const WithCustomStyle = ButtonTemplate.bind({});
WithCustomStyle.args = {
  className: 'bg-red-500 text-sm rounded-full hover:bg-red-700',
  theme: defaultTheme,
};

export const Disabled = ButtonTemplate.bind({});
Disabled.args = {
  disabled: true,
  theme: defaultTheme,
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
  theme: defaultTheme,
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
  theme: defaultTheme,
};

export const OverrideThemeProvider: StoryFn<ButtonProps> = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <div>
      <p>ThemeProvider theme: default</p>
      <Button {...args}>Button with ThemeProvider theme</Button>
      <br />
      <br />
      <p>prop theme: custom within the provider</p>
      <Button
        {...args}
        theme={{
          colors: {
            primary: 'bg-blue-500 text-white',
            secondary: 'bg-gray-500 text-white',
            success: 'bg-green-500 text-white',
            warning: 'bg-yellow-500 text-black',
            error: 'bg-red-500 text-white',
          },
        }}
      >
        Button with overridden theme
      </Button>
    </div>
  </ThemeProvider>
);
OverrideThemeProvider.args = {
  variant: 'primary',
};
