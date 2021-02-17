import React from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import * as AuthorInfo from "../../constants/meta";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function AboutModal({ isOpen, onClose }: Props) {
  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>About Plangoab</DialogTitle>
      <_DialogContent dividers={true}>
        <div>
          <h2>About</h2>
          <p>
            A web calendar for a person going abroad, generating a
            suitable schedule and customizable. Using React, Redux(Redux
            Toolkit), and Fullcalendar.
          </p>
        </div>
        <div>
          <h2>License</h2>
          <li>GPL-3.0</li>
        </div>

        <div>
          <h2>Author</h2>
          <li>
            <a href={AuthorInfo.MY_GITHUB_URL}>GitHub:snamiki1212</a>
          </li>
          <li>
            <a href={AuthorInfo.MY_TWITTER_URL}>Twitter:snamiki1212</a>
          </li>
          <li>
            <a href={AuthorInfo.MY_PORTFOLIO}>Portfolio</a>
          </li>
        </div>

        <div>
          <h2>Source</h2>
          <span>
            This page is managed at{" "}
            <a href={AuthorInfo.THIS_GITHUB_URL}>GitHub</a>.
          </span>
        </div>
      </_DialogContent>
    </Dialog>
  );
}

const _DialogContent = styled(DialogContent)`
  display: grid;
  gap: 2rem;
`;
