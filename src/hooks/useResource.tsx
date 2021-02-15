import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectResource } from "../redux/ui/resourceModal";
import { selectUserCalendar } from "../redux/features/userCalendars";
import {
  removeResourceAction,
  updateResourceAction,
  pushResourceAction,
} from "../redux/features/userCalendars";
import {
  BaseResource,
  initResource,
  updateResource,
} from "../core/resource/BaseResource";

type IdSet = { calendarId: string; resourceId: string; storyId: string };

export const useResource = () => {
  const dispatch = useDispatch();

  // TODO: remoove this line and get from arg in each function
  const resource = useSelector(selectResource);
  const calendar = useSelector(selectUserCalendar);

  const push = React.useCallback(
    ({ calendarId, storyId }: { calendarId: string; storyId: string }) => {
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

      dispatch(pushResourceAction({ calendarId, storyId, resource:_resource }));
    },
    [dispatch, calendar]
  );

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
    [dispatch]
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
    [dispatch, resource]
  );

  return { remove, update, push } as const;
};
