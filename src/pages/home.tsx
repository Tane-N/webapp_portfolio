import { Flex } from "@mantine/core";
import { TextPageHeading } from "../components/TextPageHeading";
import { TextBlockSection } from "../components/TextSectionBlock";
import { CardGridCapsule } from "../components/CardGridCapsule";
import { CarouselMainDisplay } from "../components/CarouselMainDisplay";

const carouselCards = [
  {
    image: "/images/house_of_mimics_carousel.webp",
    tagline: "Latest Release",
    header: "House of Mimics Demo",
    description: "Multiplayer Anomaly Horror",
    buttonText: "Play Now",
    buttonLink:
      "https://store.steampowered.com/app/3452950/House_of_Mimics_Demo/",
  },
  {
    image: "/images/together_we_die_carousel.webp",
    tagline: "In Development",
    header: "Together We Die",
    description: "Co-op Shooter",
    buttonText: "",
    buttonLink: "",
  },
  {
    image: "/images/super_portfolio_ball_carousel.webp",
    tagline: "Playable Portfolio",
    header: "Super Portfolio Ball",
    description: "Find All Trophies",
    buttonText: "play now",
    buttonLink: "super_portfolio_ball/index.html",
  },
];

const mainTextBlock = {
  tagline: "Lorem ipsum",
  heading: "Lorem ipsum dolorem",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

const capsuleCards = [
  {
    image: "/images/house_of_mimics_capsule.webp",
    content: "Multiplayer anomaly horror",
    link: "https://store.steampowered.com/app/3450150/House_of_Mimics/",
    color: "pink",
  },
  {
    image: "/images/camera_tenebris_capsule.webp",
    content: "Horror game about perspectives",
    link: "https://jorava.itch.io/camera-tenebris",
    color: "green",
  },
  {
    image: "/images/boing_odyssey_capsule.webp",
    content: "Contraption building puzzle game",
    link: "https://store.steampowered.com/app/2587960/Boing_Odyssey/",
    color: "blue",
  },
  {
    image: "/images/project_godspeed_capsule.webp",
    content: "Roguelike run-and-gun platformer",
    link: "https://teamdatavi.itch.io/project-godspeed",
    color: "white",
  },
];

export default function Home() {
  return (
    <Flex
      h={"100%"}
      w={"100%"}
      direction={"column"}
      align={"center"}
      justify={"flex-start"}
    >
      <CarouselMainDisplay
        cards={carouselCards}
        h={600}
        w={"100%"}
        slideW={"90%"}
        slideGap={50}
      />
      <TextBlockSection
        maw={900}
        tagline={mainTextBlock.tagline}
        heading={mainTextBlock.heading}
        body={mainTextBlock.body}
      />
      <TextPageHeading w={1200} heading="Home" ptb={60} />
      <CardGridCapsule cards={capsuleCards} cardH={300} cardW={535} />
    </Flex>
  );
}
