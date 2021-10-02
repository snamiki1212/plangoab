import { useEffect } from "react";
import { useSelectedTab } from "~/src/hooks/v2/useSelectedTab";
import { useSelectIsFinished } from "~/src/hooks/v2/useTutorial";
import { usePrevious } from "react-use";

// TODO: v1 to v2
import { useUserCalendar } from "~/src/hooks/v1/useUserCalendar";

export const useSelectTabAfterTutorial = () => {
  const isFinished = useSelectIsFinished();
  const { stories } = useUserCalendar();
  const selectTab = useSelectedTab();

  const prevLen = usePrevious(stories.length);

  const shouldUpdate =
    isFinished && stories.length !== 0 && prevLen !== stories.length;

  useEffect(() => {
    if (shouldUpdate) selectTab(stories[stories.length - 1].id);
  }, [stories, shouldUpdate]);
};
