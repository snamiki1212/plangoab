import { useMemo, useCallback } from "react";
import styled from "styled-components";
import { PLANGOAB_LICENSE_KEY } from "~/src/constants/fullcalendar";
import { ROUTES } from "~/src/constants/routes";
import { uuid } from "~/src/lib/uuid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useSaveModal, useSelectIsOpen } from "~/src/hooks/v2/useSaveModal";
import { useGoto } from "~/src/hooks/v2/useGoto";
import { useCreateCalendarMutation } from "~/src/hooks/v2/useCalendarApi";

// TODO: v1 to v2
import { useUser } from "~/src/hooks/v1/useUser";
import { useUserCalendar } from "~/src/hooks/v1/useUserCalendar";
import { normalizeCalendar } from "~/src/core/v1/normalize";

const useSave = () => {
  const { stories } = useUserCalendar();
  const { birth } = useUser();
  const calendarId = useMemo(() => uuid(), []);
  const normalized = normalizeCalendar({ id: calendarId, stories });
  const [doCreateCalendar, { isLoading: isUpdating }] =
    useCreateCalendarMutation();
  const createCalendarApi = useCallback(
    () =>
      doCreateCalendar({
        calendar: normalized,
        birthday: birth,
        licenseKey: PLANGOAB_LICENSE_KEY,
      }),
    [doCreateCalendar, normalized, birth]
  );
  return createCalendarApi;
};

export const SaveModal: React.VFC = () => {
  const toggleModal = useSaveModal();
  const isOpen = useSelectIsOpen();

  const save = useSave();
  const goto = useGoto(ROUTES.CALENDARS__LIST);

  const handleSave = useCallback(() => {
    save().then(() => {
      // TODO: add reset local data
      // TODO: check success or not. if sucess, run this block's code.
      toggleModal();
      goto();
    });
  }, [save, toggleModal, goto]);

  return (
    <Dialog onClose={toggleModal} open={isOpen}>
      <DialogContent>
        <div>
          <div>Do you want to save?</div>
          <SubText>
            You cannot edit / delete these data once you posted.{" "}
          </SubText>
        </div>
        <Button onClick={toggleModal} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSave} variant="outlined">
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};

const SubText = styled.span`
  color: gray;
`;
