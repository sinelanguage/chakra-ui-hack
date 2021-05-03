import React, { FC } from 'react'
import { Flex } from "@chakra-ui/react"

const HeroBannerContainer: FC = ({ children }) => {
    return (
        <Flex
            as="div"
            sx={{
                height: "300px",
                borderBottom: "1px solid",
                borderColor: "gray.200",
            }}
        >
            {children}
        </Flex>
    )
}

export default HeroBannerContainer
