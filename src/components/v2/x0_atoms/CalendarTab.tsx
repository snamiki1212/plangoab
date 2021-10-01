import styled from "styled-components";

type Props = { title: string; selected?: boolean };

export const CalendarTab: React.VFC<Props> = ({ title, selected = false }) => {
  return <Container selected={selected}>{title}</Container>;
};

const Container = styled.div<{ selected: boolean }>`
  border-radius: 0.5rem 0.5rem 0px 0px;
  background-color: ${({ selected }) => (selected ? "darkgray" : "#eeeeee")};
  padding: 0.2rem 1.2rem;

  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    background-color: lightblue;
    cursor: pointer;
  }
`;