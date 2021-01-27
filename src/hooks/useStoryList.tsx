import React from "react";
import { EventInput } from "@fullcalendar/react";
import { uuid } from "../lib/uuid";
import { convertIsoToDateTime } from "../lib/date";
import { getLastYearDate, getStartYearDate } from '../core/visa/workingHoliday'
import {
  SHARED__RESOURCES,
  TEMPLATE__RESOURCES,
  GROUP_ID_KEY,
  RESOURCE_NAME_KEY,
} from "../constants/fullcalendar";
import {createEventByName} from '../core/senario'

type Resources = any;

export const useStoryList = () => {
  const [events, setEvents] = React.useState<EventInput[]>([]);
  const [resources, setResources] = React.useState<Resources[]>([]);

  const generate = React.useCallback((_birth: string) => {
    const birth = new Date(_birth);
    const lastDate = getLastYearDate(birth)
    const end = convertIsoToDateTime(lastDate.toISOString())
    const start = convertIsoToDateTime(getStartYearDate(new Date(end)).toISOString());

    const groupId = uuid();

    const [_resources, _events] = TEMPLATE__RESOURCES.reduce(
      (prev: any, curr) => {
        const [resources, events] = prev;

        // create resource
        const resourceId = uuid();
        const resource = {
          ...curr,
          [GROUP_ID_KEY]: groupId,
          id: resourceId,
        };

        const resourceName = resource[RESOURCE_NAME_KEY]

        // creat event
        const event = {...createEventByName(resourceName), resourceId}
        // const event = {
        //   id: eventId,
        //   resourceId,
        //   start,
        //   end,
        // };

        // merge
        const result = [
          [...resources, resource],
          [...events, event],
        ] as const;

        return result;
      },
      [[], []] as [any[], any[]]
    );

    const _r = [...SHARED__RESOURCES, ..._resources]

    console.log("_events", _events)
    setResources(_r);
    setEvents(_events);
  }, []);

  return { events, resources, generate } as const;
};
