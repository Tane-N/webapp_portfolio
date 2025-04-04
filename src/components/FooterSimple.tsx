import { Text, Group, Image, Flex, Paper } from "@mantine/core";
import { ButtonMailTo } from "./ButtonMailTo";
import animations from "../css/animations.module.css";

interface LinkIconInterface {
  image: string;
  link: string;
}

interface Props {
  buttons: LinkIconInterface[];
  companyLogo: string;
  companyNameLogo: string;
}

export function FooterSimple(props: React.PropsWithoutRef<Props>) {
  const buttons = props.buttons.map((button) => (
    <Image
      key={button.link}
      src={button.image}
      alt=""
      h={30}
      w="auto"
      onClick={() => {
        window.open(button.link);
      }}
      className={animations.scale}
    />
  ));

  return (
    <Paper
      p={"xl"}
      radius={"md"}
      style={{
        overflow: "hidden",
        zIndex: -1,
        width: "100%",
        backgroundColor: "#000",
      }}
    >
      <Flex
        direction="column"
        align="flex-start"
        w="100%"
        p="xl"
        gap="xs"
        style={{ borderBottom: "solid rgb(30, 30, 30)" }}
      >
        <Group w={"100%"} justify="space-between" pt={70} pb="xs">
          <Group>
            <Image
              src={props.companyLogo}
              h={40}
              w="auto"
              alt="Company logo."
            />
            <Image
              src={props.companyNameLogo}
              h={40}
              w="auto"
              alt="Company name."
            />
          </Group>
          <ButtonMailTo radius={"lg"} size="sm" iconH={15} />
        </Group>
      </Flex>
      <Group justify="space-between" p="xl" w="100%" gap="xl">
        <Text size="sm" c="rgb(150, 150, 150)">
          © 2025 Tuonele. All rights reserved.
        </Text>
        <Group justify="flex-end" gap="xl">
          {buttons}
        </Group>
      </Group>
    </Paper>
  );
}
