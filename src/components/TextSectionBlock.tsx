import { Stack, Text } from "@mantine/core";
import animations from "../css/animations.module.css";
import { useInViewport } from "@mantine/hooks";

interface Props {
  maw: number;
  tagline: string;
  heading: string;
  paragraphs: string[];
}

export function TextBlockSection(props: React.PropsWithoutRef<Props>) {
  const { ref, inViewport } = useInViewport();

  let currentDelay = 0.2;
  const ANIMATION_DELAY = 0.1;

  function getAnimationDelay(): string {
    currentDelay = currentDelay + ANIMATION_DELAY;
    return currentDelay.toString() + "s";
  }

  const paragraphs = props.paragraphs.map((text) => Paragraph(text))

  function Paragraph(text: string){
    return (<Text
        c={"gray.1"}
        className={inViewport ? animations.fade_in : animations.hidden}
        style={{
          animationDelay: getAnimationDelay(),
          opacity: 0,
        }}
      >
        {text}
      </Text>)
  }

  return (
    <Stack justify="flex-start" p={"lg"} maw={props.maw} gap={"xs"} ref={ref}>
      <Text
        tt="uppercase"
        size="sm"
        fw={600}
        c={"orange.5"}
        className={inViewport ? animations.fade_in : animations.hidden}
        style={{
          animationDelay: ANIMATION_DELAY.toString() + "s",
          opacity: 0,
        }}
      >
        {props.tagline}
      </Text>
      <Text
        tt="uppercase"
        fw={600}
        size="xl"
        c={"gray.0"}
        className={inViewport ? animations.fade_in : animations.hidden}
        style={{
          animationDelay: (ANIMATION_DELAY * 2).toString() + "s",
          opacity: 0,
        }}
      >
        {props.heading}
      </Text>
      {paragraphs}
    </Stack>
  );
}
