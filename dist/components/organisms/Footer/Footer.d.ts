import { FC } from "react";
interface LinkValues {
    text: string;
    href: string;
    target?: string;
}
type MenuValues = {
    title: string;
    links: LinkValues[];
};
interface FooterProps {
    logo: {
        src: string;
        alt: string;
        height: number;
        width: number;
    };
    isotype?: {
        src: string;
        alt: string;
        height: number;
        width: number;
    };
    menus: MenuValues[];
    className?: string;
}
export declare const Footer: FC<FooterProps>;
export {};
