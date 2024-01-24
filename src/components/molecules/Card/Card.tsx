import React, { FC } from "react";
import { Title } from "../../atoms/Title";
import { Paragraph } from "../../atoms/Paragraph";
import { Button } from "../../atoms/Button";
import { Image } from "../../atoms/Image";
import { Container, CardImage, CardInfo } from "./Card.styled";

export interface CardProps {
  title: string;
  description: string;
  image?: {
    alt: string;
    src: string;
    height: number;
    width: number;
  },
  action?: {
    label: string;
    href: string;
    target?: string;
  },
  className?: string;
}

export const Card: FC<CardProps> = ({ className="bq-card", title, description, image, action }) => {
  return (
    <Container className={className}>
      {image && <CardImage className="bq-card-image">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          isSingle
        />
      </CardImage>}
      <CardInfo className="bq-card-info">
        <Title text={title} variant="subtitle" tag="h3" />
        <Paragraph text={description} />
        {action && <Button label={action.label} href={action.href} target={action.target} />}
      </CardInfo>
    </Container>
  )
}