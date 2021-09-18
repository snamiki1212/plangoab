import styled from "styled-components";

type Props = {
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
};

export const HomeLayout: React.VFC<Props> = ({ header, content, footer }) => {
  return (
    <div>
      {header}
      <Decorator.Container>
        <Cycle1 />
        <Cycle2 />
        <Cycle3 />
        <Cycle4 />
        <Cycle5 />
        {content}
      </Decorator.Container>
      {footer}
    </div>
  );
};

const Decorator = {
  Container: styled.div`
    position: relative;
  `,
  Item: styled.div`
    position: absolute;
    z-index: -1;
  `,
};

const Cycle1 = styled(Decorator.Item)`
  background: radial-gradient(var(--color-lp-bg1), transparent 50%);
  width: 20rem;
  height: 20rem;
  top: 0;
  left: 0;
`;

const Cycle2 = styled(Decorator.Item)`
  background: radial-gradient(var(--color-lp-bg2), transparent 50%);
  width: 20rem;
  height: 20rem;
  top: 220rem;
  right: 0;
`;

const Cycle3 = styled(Decorator.Item)`
  background: radial-gradient(var(--color-lp-bg2), transparent 50%);
  width: 20rem;
  height: 20rem;
  top: 20rem;
  left: 10rem;
`;

const Cycle4 = styled(Decorator.Item)`
  background: radial-gradient(var(--color-lp-bg1), transparent 50%);
  width: 50rem;
  height: 50rem;
  top: 70rem;
  left: 10rem;
`;

const Cycle5 = styled(Decorator.Item)`
  background: radial-gradient(var(--color-lp-bg2), transparent 50%);
  width: 100rem;
  height: 100rem;
  top: 150rem;
  right: 10rem;
`;
