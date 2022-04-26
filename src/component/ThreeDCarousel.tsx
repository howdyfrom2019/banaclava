import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

interface ThreeDType {
  style?: CSSProperties;
  elements: JSX.Element[];
  align?: 'vertical' | 'horizontal';
  width: number;
}

interface CarouselItemProps {
  angleY: number;
  radius: number;
}

const ThreeDCarousel: React.FC<ThreeDType> = ({
  style,
  elements,
  align = 'horizontal',
  width,
}) => {
  const [radius, setRadius] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const [itemCount, setItemCount] = useState<number>(1);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const autoPlay = useRef<boolean>(true);

  const radiusCalculator = (angleNum: number, width: number) => {
    const itemAngle: number = Math.PI / angleNum;
    return Math.round((width / (2 * Math.tan(itemAngle))) * 1.1);
  };

  const sliderController = (right: boolean, counter?: boolean) => {
    if (counter) {
      if (!autoPlay.current) {
        return;
      }
    }
    setCurrentIndex((prev) => (right ? prev + 1 : prev - 1));
  };

  useEffect(() => {
    console.log(width);
    elements.length !== itemCount && setItemCount(elements.length);
    setRadius(radiusCalculator(elements.length, width));
  }, [elements, width]);

  useEffect(() => {
    if (itemCount === 0) return;
    setTimeout(() => {
      sliderController(true, true);
    }, 4000);
  }, [timer]);

  useEffect(() => {
    setTimeout(() => {
      setTimer((prev) => prev + 1);
    }, 4000);
  }, [timer]);

  return (
    <Wrapper style={style}>
      <ThreeDCarouselContainer width={width}>
        {elements.map((element, i) => (
          <CarouselItem
            angleY={((i + currentIndex) * -360) / itemCount}
            radius={radius}
            className={`carousel-item ${
              (i + currentIndex) % itemCount === 0 ? 'center' : 'false'
            }`}
            key={i}
            onMouseEnter={() => {
              autoPlay.current = false;
            }}
            onMouseLeave={() => {
              autoPlay.current = true;
            }}
            onClick={() => {
              if ((i + currentIndex) % itemCount >= 3) {
                sliderController(true);
              } else if ((i + currentIndex) % itemCount > 0) {
                sliderController(false);
              }
            }}
          >
            {element}
          </CarouselItem>
        ))}
      </ThreeDCarouselContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 160px;
  position: relative;
`;

const ThreeDCarouselContainer = styled.div<{ width: number }>`
  display: flex;
  width: 100%;
  transform-style: preserve-3d;
  transform: rotateX(-10deg);

  .carousel-item {
    position: absolute;
    left: 50%;
    top: var(--gap-48);
    filter: opacity(0.7);
    width: ${(props) => `${props.width}px`};
    height: auto;
    transition: all 1s;
    border: 1px solid var(--white);
    //
    //@media screen and (max-width: 768px) {
    //  width: 50%;
    //  height: 50%;
    //}
  }

  .center {
    filter: opacity(1) !important;
  }
`;

const CarouselItem = styled.div<CarouselItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%) rotateY(${(props) => `${props.angleY}deg`})
    translateZ(${(props) => `${props.radius}px`});

  :hover {
    filter: opacity(1);
    transform: scale(1.05) translateX(-50%)
      rotateY(${(props) => `${props.angleY}deg`})
      translateZ(${(props) => `${props.radius}px`});
  }
`;

export default ThreeDCarousel;
