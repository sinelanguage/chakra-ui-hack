import React, { FC } from 'react';
import { GridItem } from "@chakra-ui/react";

interface IHeroSectionProps {
    backgroundColor?: string;
  }

const HeroSection: FC<IHeroSectionProps> = (
    {
        children,
        backgroundColor
    }
) => {
    return (
        <GridItem
            sx={{
                height: "400px",
                backgroundColor,
            }}
        >
            {children}
        </GridItem>
    )
};

export default HeroSection;
