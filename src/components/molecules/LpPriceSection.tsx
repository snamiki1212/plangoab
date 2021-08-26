import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { LpHeroUnit } from "@/components/atoms/LpHeroUnit";

const ENTERPRISE = "Enterprise";
const FREE = "Free";

const tiers = [
  {
    title: "Free",
    subheader: "for indivisual",
    price: FREE,
    description: ["Create calendars", "Use templates"],
    buttonVariant: "outlined" as const, // "text" | "outlined" | "contained"
    buttonText: "Start Now",
  },
  {
    title: ENTERPRISE,
    subheader: "for company",
    price: "100",
    description: ["Create calendars", "Use templates", "Save calendars"],
    buttonVariant: "contained" as const, // "text" | "outlined" | "contained"
    buttonText: "Start trial",
  },
];

const PriceUnit = () => {
  return (
    <Container maxWidth="md" component="div">
      <Grid container spacing={5} alignItems="flex-end">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === ENTERPRISE ? 7 : 5}
            md={tier.title === ENTERPRISE ? 7 : 5}
          >
            <Card>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
                action={tier.title === ENTERPRISE ? <span>⭐️</span> : null}
                // className={classes.cardHeader}
              />
              <CardContent>
                <PriceContainer>
                  <Typography component="h2" variant="h3" color="textPrimary">
                    {tier.price === FREE ? FREE : `\$${tier.price}`}
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    /mo
                  </Typography>
                </PriceContainer>
                <ul>
                  {tier.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button fullWidth variant={tier.buttonVariant} color="primary">
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const TITLE = "Price";
const SUBTITLE = `Quickly build an effective pricing table for your potential customers with this layout. It&apos;s built with default Material-UI components with little customization.`;

export const LpPriceSection = () => {
  return (
    <Wrapper>
      <LpHeroUnit title={TITLE} subtitle={SUBTITLE} />
      <PriceUnit />
    </Wrapper>
  );
};

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  background: lightgray;
  padding: 3rem 0;
`;
