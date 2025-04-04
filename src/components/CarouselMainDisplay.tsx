import {
  Carousel,
  CarouselSlide,
  Embla,
  useAnimationOffsetEffect,
} from "@mantine/carousel";
import { Title, Stack, BackgroundImage, Button } from "@mantine/core";
import React, { useRef } from "react";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import animations from "../css/animations.module.css";

interface CardInterface {
  image: string;
  tagline: string;
  header: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface Props {
  cards: CardInterface[];
  h: number | string;
  w: number | string;
  slideW: number | string;
  slideGap: number;
}

export function CarouselMainDisplay(props: React.PropsWithoutRef<Props>) {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const DEAD_ZONE_PERCENTAGE = 0.1;

  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnMouseEnter: false, stopOnInteraction: true })
  );

  useAnimationOffsetEffect(embla, 0);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!embla) return;

    const width = window.innerWidth;
    const clickX = event.clientX;

    if (clickX > width / 2 + width * DEAD_ZONE_PERCENTAGE) {
      embla.scrollNext();
    } else if (clickX < width / 2 - width * DEAD_ZONE_PERCENTAGE) {
      embla.scrollPrev();
    }
  };

  const displays = props.cards.map((card) => Card(card));

  function Card(card: CardInterface) {
    const handleClick = () => {
      if (!card.buttonLink) return;
      window.open(card.buttonLink);
    };

    return (
      <CarouselSlide h={"100%"} w={"100%"}>
        <BackgroundImage
          h={"100%"}
          w={"100%"}
          p={"xl"}
          src={card.image}
          radius={"md"}
        >
          <Stack align="center" justify="center" h={"100%"}>
            <Title
              size={25}
              ta="center"
              tt="capitalize"
              style={{
                userSelect: "none",
                textShadow: "0rem 0rem 0.3rem rgba(0, 0, 0, 1)",
              }}
            >
              {card.tagline}
            </Title>
            <Title
              size={50}
              ta="center"
              tt="uppercase"
              style={{
                userSelect: "none",
                textShadow: "0rem 0rem 0.4rem rgba(0, 0, 0, 1)",
              }}
            >
              {card.header}
            </Title>
            <Title
              size={15}
              ta="center"
              tt="capitalize"
              style={{
                userSelect: "none",
                textShadow: "0rem 0rem 0.2rem rgba(0, 0, 0, 1)",
              }}
            >
              {card.description}
            </Title>
            {card.buttonLink && (
              <Button
                variant="gradient"
                w={120}
                className={animations.scale}
                onClick={handleClick}
              >
                {card.buttonText}
              </Button>
            )}
          </Stack>
        </BackgroundImage>
      </CarouselSlide>
    );
  }

  return (
    <Carousel
      withIndicators
      height={props.h}
      maw="100%"
      w={props.w}
      slideSize={props.slideW}
      slideGap={props.slideGap}
      loop
      align="center"
      withControls={false}
      getEmblaApi={setEmbla}
      plugins={[autoplay.current]}
      onClick={(event) => {
        handleClick(event);
      }}
    >
      {displays}
    </Carousel>
  );
}
