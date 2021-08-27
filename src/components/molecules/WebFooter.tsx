import Link from "next/link";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { SNS_LIST } from "@/constants/sns";
import { CONTACT_FORM_URL } from "@/constants/meta";
import { ROUTES } from "@/constants/routes";
import { isExternalUrl } from "@/lib/util";

const SNS_DESCRIPTIONS = SNS_LIST.map((sns) => ({
  title: sns.name,
  url: sns.url,
}));

const footers = [
  {
    title: "Team",
    description: [
      { title: "Home", url: "#" },
      { title: "Contact us", url: CONTACT_FORM_URL },
    ],
  },
  {
    title: "Featuers",
    description: [
      { title: "Create calendar", url: ROUTES.CALENDARS__NEW },
      // { title: "Browse calendars", url: "#" },
    ],
  },
  { title: "Creater", description: [...SNS_DESCRIPTIONS] },
];

export function WebFooter() {
  return (
    <Wrapper>
      <Container maxWidth="md">
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Title>{footer.title}</Title>
              <ul>
                {footer.description.map(({ title, url }) => {
                  const aProps = isExternalUrl(url)
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
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5} style={{ textAlign: "center" }}>
          Copyright © 2021 Shun Namiki
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
`;
