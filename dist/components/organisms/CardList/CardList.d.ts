import { FC } from "react";
import { CardProps } from '../../molecules/Card';
interface CarsProps {
    cards: CardProps[];
    className?: string;
}
export declare const CardList: FC<CarsProps>;
export {};
