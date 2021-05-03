import React, { Fragment, FC } from 'react'
import { Link, Flex } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'

const navListItem = {
    display: "flex",
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    "&.first-child": {
        borderLeft: "1px solid",
        borderLeftColor: "gray.200",
    }
}

const navListItemLink = {
    fontWeight: "semibold",
    fontSize: "sm",
    textTransform: "uppercase",
    textAlign: "center"
}

const NavLinks: FC = () => {
    return (
        <>
            <Flex
                as="li"
                sx={navListItem}
                className='first-child'
            >
                <Link sx={navListItemLink} key="a" href="#">Departments</Link><ChevronDownIcon />
            </Flex>
            <Flex as="li" sx={navListItem}>
                <Link sx={navListItemLink} key="b" href="#">Featured</Link><ChevronDownIcon />
            </Flex>
            <Flex as="li" sx={navListItem}>
                <Link sx={navListItemLink} key="c" href="#">My Shop</Link><ChevronDownIcon />
            </Flex>
            <Flex as="li" sx={navListItem}>
                <Link sx={navListItemLink} key="d" href="#">Flyers & Deals</Link><ChevronDownIcon />
            </Flex>
            <Flex as="li" sx={navListItem}>
                <Link sx={navListItemLink} key="e" href="#">Services</Link><ChevronDownIcon />
            </Flex>
        </>
    )
}

export default NavLinks
