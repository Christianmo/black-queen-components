import { FC } from 'react';
interface ImageProps {
    src: string;
    width: number;
    height: number;
    alt: string;
    isSingle?: boolean;
    className?: string;
}
export declare const Image: FC<ImageProps>;
export {};
