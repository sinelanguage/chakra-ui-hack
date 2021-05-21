import React, { FC } from 'react'
import { Flex, Box } from "@chakra-ui/react"
import { BellIcon, EditIcon } from '@chakra-ui/icons'

const notificationItem = {
    display: "flex",
    flex: 1,
    flexDir: "column",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    lineHeight: "1rem",
}

const Notifications: FC = ({ children }) => {
    return (
        <Flex
            as="div"
            sx={{
                flex: 2,
                justifyContent: "flex-end",
                px: 4,
                // maxW: "50%",
                borderLeft: "1px solid",
                borderLeftColor: "gray.200"
            }}
        >
            {/* <Flex
                as="li"
                sx={notificationItem}
            >
                <Flex
                    as="p"
                    sx={{
                        fontSize: "xs"
                    }}
                >
                    Your order will be ready in:
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
            </Flex> */}
            <Flex
                as="ul"
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
           {/*  <Flex
                as="li"
                sx={notificationItem}
            >
                <Flex
                    as="p"
                    sx={{
                        fontSize: "xs"
                    }}
                >
                    You might need
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
            </Flex> */}
            </Flex>
        </Flex>
    )
}

export default Notifications
