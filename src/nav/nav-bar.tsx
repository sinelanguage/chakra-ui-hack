import React from 'react'
import { Flex } from "@chakra-ui/react"

const NavBar: React.FC = ({ children }) => {
    return (
        <Flex
            as="nav"
            sx={{
                height: "60px",
                borderBottom: "1px solid",
                borderBottomColor: "gray.200",
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
