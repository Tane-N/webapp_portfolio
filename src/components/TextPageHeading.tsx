import { Stack, Title, Divider } from "@mantine/core";
import animations from "../css/animations.module.css";
import { useInViewport } from "@mantine/hooks";

interface Props {
  w: number;
  heading: string;
  mt: number;
  mb: number;
}

export function TextPageHeading(props: React.PropsWithoutRef<Props>) {
  const { ref, inViewport } = useInViewport();

  return (
    <Stack
      justify="center"
      p={"lg"}
      w={props.w}
      maw={"100%"}
      gap={"lg"}
      mt={props.mt}
      mb={props.mb}
    >
      <Divider />
      <Title
        tt="uppercase"
        ta={"center"}
        order={1}
        c={"gray.0"}
        ref={ref}
        className={inViewport ? animations.fade_in : animations.hidden}
      >
        {props.heading}
      </Title>
      <Divider />
    </Stack>
  );
}
