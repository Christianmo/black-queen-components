import React, { useEffect, useRef, FC, Children } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'

import { Container, ArrowButton, Bullets, BulletButton } from './Slider.styled';

type SliderProps = {
  children: any;
  options: any;
  length: number;
  hasBullets?: boolean;
  hasArrows?: boolean;
}

export const GlideSlider: FC<SliderProps> = ({
  children,
  options,
  length,
  hasBullets,
  hasArrows,
}) => {
  const glideRef = useRef<any>(null);

  useEffect(() => {
    const glide:any =  new Glide(glideRef.current, options);
    glide.mount();

    return () => glide.destroy();
  }, []);

  const renderBullet = (_:any, key: number) => (
    <BulletButton className="bq-slider-bullet" data-glide-dir={`=${key}`} key={`bullet_${key}`}></BulletButton>
  )

  return (
    <Container ref={glideRef} className='glide bq-slider'>
      <div data-glide-el="track" className="glide__track">
        <div className="glide__slides">
          {Children.map(children, child =>
            <div className="glide__slide">
              {child}
            </div>
          )}
        </div>
      </div>
      {hasArrows && (
        <div className="glide__arrows" data-glide-el="controls">
          <ArrowButton className="bq-slider-arrow" data-glide-dir="<"><span>‹</span></ArrowButton>
          <ArrowButton className="bq-slider-arrow" data-glide-dir=">"><span>›</span></ArrowButton>
        </div>
      )}
      {hasBullets && (
        <Bullets className="bq-slider-bullets" data-glide-el="controls[nav]">
          {new Array(length).fill('.').map(renderBullet)}
        </Bullets>
      )}
    </Container>
  )
}