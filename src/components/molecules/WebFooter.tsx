import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { SNS_LIST } from "@/constants/sns";

const SNS_DESCRIPTIONS = SNS_LIST.map((sns) => ({
  title: sns.name,
  url: sns.url,
}));

const footers = [
  {
    title: "Team",
    description: [
      { title: "Home", url: "#" },
      { title: "Create Calendar", url: "#" },
      { title: "Contact us", url: "#" },
    ],
  },
  {
    title: "Featuers",
    description: [
      { title: "Create Calendar", url: "#" },
      { title: "Show created calendars", url: "#" },
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
                {footer.description.map(({ title, url }) => (
                  <li key={title}>
                    <a href={url} style={{ textDecoration: "none" }}>
                      <Text>{title}</Text>
                    </a>
                  </li>
                ))}
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
