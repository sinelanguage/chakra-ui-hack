import * as React from "react"
import {
  ChakraProvider,
  Flex,
  Image,
  theme,
} from "@chakra-ui/react";
import { BellIcon, EditIcon } from '@chakra-ui/icons'
import { NavBar, NavLinks } from './nav';
// import { ColorModeSwitcher } from "./ColorModeSwitcher"

// <ColorModeSwitcher justifySelf="flex-end" />

const notificationItem = {
  display: "flex",
  flex: 1,
  flexDir: "column",
  height: "100%",
  justifyContent: "center",
  alignItems: "flex-start",
  lineHeight: "1rem",
}

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar>
      <Flex
        as="ul"
        sx={{
          alignItems: "center",
          flex: 2,
          // maxW: "40%",
          // pt: "8px"
        }}
      >
        <Image
          src="https://d3rzy2hoo29vi.cloudfront.net/assets/img/logos/loblaw_v2.svg"
          alt="Loblaws logo"
          sx={{
            px: 4,
          }}
        />
        <NavLinks />
      </Flex>
      <Flex
        as="div"
        sx={{
          flex: 1,
          justifyContent: "flex-end",
          px: 4,
          // maxW: "50%",
          borderLeft: "1px solid",
          borderLeftColor: "gray.200",
          // backgroundColor: "#f7f7f7"
          // pt: "8px"
        }}
      ></Flex>
      <Flex
        as="div"
        sx={{
          flex: 3,
          justifyContent: "flex-end",
          px: 4,
          // maxW: "50%",
          borderLeft: "1px solid",
          borderLeftColor: "gray.200",
          // backgroundColor: "#f7f7f7"
          // pt: "8px"
        }}
      >
        <Flex
          as="li"
          sx={notificationItem}
        >
          <Flex
            as="p"
            sx={{
              fontSize: "xs"
            }}
          >
            Your order will be ready for pickup in:
          </Flex>
          <Flex
            as="p"
            sx={{
              fontSize: "sm",
              fontWeight: "bold"
            }}
          >
            <BellIcon
              w={4}
              h={4}
              sx={{
                mr: 1,
              }}
            />
            3 days / 5 hours
          </Flex>
        </Flex>
        <Flex
          as="li"
          sx={notificationItem}
        >
          <Flex
            as="p"
            sx={{
              fontSize: "xs"
            }}
          >
            You have items in your cart
            </Flex>
          <Flex
            as="p"
            sx={{
              fontSize: "sm",
              fontWeight: "bold"
            }}
          >
            <BellIcon
              w={4}
              h={4}
              sx={{
                mr: 1,
              }}
            />
              5 items / Total: $75.87
            </Flex>
        </Flex>
        <Flex
          as="li"
          sx={notificationItem}
        >
          <Flex
            as="p"
            sx={{
              fontSize: "xs"
            }}
          >
            Frequently purchased items you might need
          </Flex>
          <Flex
            as="p"
            sx={{
              fontSize: "sm",
              fontWeight: "bold"
            }}
          >
            <EditIcon
              w={3}
              h={3}
              sx={{
                mr: 1,
              }}
            />
              Milk, Eggs, Strawberries
          </Flex>
        </Flex>
      </Flex>
    </NavBar>
  </ChakraProvider >
)
