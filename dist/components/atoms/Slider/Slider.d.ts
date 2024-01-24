import { FC } from 'react';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
type SliderProps = {
    children: any;
    options: any;
    length: number;
    hasBullets?: boolean;
    hasArrows?: boolean;
};
export declare const GlideSlider: FC<SliderProps>;
export {};
