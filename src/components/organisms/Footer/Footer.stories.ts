import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

const meta = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

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
    menus: [
      {
        title: "About",
        links: [
          {
            text: "Google",
            href: "google.com",
          },
          {
            text: "Yahoo",
            href: "yahoo.com",
          },
          {
            text: "Hotmail",
            href: "hotmail.com",
          }            
        ],
      },
      {
        title: "Social",
        links: [
          {
            text: "Google",
            href: "google.com",
          },
          {
            text: "Yahoo",
            href: "yahoo.com",
          },
          {
            text: "Hotmail",
            href: "hotmail.com",
          }            
        ],
      }      
    ]
  },
};
