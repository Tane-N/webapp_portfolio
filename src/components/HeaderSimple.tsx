import { Group, Image, Divider, Box, Paper } from "@mantine/core";
import { ButtonMailTo } from "./ButtonMailTo";

interface Props {
  h: number;
  logo: string;
  logoH: string | number;
}

export function HeaderSimple(props: React.PropsWithoutRef<Props>) {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        height: props.h,
        width: "100%",
        zIndex: 100,
      }}
    >
      <Paper
        radius={"md"}
        style={{
          position: "absolute",
          overflow: "hidden",
          zIndex: -1,
          height: props.h,
          width: "100%",
          backgroundColor: "#000",
        }}
      />

      <Group justify="space-between" h={props.h} pl={20} pr={20}>
        <Group justify="flex-start" gap={"xl"} h={"100%"}>
          <Image
            h={props.logoH}
            w="auto"
            fit="contain"
            src={props.logo}
            p={"sm"}
            alt="Company logo"
          />

          <Box h={"50%"}>
            <Divider orientation="vertical" h={"100%"} />
          </Box>
        </Group>

        <ButtonMailTo radius={"lg"} size="sm" iconH={15} />
      </Group>
    </header>
  );
}
