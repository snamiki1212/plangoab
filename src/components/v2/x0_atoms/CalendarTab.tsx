import styled from "styled-components";

type Props = {
  title: string | React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
};

export const CalendarTab: React.VFC<Props> = ({
  title,
  selected = false,
  onClick = () => {},
}) => {
  return (
    <Container selected={selected} onClick={onClick}>
      {title}
    </Container>
  );
};

const Container = styled.div<{ selected: boolean }>`
  border-radius: 0.5rem 0.5rem 0px 0px;
  background-color: ${({ selected }) => (selected ? "gray" : "#eeeeee")};
  padding: 0.2rem 1.2rem;
  font-family: var(--font-text1);
  font-weight: 700;

  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    background-color: lightblue;
    cursor: pointer;
  }
`;
