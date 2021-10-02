import { useEffect } from "react";
import { useSelectedTab } from "~/src/hooks/v2/useSelectedTab";
import { useSelectIsFinished } from "~/src/hooks/v2/useTutorial";
import { usePrevious } from "react-use";

// TODO: v1 to v2
import { useUserCalendar } from "~/src/hooks/v1/useUserCalendar";

export const useSelectTabAfterTutorial = () => {
  const isFinished = useSelectIsFinished();
  const { stories } = useUserCalendar();
  const prevLen = usePrevious(stories.length);

  const shouldUpdate = isFinished && prevLen !== stories.length;

  useSelectTab(shouldUpdate);
};

export const useSelectTabAfterFetch = (shouldUpdate: boolean) => {
  useSelectTab(shouldUpdate);
};

const useSelectTab = (shouldUpdate: boolean) => {
  const selectTab = useSelectedTab();
  const { stories } = useUserCalendar();
  const canAccess = stories.length > 0;
  useEffect(() => {
    if (!canAccess) return;
    if (!shouldUpdate) return;
    selectTab(stories[stories.length - 1].id);
  }, [stories, shouldUpdate, canAccess]);
};
