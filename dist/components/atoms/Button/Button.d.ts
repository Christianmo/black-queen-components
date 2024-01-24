import { FC } from 'react';
interface ButtonProps {
    label: string;
    color?: string;
    variant?: 'basic' | 'outline' | 'contained';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
    href?: string;
    target?: string;
}
export declare const Button: FC<ButtonProps>;
export {};
