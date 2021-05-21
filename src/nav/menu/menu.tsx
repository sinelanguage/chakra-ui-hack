import React, { FC } from 'react'
import { Flex, Image } from "@chakra-ui/react"
import { NavLinks } from '..';

interface Props {

}

const Menu: FC = (props: Props) => {
    return (
        <Flex
            as="ul"
            sx={{
                alignItems: "center",
                flex: 3,
            }}
        >
            <Flex as="li">
                <Image
                    src="https://d3rzy2hoo29vi.cloudfront.net/assets/img/logos/loblaw_v2.svg"
                    alt="Loblaws logo"
                    sx={{
                        px: 4,
                    }}
                />
            </Flex>
            <NavLinks />
        </Flex>
    )
}

export default Menu
