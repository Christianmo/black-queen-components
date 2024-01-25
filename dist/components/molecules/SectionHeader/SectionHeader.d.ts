import { FC } from "react";
interface SectionHeaderPros {
    title: string;
    helpText?: string;
    description: string;
    titleTag?: 'h1' | 'h2' | 'h3';
    className?: string;
}
export declare const SectionHeader: FC<SectionHeaderPros>;
export {};
