import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  pushAction,
  selectResourceModal,
  selectResource,
} from "../redux/ui/resourceModal";
import {
  removeResourceAction,
  updateResourceAction,
} from "../redux/features/userCalendars";
import { MY_CALENDAR_ID } from "../constants/fullcalendar/settings";
import { BaseResource, updateResource } from "../core/resource/BaseResource";
import {
  NAME_OF_ORDER,
  NAME_OF_STORY_ID,
  FIELD_NAME,
} from "../constants/fullcalendar/settings";

type IdSet = { calendarId: string; resourceId: string; storyId: string };

export const useResource = () => {
  const dispatch = useDispatch();

  // TODO: remoove this line and get from arg in each function
  const resource = useSelector(selectResource);

  const remove = React.useCallback(
    ({ calendarId, resourceId, storyId }: IdSet) => {
      if (!window.confirm("Do you remove this resource?")) return;

      dispatch(
        removeResourceAction({
          resourceId: resourceId,
          storyId: storyId,
          calendarId,
        })
      );
    },
    []
  );

  const update = React.useCallback(
    ({ calendarId, storyId }: IdSet, params: Partial<BaseResource>) => {
      if (!resource) {
        return console.warn("Invalid data status when to update resource.");
      }

      const newResource = updateResource(resource, params);
      dispatch(
        updateResourceAction({
          calendarId,
          storyId: storyId,
          newResource,
        })
      );
    },
    [resource]
  );

  return { remove, update } as const;
};
