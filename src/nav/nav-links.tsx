import React, { Fragment } from 'react'
import { Link, Flex } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'

const navListItem = {
    display: "flex",
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
}

const navListItemLink = {
    fontWeight: "semibold",
    fontSize: "md",
    // textTransform: "uppercase",
}

const NavLinks: React.FC = () => {
    return (
        <>
            <Flex
                as="li"
                sx={{
                    ...navListItem,
                    borderLeft: "1px solid",
                    borderLeftColor: "gray.100",
                }}
            >
                <Link sx={navListItemLink} key="a" href="#">Food</Link><ChevronDownIcon />
            </Flex>
            <Flex as="li" sx={navListItem}>
                <Link sx={navListItemLink} key="b" href="#">Apparell</Link><ChevronDownIcon />
            </Flex>
            <Flex as="li" sx={navListItem}>
                <Link sx={navListItemLink} key="c" href="#">Home</Link><ChevronDownIcon />
            </Flex>
            <Flex as="li" sx={navListItem}>
                <Link sx={navListItemLink} key="d" href="#">Services</Link><ChevronDownIcon />
            </Flex>
        </>
    )
}

export default NavLinks
