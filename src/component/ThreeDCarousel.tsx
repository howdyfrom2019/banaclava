import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

interface ThreeDType {
  style?: CSSProperties;
  elements: JSX.Element[];
  align?: 'vertical' | 'horizontal';
  itemProps: ItemProps;
}

interface ItemProps {
  width: number;
  height?: number;
  horizontal?: boolean;
}

interface CarouselItemProps {
  angleY: number;
  radius: number;
}

const ThreeDCarousel: React.FC<ThreeDType> = ({
  style,
  elements,
  align = 'horizontal',
  itemProps,
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
    setItemCount(elements.length);
    setRadius(radiusCalculator(elements.length, itemProps.width));
  }, [elements]);

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
      <ThreeDCarouselContainer
        width={itemProps.width}
        height={itemProps.height}
        horizontal={align === 'horizontal'}
      >
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
  position: relative;
`;

const ThreeDCarouselContainer = styled.div<ItemProps>`
  display: flex;
  width: 100%;
  transform-style: preserve-3d;
  transform: ${(props) =>
    props.horizontal ? 'rotateX(-10deg)' : 'rotateZ(90deg)'};

  .carousel-item {
    position: absolute;
    left: 50%;
    top: var(--gap-48);
    filter: opacity(0.7);
    width: ${(props) => `${props.width}px`};
    height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
    transition: all 1s;
    border: 1px solid var(--white);
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
