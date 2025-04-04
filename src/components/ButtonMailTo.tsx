import { Image, Button } from "@mantine/core";
import animations from "../css/animations.module.css";

interface Props {
  radius: string | number;
  size: string;
  iconH: number;
}

export function ButtonMailTo(props: React.PropsWithoutRef<Props>) {
  return (
    <Button
      className={animations.scale}
      radius={props.radius}
      size={props.size}
      rightSection={
        <Image
          src={"/feathericons/arrow-right.svg"}
          h={props.iconH}
          w={"auto"}
          alt=""
        />
      }
      onClick={() => {
        window.open(
          "mailto:taneli.i.nieminen@gmail.com?subject=Contact%20from%20your%20site"
        );
      }}
    >
      GET IN TOUCH
    </Button>
  );
}
