import { Stack, Title, Text } from "@mantine/core";
import animations from "../css/animations.module.css";
import { useInViewport } from "@mantine/hooks";

interface Props {
  maw: number;
  tagline: string;
  heading: string;
  body: string;
}

export function TextBlockSection(props: React.PropsWithoutRef<Props>) {
  const { ref, inViewport } = useInViewport();

  return (
    <Stack justify="flex-start" p={"lg"} maw={props.maw} gap={"xs"} ref={ref}>
      <Title
        tt="uppercase"
        order={6}
        c={"orange.5"}
        className={inViewport ? animations.fade_in : animations.hidden}
        style={{
          animationDelay: "0s",
        }}
      >
        {props.tagline}
      </Title>
      <Title
        tt="uppercase"
        order={2}
        c={"gray.0"}
        className={inViewport ? animations.fade_in : animations.hidden}
        style={{
          animationDelay: "0.1s",
        }}
      >
        {props.heading}
      </Title>
      <Text
        c={"gray.1"}
        className={inViewport ? animations.fade_in : animations.hidden}
        style={{
          animationDelay: "0.2s",
        }}
      >
        {props.body}
      </Text>
    </Stack>
  );
}
