import React, { FC } from 'react';
import { Grid } from "@chakra-ui/react";

const HeroBannerContainer: FC = ({ children }) => {
    return (
        <Grid
            sx={{
                gridTemplateColumns: "repeat(3, 1fr)",
                height: "400px",
                backgroundColor: "gray.100"
            }}
        >
            {children}
        </Grid>
    )
};

export default HeroBannerContainer;
