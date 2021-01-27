import React from "react";
import { uuid } from "../lib/uuid";
import { SHARED__RESOURCES, TEMPLATE__RESOURCES, GROUP_ID } from "../constants/fullcalendar";

type Resources = any

export const useStoryResouces = () => {
  const [resources, setResources] = React.useState<Resources[]>([]);

  const init = React.useCallback(() => {
    const _uuid = uuid();
    
    const updatedList = TEMPLATE__RESOURCES.map((item) => ({
      ...item,
      [GROUP_ID]: _uuid,
    }));

    setResources([...SHARED__RESOURCES, ...updatedList]);
  }, []);

  return [resources, init] as const;
};
