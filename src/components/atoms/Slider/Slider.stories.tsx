import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { GlideSlider } from './Slider';

const meta = {
  title: 'Atom/Slider',
  component: GlideSlider,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GlideSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

const slideContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const Glide: Story = {
  args: {
    children: [
      <div>{slideContent}</div>,
      <div>{slideContent}</div>,
      <div>{slideContent}</div>,
    ],
    options: {
      type: 'carousel',
      focusAt: 'center',
      perView: 1
    },
    length: 3,
    hasBullets: true,
    hasArrows: true,
  },
};

