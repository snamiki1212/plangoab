import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const ENTERPRISE = "Enterprise";
const FREE = "Free";

const tiers = [
  {
    title: "Free",
    subheader: "for indivisual",
    price: FREE,
    description: ["✔️ Create calendars", "✔️ Use templates"],
    buttonVariant: "outlined" as const, // "text" | "outlined" | "contained"
    buttonText: "Start Now",
  },
  {
    title: ENTERPRISE,
    subheader: "for company",
    price: "Paid",
    description: [
      "👑 Create calendars",
      "👑 Use templates",
      "👑 Save calendars",
    ],
    buttonVariant: "contained" as const, // "text" | "outlined" | "contained"
    buttonText: "Start trial",
  },
];

export const LpPriceUnit = () => {
  return (
    <Grid container spacing={5} alignItems="flex-start">
      {tiers.map((tier) => (
        <Grid item key={tier.title} xs={12} sm={6} md={6}>
          <Card>
            <CardHeader
              title={<Header>{tier.title}</Header>}
              subheader={<Subheader>{tier.subheader}</Subheader>}
              titleTypographyProps={{
                align: "center",
              }}
              subheaderTypographyProps={{
                align: "center",
              }}
              action={tier.title === ENTERPRISE ? <span>⭐️</span> : null}
              style={{
                background: "lightgray",
              }}
            />

            <CardContent style={{ padding: "3rem", height: "20rem" }}>
              <Price>{tier.price}</Price>
              <FeatureContainer>
                {tier.description.map((line) => (
                  <Feature key={line}>{line}</Feature>
                ))}
              </FeatureContainer>
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
  );
};

const Header = styled.span`
  font-family: var(--font-header1);
  color: var(--base-dark1);
  font-size: 2rem;
  font-weight: 900;
`;

const Subheader = styled.span`
  font-family: var(--font-header1);
  color: var(--base-dark1);
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /*  */
  margin-top: 1rem;
  margin-left: 1rem;
`;

const Feature = styled.div`
  font-family: var(--font-text1);
  color: var(--base-dark1);
  font-size: 1.3rem;
`;

const Price = styled.span`
  font-family: var(--font-text1);
  color: var(--base-dark1);
  font-size: 3rem;
  font-weight: 900;
  /*  */
  margin-bottom: 3rem;
`;
