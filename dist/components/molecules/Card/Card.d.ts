import { FC } from "react";
export interface CardProps {
    title: string;
    description: string;
    image?: {
        alt: string;
        src: string;
        height: number;
        width: number;
    };
    action?: {
        label: string;
        href: string;
        target?: string;
    };
    className?: string;
}
export declare const Card: FC<CardProps>;
