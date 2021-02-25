import React from "react";
import { useModal } from "./useModal";

export const OPEN_OPTION_BUTTON = "OPEN_OPTION_BUTTON";

export const useTemplateCustomButtons = () => {
  const { open, isOpen, close } = useModal();

  const handleOpenOption = React.useCallback(() => {
    open();
  }, [open]);

  const customButtons = React.useMemo(
    () => ({
      [OPEN_OPTION_BUTTON]: {
        text: "⚙️Change Options",
        click: handleOpenOption,
      },
    }),
    [handleOpenOption]
  );

  return { customButtons, isOpen, close };
};
