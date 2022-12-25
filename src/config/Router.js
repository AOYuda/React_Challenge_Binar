import { createBrowserRouter } from "react-router-dom";
import RenderLayout from "./RenderLayout";
import Hero from "../Components/Hero";
import OurService from "../Components/OurService";
import WhyUs from "../Components/WhyUs";
import Testimonial from "../Components/Testimonial";
import CallToAction from "../Components/CallToAction";
import FreqAQ from "../Components/FreqAQ";
import SearchBar from "../Components/SearchBar";
import HeroBlank from "../Components/HeroBlank";
import SearchBarResult from "../Components/SearchBarResult";
import Cardcars from "../Components/Cardcars";

// NOTES: each time you want to add new page, add it here

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RenderLayout children={[<Hero />, <OurService />, <WhyUs />, <Testimonial />, <CallToAction />, <FreqAQ />]} />,
  },
  {
    path: "/carimobil",
    element: <RenderLayout children={[<Hero />, <SearchBar />]} />,
  },
  {
    path: "/hasilpencarian",
    element: <RenderLayout children={[<HeroBlank />, <SearchBarResult />, <Cardcars />]} />,
  },
]);
