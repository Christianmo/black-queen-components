import { FC } from 'react';
interface HamburgerProps {
    isOpen?: boolean;
    onClick: () => void;
    className?: string;
}
export declare const Hamburger: FC<HamburgerProps>;
export {};
