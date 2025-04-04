import { Box } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import BackgroundGradient from "./components/BackgroundGradient";
import BackgroundEmberAnimation from "./components/BackgroundEmberAnimation";
import { HeaderSimple } from "./components/HeaderSimple";
import { FooterSimple } from "./components/FooterSimple";

const linkIcons = [
  {
    image: "/feathericons/mail.svg",
    link: "mailto:taneli.i.nieminen@gmail.com?subject=Contact%20from%20your%20site",
  },
  {
    image: "/feathericons/github.svg",
    link: "https://github.com/Tane-N",
  },
  {
    image: "/feathericons/linkedin.svg",
    link: "https://www.linkedin.com/in/taneli-nieminen-73a3092b9/",
  },
];

export default function App() {
  return (
    <BrowserRouter>
      <BackgroundGradient />
      <BackgroundEmberAnimation />
      <HeaderSimple h={70} logo="/images/logo_with_text.webp" logoH={"90%"} />
      <Box mb={120} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Box mb={70} />
      <FooterSimple
        buttons={linkIcons}
        companyLogo="/images/logo_no_text.webp"
        companyNameLogo="/images/logo_text_only.webp"
      />
    </BrowserRouter>
  );
}
