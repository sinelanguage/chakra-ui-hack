import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import { NavBar, Notifications, Menu } from './nav';
import HeroBannerContainer from "./hero-banner/hero-banner-container";
// import { ColorModeSwitcher } from "./ColorModeSwitcher"

// <ColorModeSwitcher justifySelf="flex-end" />

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar>
      <Menu />
      <Notifications />
    </NavBar>
    <HeroBannerContainer />
  </ChakraProvider >
)
