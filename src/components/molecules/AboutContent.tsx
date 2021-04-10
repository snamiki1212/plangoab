import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useResetAllData } from "../../hooks/useResetAllData";
import * as AuthorInfo from "../../constants/meta";
import { collaborations } from "../../constants/collaborations";

export function AboutContent() {
  const { reset } = useResetAllData();

  const handleResetAllData = React.useCallback(() => {
    if (!window.confirm("Would you remove all data in Plangoab?")) return;
    reset();
  }, [reset]);

  return (
    <Container>
      <div>
        <h2>🐱 About</h2>
        <p>
          A web calendar for a person going abroad. Generating a suitable
          schedule and customizable.
        </p>
      </div>

      <div>
        <h2>📝 How to use</h2>
        <p>
          <h3>Sections</h3>
          There are two sections.
          <br />
          <li>1. My calendar</li>
          <li>2. Template calendars</li>
        </p>

        <br />

        <p>
          <h3>Instruction</h3>
          <li>
            1. Pick appropriate plan from a template calendar to click "Copy to
            my calendar".
          </li>
          <li>
            2. Stories are copied from a template calendar into my calendar.
          </li>
          <li>3. Edit my story and events in my calendar.</li>
        </p>
      </div>

      <div>
        <h2>🔑 Tips</h2>
        <li>Zoom in: [Command] + [-]</li>
        <li>Zoom out: [Command] + [+]</li>
      </div>

      <div>
        <h2>💥 Reset All Data</h2>
        <div>
          <p>Would you like to reset all data in Plangoab?</p>
          <br />
          <Button
            onClick={handleResetAllData}
            variant="outlined"
            color="secondary"
          >
            RESET ALL DATA
          </Button>
        </div>
      </div>

      <div>
        <h2>📜 License</h2>
        <li>GPL-3.0</li>
      </div>

      <div>
        <h2>😎 Author</h2>
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
        <h2>👨‍👦‍👦 Collaborations</h2>
        {collaborations.map(({ name, link }) => (
          <li>
            <a target="_blank" rel="noopener noreferrer" href={link}>
              {name}
            </a>
          </li>
        ))}
      </div>

      <div>
        <h2>🧑‍💻 Source Code</h2>
        <span>
          Plangoab is OSS managed at{" "}
          <a href={AuthorInfo.THIS_GITHUB_URL}>GitHub</a> so you can check all
          of code.
        </span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: 2rem;
`;
