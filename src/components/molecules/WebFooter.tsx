import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { SNS_LIST } from "@/constants/sns";
import { CONTACT_FORM_URL } from "@/constants/meta";
import { COLLABORATIONS } from "@/constants/collaborations";
import { ROUTES } from "@/constants/routes";
import { isExternalUrl } from "@/lib/util";

type Description = { title: string; url: string };
type Footer = { title: string; descriptions: Description[] };

const SNS_DESCRIPTIONS: Description[] = SNS_LIST.map((sns) => ({
  title: sns.name,
  url: sns.url,
}));

const COLLABORATION_DESCRIPTIONS: Description[] = COLLABORATIONS.map(
  (item) => ({
    title: item.name,
    url: item.link,
  })
);

const footers: Footer[] = [
  {
    title: "Plangoab",
    descriptions: [
      { title: "Home", url: "#" },
      { title: "Contact us", url: CONTACT_FORM_URL },
    ],
  },
  {
    title: "Featuers",
    descriptions: [
      {
        title: "Create calendar",
        url: ROUTES.CALENDARS__NEW,
      },
      {
        title: "Show calendars",
        url: ROUTES.CALENDARS__LIST,
      },
      // { title: "Browse calendars", url: "#" },
    ],
  },
  {
    title: "Creater",
    descriptions: SNS_DESCRIPTIONS,
  },
  {
    title: "Collaborations",
    descriptions: COLLABORATION_DESCRIPTIONS,
  },
];

export function WebFooter() {
  return (
    <Wrapper>
      <Container maxWidth="md">
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={12} sm={6} md={3} key={footer.title}>
              <Title>{footer.title}</Title>
              <ul>
                {footer.descriptions.map(({ title, url }) => {
                  const _isExternalUrl = isExternalUrl(url);
                  console.log({ url });
                  const aProps = _isExternalUrl
                    ? {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {};
                  return (
                    <li key={title}>
                      <Link href={url}>
                        <a style={{ textDecoration: "none" }} {...aProps}>
                          <Text>{title}</Text>
                          {_isExternalUrl && <span> 🔗</span>}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Grid>
          ))}
        </Grid>
        <div style={{ height: "3rem" }} />
        <Box mt={5} style={{ textAlign: "center" }}>
          <Divider style={{ background: "var(--color-light1)" }} />
          <Text>Copyright © 2021 Shun Namiki</Text>
        </Box>
      </Container>
    </Wrapper>
  );
}

const Title = styled.span`
  font-family: var(--font-header1);
  font-size: 2rem;
`;

const Text = styled.span`
  font-family: var(--font-text1);
  font-size: 1rem;
`;

const Wrapper = styled.div`
  padding-top: 10rem;
  background: var(--color-dark1);
  color: var(--color-light1);
  & a {
    color: var(--color-light1);
  }
  & a:hover {
    border-bottom: 1px solid var(--color-light1);
  }
`;
