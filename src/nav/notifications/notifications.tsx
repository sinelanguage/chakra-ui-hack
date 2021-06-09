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
            }}
        >
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
            </Flex>
        </Flex>
    )
}

export default Notifications
