import { FC } from "react";
interface LinkProps {
    label: string;
    href: string;
    target?: string;
}
interface HeaderProps {
    logo: {
        src: string;
        alt: string;
        height: number;
        width: number;
    };
    isotype: {
        src: string;
        alt: string;
        height: number;
        width: number;
    };
    links: LinkProps[];
    className?: string;
}
export declare const Navbar: FC<HeaderProps>;
export {};
