import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';

const meta = {
  title: 'Organisms/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    logo: {
      src: '/static/google-logo.svg',
      alt: '',
      width: 148,
      height: 50
    },
    isotype: {
      src: '',
      alt: '',
      width: 50,
      height: 50
    },    
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
