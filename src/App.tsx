import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import { NavBar, Notifications, Menu } from './nav';
import { HeroBannerContainer, HeroSection } from "./hero-banner";
import { CouponSection } from "./hero-banner/coupon-section/coupon-section";
// import { ColorModeSwitcher } from "./ColorModeSwitcher"

// <ColorModeSwitcher justifySelf="flex-end" />

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar>
      <Menu />
      <Notifications />
    </NavBar>
    <HeroBannerContainer>
      <HeroSection backgroundColor="#ffe9e9">
        <CouponSection />
      </HeroSection>
      <HeroSection backgroundColor="#e9efff" />
      <HeroSection backgroundColor="#fff7e9" />
    </HeroBannerContainer>
  </ChakraProvider >
)
