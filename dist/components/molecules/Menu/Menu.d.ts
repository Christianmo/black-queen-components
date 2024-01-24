import { FC } from "react";
interface LinkProps {
    label: string;
    href: string;
    target?: string;
}
interface MenuProps {
    links: LinkProps[];
    isOpen: boolean;
    isFixed: boolean;
    className?: string;
}
export declare const Menu: FC<MenuProps>;
export {};
