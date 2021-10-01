import styled from "styled-components";

type Props = {
  header: React.ReactNode;
  body: React.ReactNode;
};

export const CalendarNewLayout: React.VFC<Props> = ({ header, body }) => {
  return (
    <Container>
      <div>{header}</div>
      <div>{body}</div>
    </Container>
  );
};

const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
