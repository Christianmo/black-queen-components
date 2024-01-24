import React, { FC } from "react";
import { Card } from '../../molecules/Card';
import { CardProps } from '../../molecules/Card';

import { Container } from './CardList.styled';

interface CarsProps {
  cards: CardProps[];
  className?: string;
}

export const CardList: FC<CarsProps> = ({ className='bq-card-list', cards }) => {
  return (
    <Container className={className}>
      {cards.map(
        (card, key) => (
          <Card
            title={card.title}
            description={card.description}
            image={card.image}
            action={card.action}
            key={`bq-card-${key}`}
          />
        )
      )}
    </Container>
  )
}