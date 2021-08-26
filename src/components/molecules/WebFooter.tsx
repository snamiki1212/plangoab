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
              <span>{footer.title}</span>
              <ul>
                {footer.description.map(({ title, url }) => (
                  <li key={title}>
                    <a href={url}>{title}</a>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>Copyright Shun Namiki</Box>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 10rem;
  background: lightpink;
`;
