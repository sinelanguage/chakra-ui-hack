import React, { FC } from 'react';
import { Grid, GridItem } from "@chakra-ui/react";

interface ICouponProps {
    backgroundColor?: string;
  }

const CouponGrid: FC = ({ children }) => (
        <Grid
            sx={{
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "repeat(3, 1fr)",
                height: "400px",
            }}
        >
            { children }
        </Grid>
    );

const Coupon: FC<ICouponProps> = (
    {
        children,
        backgroundColor
    }
) => (
        <GridItem
            sx={{
                backgroundColor,
                borderBottom: "1px solid",
                borderLeft: "1px solid",
                borderColor: "#ffcece",
            }}
        >
            {children}
        </GridItem>
    );

const CouponSection: FC = ({ children }) => {
    let coupons = []
    for (let index = 0; index < 9; index++) {
        coupons.push(<Coupon />)
    }
    return (
        <CouponGrid>
            {coupons}
        </CouponGrid>
    )
};

export { Coupon, CouponGrid, CouponSection }
