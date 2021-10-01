import React from "react";
import { EVENTS } from "~/src/constants/fullcalendar";

const { TASK } = EVENTS;
const tasksWithDescription = Object.entries(TASK).filter(
  ([_key, val]) => val.description
);

export function ExplanationSection() {
  return (
    <div>
      <h3>Explanation for template description</h3>
      <table style={{ border: "1px solid gray", borderCollapse: "collapse" }}>
        {tasksWithDescription.map(([key, val]) => (
          <tr>
            <td style={{ border: "1px solid gray" }}>{key}</td>
            <td style={{ border: "1px solid gray" }}>
              <span style={{ whiteSpace: "pre-line" }}>{val.description}</span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
