import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { TemplateOptionContent } from "@/components/v1/molecules/TemplateOptionContent";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function TemplateOptionModal({ onClose, isOpen }: Props) {
  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>
        <Title>Template Option</Title>
      </DialogTitle>
      <DialogContent dividers>
        <TemplateOptionContent />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

const Title = styled.span`
  color: var(--color-dark1);
  font-family: var(--font-header1);
  font-weight: 900;
  font-size: 2rem;
`;
