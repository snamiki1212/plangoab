import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import { ROUTES } from "@/constants/routes";
import { CONTACT_FORM_URL } from "@/constants/meta";
import { isExternalUrl } from "@/lib/util";

const ENTERPRISE = "Enterprise";
const FREE = "Free";

const tiers = [
  {
    id: FREE,
    title: "Free",
    subheader: "for indivisual",
    price: FREE,
    description: ["✔️ Create calendars", "✔️ Use templates"],
    buttonVariant: "outlined" as const, // "text" | "outlined" | "contained"
    buttonText: "Start Now",
    buttonUrl: ROUTES.CALENDARS__NEW,
  },
  {
    id: ENTERPRISE,
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
    buttonUrl: CONTACT_FORM_URL,
  },
];

export const LpPriceUnit = () => {
  return (
    <Grid container spacing={5} alignItems="flex-start">
      {tiers.map((tier) => {
        const headerTextStyle = {
          color: `${
            tier.id === FREE ? `var(--color-dark1)` : `var(--color-light1)`
          }`,
        };
        const headerStyle = {
          background: `${
            tier.id === FREE ? "lightgray" : `var(--color-dark1)`
          }`,
        };
        const aStyle = {
          textDecoration: "none",
          color: `${
            tier.id === FREE ? `var(--color-dark1)` : `var(--color-light1)`
          }`,
        };
        const aProps = isExternalUrl(tier.buttonUrl)
          ? {
              target: "_blank",
              rel: "noopener noreferrer",
            }
          : {};

        return (
          <Grid item key={tier.title} xs={12} sm={6} md={6}>
            <Card>
              <CardHeader
                title={<Header style={headerTextStyle}>{tier.title}</Header>}
                subheader={
                  <Subheader style={headerTextStyle}>
                    {tier.subheader}
                  </Subheader>
                }
                titleTypographyProps={{
                  align: "center",
                }}
                subheaderTypographyProps={{
                  align: "center",
                }}
                action={tier.id === ENTERPRISE ? <span>⭐️</span> : null}
                style={headerStyle}
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
                <div style={{ margin: "0 auto", marginBottom: "2rem" }}>
                  <Link href={tier.buttonUrl}>
                    <a style={aStyle} {...aProps}>
                      <Button
                        fullWidth
                        variant={tier.buttonVariant}
                        color="primary"
                      >
                        {tier.buttonText}
                      </Button>
                    </a>
                  </Link>
                </div>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

const Header = styled.span`
  font-family: var(--font-header1);
  color: var(--color-dark1);
  font-size: 2rem;
  font-weight: 900;
`;

const Subheader = styled.span`
  font-family: var(--font-header1);
  color: var(--color-dark1);
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
  color: var(--color-dark1);
  font-size: 1.3rem;
`;

const Price = styled.span`
  font-family: var(--font-text1);
  color: var(--color-dark1);
  font-size: 3rem;
  font-weight: 900;
  /*  */
  margin-bottom: 3rem;
`;
