import React from "react";
import styled from 'styled-components'
import Button from "@material-ui/core/Button";
import { useUserCalendar } from "../../hooks/useUserCalendar";
import { useUser } from "../../hooks/useUser";

export function UserCalendarCreater() {
  const { init: initUserCalendar } = useUserCalendar();
  const { birth } = useUser();

  // TODO: open modal and start setting birthday
  const handleCreate = React.useCallback(() => {
    if (!birth) return;
    initUserCalendar(birth);
  }, [initUserCalendar, birth]);

  return (
    <Container>
      <Button onClick={handleCreate} variant="contained" color="primary">
        Create Calendar
      </Button>
    </Container>
  );
}

const Container = styled.div`
  height: 30vh;
  background: lightblue;
  display: grid;
  place-items: center;
`