import { FC } from 'react';
interface ItemValues {
    text: string;
    href?: string;
    target?: string;
    icon?: any;
}
interface ListProps {
    items: ItemValues[];
    icon?: any;
}
export declare const List: FC<ListProps>;
export {};
