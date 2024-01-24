import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from './Menu';

const meta = {
  title: 'Molecules/Menu',
  component: Menu,
  parameters: {
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    isFixed: false,
    links: [
      {
        label: "Google",
        href: "google.com",
      },
      {
        label: "Yahoo",
        href: "yahoo.com",
      },
      {
        label: "Hotmail",
        href: "hotmail.com",
      }            
    ],
  },
};
