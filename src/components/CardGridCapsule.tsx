import {
  SimpleGrid,
  Box,
  Paper,
  Overlay,
  Flex,
  Text,
  Image,
  Container,
  AspectRatio,
  Center,
} from "@mantine/core";
import animations from "../css/animations.module.css";
import borderanimations from "../css/borderanimations.module.css";
import { useInViewport } from "@mantine/hooks";

interface CardInterface {
  image: string;
  content: string;
  link: string;
  color: string;
}

interface Props {
  cards: CardInterface[];
  cardH: number | string;
  cardW: number | string;
}

export function CardGridCapsule(props: React.PropsWithoutRef<Props>) {
  const viewRef = useInViewport();

  var currentDelay = 0;
  const ANIMATION_DELAY = 0.1;

  function getAnimationDelay(): string {
    currentDelay = currentDelay + ANIMATION_DELAY;
    return currentDelay.toString() + "s";
  }

  const displays = props.cards.map((card) => Card(card, getAnimationDelay()));

  function Card(card: CardInterface, delay: string) {
    const handleClick = () => {
      if (!card.link) return;
      window.open(card.link);
    };

    return (
      <Container
        className={animations.scale}
        style={{
          position: "relative",
          height: "50%",
        }}
      >
        <Box
          key={delay}
          className={
            viewRef.inViewport ? animations.scale_left : animations.hidden
          }
          style={{
            animationDelay: delay,
          }}
        >
          <Paper
            shadow="md"
            radius="lg"
            className={borderanimations.card}
            sx={{
              "&::after,&::Before": {
                backgroundImage: `conic-gradient(from var(--angle), ${card.color}, black, ${card.color}, black, ${card.color})`,
              },
            }}
            onClick={handleClick}
          >
            <AspectRatio ratio={1920 / 1080}>
              <Image src={card.image} radius="lg" alt="Game capsule art." />
              <Overlay
                gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 20%)"
                radius="lg"
                style={{ pointerEvents: "none" }}
                zIndex={2}
              />
              <Center
                style={{
                  position: "absolute",
                  height: "100%",
                  top: "0%",
                  left: 0,
                  zIndex: 2,
                }}
              >
                <Flex
                  justify={"space-between"}
                  align={"flex-end"}
                  w="100%"
                  h="100%"
                  p="sm"
                >
                  <Text
                    size="sm"
                    fs="italic"
                    tt="uppercase"
                    style={{
                      userSelect: "none",
                      textShadow: "0rem 0rem 0.2rem rgba(0, 0, 0, 1)",
                    }}
                  >
                    {card.content}
                  </Text>
                  <Image
                    src="/feathericons/external-link.svg"
                    h="lg"
                    w="auto"
                    alt="External link icon."
                  />
                </Flex>
              </Center>
            </AspectRatio>
          </Paper>
        </Box>
      </Container>
    );
  }

  return (
    <Box p={"xl"} ref={viewRef.ref}>
      <SimpleGrid spacing={40} cols={{ base: 1, sm: 2, lg: 3 }}>
        {displays}
      </SimpleGrid>
    </Box>
  );
}
