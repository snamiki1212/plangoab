import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useUserCalendar } from "../../hooks/useUserCalendar";
import { useUser } from "../../hooks/useUser";
import { useTemplateOptions } from "../../hooks/useTemplateOptions";

export function EmptyCalendar() {
  const { init: initUserCalendar } = useUserCalendar();
  const { birth } = useUser();
  const { options } = useTemplateOptions();
  const workingholidayPeriod = React.useMemo(
    () => options.workingholidayPeriod,
    [options.workingholidayPeriod]
  );

  // TODO: open modal and start setting birthday
  const handleCreate = React.useCallback(() => {
    if (!birth) return;
    initUserCalendar({ birthday: birth, workingholidayPeriod });
  }, [initUserCalendar, birth, workingholidayPeriod]);

  return (
    <Container>
      <Button onClick={handleCreate} variant="contained" color="primary">
        Create Calendar
      </Button>
    </Container>
  );
}

const Container = styled.div`
  height: 50vh;
  display: grid;
  place-items: center;
`;
