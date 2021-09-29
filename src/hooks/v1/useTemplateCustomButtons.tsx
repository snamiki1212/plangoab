import React from "react";
import styled from "styled-components";
import { useModal } from "@/hooks/v1/useModal";

export const OPEN_OPTION_BUTTON = "OPEN_OPTION_BUTTON";

export const useTemplateCustomButtons = () => {
  const { open, isOpen, close } = useModal();

  const handleOpenOption = React.useCallback(() => {
    open();
  }, [open]);

  const customButtons = React.useMemo(
    () => ({
      [OPEN_OPTION_BUTTON]: {
        text: <Text>⚙️ Options</Text>,
        click: handleOpenOption,
      },
    }),
    [handleOpenOption]
  );

  return { customButtons, isOpen, close };
};

const Text = styled.span`
  color: var(--color-dark1);
  font-family: var(--font-text1);
`;
