import React from "react";
import { EventInput } from "@fullcalendar/react";
import { events as list } from "../constants/index";
import { uuid } from "../lib/uuid";
import {
  SHARED__RESOURCES,
  TEMPLATE__RESOURCES,
  GROUP_ID,
} from "../constants/fullcalendar";

type Resources = any;

export const useStoryList = () => {
  const [events, setEvents] = React.useState<EventInput[]>([]);
  const [resources, setResources] = React.useState<Resources[]>([]);

  // const createStoryEvents = React.useCallback((_birth: Date | string) => {
  //   setEvents(list);
  // }, []);

  const init = React.useCallback(() => {
    const groupId = uuid();

    const [_resources, _events] = TEMPLATE__RESOURCES.reduce(
      (prev: any, curr) => {
        const [resources, events] = prev;

        // create resource
        const resourceId = uuid();
        const resource = {
          ...curr,
          [GROUP_ID]: groupId,
          id: resourceId,
        };

        // creat event
        const eventId = uuid();
        const event = {
          id: eventId,
          resourceId,
          start: "2022-01-01",
          end: "2023-06-01",
        };

        // merge
        const result = [
          [...resources, resource],
          [...events, event],
        ] as const;

        console.log("result", result);
        return result;
      },
      [[], []] as [any[], any[]]
    );

    
    const _r = [...SHARED__RESOURCES, ..._resources]
    console.log("___events__", _events, "__r__", _r);
    setResources(_r);
    setEvents(_events);
  }, []);

  return { events, resources, init } as const;
};
