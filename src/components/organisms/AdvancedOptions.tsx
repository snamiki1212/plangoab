import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useTemplateOptions } from "../../hooks/useTemplateOptions";

// TODO: Use react-hook-form because of reducing render cost
// TODO: rename AdvancedOptions
export function AdvancedOptions() {
  const [opens, toggle] = React.useReducer((state) => !state, false);
  const { update: updateOption, options } = useTemplateOptions();
  const { workingholidayPeriod } = options;

  const handleChangeWorkingholidayPeriod = React.useCallback(
    (_event) => {
      const value = _event.target.value;
      const maybeNum = value === "" ? 0 : parseInt(value);
      if (!Number.isInteger(maybeNum)) return;
      updateOption({ workingholidayPeriod: maybeNum });
    },
    [updateOption]
  );

  return (
    <Container>
      <Button onClick={toggle} size="small">
        open advanced options
      </Button>
      {opens && (
        <TextField
          value={workingholidayPeriod}
          onChange={handleChangeWorkingholidayPeriod}
          label="Working Holiday Period"
          InputProps={{
            endAdornment: <InputAdornment position="end">Month</InputAdornment>,
          }}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: gap;
  gap: 1rem;
  padding: 2rem;
`;
