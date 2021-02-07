import React from "react";
import {Table} from './useStoryIdNameTable'

type Props = {
  // REF: https://fullcalendar.io/docs/resource-group-render-hooks
  groupValue: string;
};

export const useResourceGroupLabelContent = (table: Table) => {
  const resourceGroupLabelContent = React.useCallback(
    ({ groupValue: storyId }: Props) => {
      let name = table[storyId];
      if (!name) {
        console.warn("cannot find this story name", storyId);
        name = "No Name";
      }
      return { html: `<i>${name}</i>` };
    },
    [table]
  );

  return resourceGroupLabelContent;
};
