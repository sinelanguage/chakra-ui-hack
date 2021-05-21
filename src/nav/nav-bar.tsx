import React, { FC } from 'react'
import { Flex } from "@chakra-ui/react"

const NavBar: FC = ({ children }) => {
    return (
        <Flex
            as="nav"
            sx={{
                height: "60px",
                borderTop: "5px solid",
                borderTopColor: "#f78e1c",
                justifyContent: "space-between"
            }}
        >
            {children}
        </Flex>
    )
}

export default NavBar
