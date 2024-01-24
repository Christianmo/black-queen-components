import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Atom/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    onClick: () => console.log('click'),
  },
};

export const Outline: Story = {
  args: {
    label: 'Button',
    variant: 'outline',
    onClick: () => console.log('click'),
  },
};

export const Link: Story = {
  args: {
    label: 'Link',
    variant: 'contained',
    href: '#click'
  },
};
