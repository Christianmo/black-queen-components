import type { Meta, StoryObj } from '@storybook/react';

import { Title } from './Title';

const meta = {
  title: 'Atom/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Title',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Subtitle',
    variant: 'subtitle',
  },
};
