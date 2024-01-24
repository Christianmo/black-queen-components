import React from 'react';
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: React.FC<{
        children: any;
        options: any;
        length: number;
        hasBullets?: boolean | undefined;
        hasArrows?: boolean | undefined;
    }>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Glide: Story;
