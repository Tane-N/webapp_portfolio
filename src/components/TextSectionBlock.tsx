import { Stack, Text } from "@mantine/core";
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
      <Text
        tt="uppercase"
        fw={600}
        c={"orange.5"}
        className={inViewport ? animations.fade_in : animations.hidden}
        style={{
          animationDelay: "0s",
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
          animationDelay: "0.1s",
        }}
      >
        {props.heading}
      </Text>
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
