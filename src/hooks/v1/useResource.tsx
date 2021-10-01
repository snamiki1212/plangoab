import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserCalendar } from "~/src/redux/v1/features/userCalendars";
import {
  removeResourceAction,
  pushResourceAction,
} from "~/src/redux/v1/features/userCalendars";
import { initResource } from "~/src/core/v1/resource/BaseResource";

type IdSet = { calendarId: string; resourceId: string; storyId: string };
type PushArg = { calendarId: string; storyId: string };

export const useResource = () => {
  const dispatch = useDispatch();

  // TODO: remoove this line and get params as arg in each function
  const calendar = useSelector(selectUserCalendar);

  const push = React.useCallback(
    ({ calendarId, storyId }: PushArg) => {
      // story
      const storyIdx = calendar.stories.findIndex(
        (story) => story.id === storyId
      );
      const cannotFindStory = storyIdx === -1;
      if (cannotFindStory) {
        console.warn("cannot find story on updateResource", calendarId);
        return;
      }

      // resource
      const _resources = calendar.stories[storyIdx].resources;
      let lastResource = { idx: -1, order: -1 };
      for (let i = 0; i < _resources.length; i++) {
        const resource = _resources[i];
        const _order = resource.order ?? -1;
        if (_order > lastResource.order) {
          lastResource = { idx: i, order: _order };
        }
      }

      const _resource = initResource({
        calendarId,
        storyId,
        order: lastResource.order + 1,
      });

      dispatch(
        pushResourceAction({ calendarId, storyId, resource: _resource })
      );
    },
    [dispatch, calendar]
  );

  const remove = React.useCallback(
    ({ calendarId, resourceId, storyId }: IdSet) => {
      // TODO: Move outside
      if (!window.confirm("Do you remove this resource?")) return;

      dispatch(
        removeResourceAction({
          resourceId: resourceId,
          storyId: storyId,
          calendarId,
        })
      );
    },
    [dispatch]
  );

  return { remove, push } as const;
};
