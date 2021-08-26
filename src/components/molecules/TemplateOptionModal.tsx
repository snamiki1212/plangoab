import React from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { TemplateOptionContent } from "@/components/molecules/TemplateOptionContent";

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
  color: var(--base-dark1);
  font-family: var(--font-header1);
  font-weight: 900;
  font-size: 2rem;
`;
