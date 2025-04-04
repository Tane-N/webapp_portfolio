import { Flex, Box } from "@mantine/core";
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
  tagline: "Thanks for checking out my website!",
  heading: "My name is Taneli Nieminen",
  body: "I am a game/frontend developer from Finland. I specialize in programming and software development, but have enough experience in UI/UX design to hold my own. I founded my own company in 2023, and have released multiple games since then, while also getting the opportunity to work with some awesome people. Currently I'm looking for full-time employment in the games industry, or as a frontend developer. Please do not hesitate to contact me for work, networking or advice! Always happy to make new contacts.",
};

const capsuleCards = [
  {
    image: "/images/house_of_mimics_capsule.webp",
    content: "Multiplayer anomaly horror",
    link: "https://store.steampowered.com/app/3450150/House_of_Mimics/",
    color: "orangered",
  },
  {
    image: "/images/camera_tenebris_capsule.webp",
    content: "Horror game about perspectives",
    link: "https://jorava.itch.io/camera-tenebris",
    color: "beige",
  },
  {
    image: "/images/boing_odyssey_capsule.webp",
    content: "Contraption building puzzle game",
    link: "https://store.steampowered.com/app/2587960/Boing_Odyssey/",
    color: "pink",
  },
  {
    image: "/images/project_godspeed_capsule.webp",
    content: "Roguelike run-and-gun platformer",
    link: "https://teamdatavi.itch.io/project-godspeed",
    color: "purple",
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
        h={750}
        w={"100%"}
        slideW={"90%"}
        slideGap={50}
      />
      <Box mb={120} />
      <TextBlockSection
        maw={1000}
        tagline={mainTextBlock.tagline}
        heading={mainTextBlock.heading}
        body={mainTextBlock.body}
      />
      <TextPageHeading w={1200} heading="all releases" mt={120} mb={20} />
      <CardGridCapsule cards={capsuleCards} cardH={300} cardW={535} />
    </Flex>
  );
}
