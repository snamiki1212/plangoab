import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

type Props = {
  title: string;
  subtitle?: string;
};

export const LpHeroUnit: React.VFC<Props> = ({ title, subtitle = "" }) => {
  return (
    <Container maxWidth="sm" component="main">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        component="p"
      >
        {subtitle}
      </Typography>
    </Container>
  );
};
