import { FC } from 'react';
interface TitleProps {
    text: string;
    variant?: 'title' | 'subtitle';
    tag?: 'h1' | 'h2' | 'h3' | 'h4';
    className?: string;
}
export declare const Title: FC<TitleProps>;
export {};
