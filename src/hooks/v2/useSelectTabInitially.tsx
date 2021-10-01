import { useEffect } from "react";
import {
  useSelectedTab,
  useSelectTabOfStoryId,
} from "@/hooks/v2/useSelectedTab";

// TODO: v1 to v2
import { useUserCalendar } from "@/hooks/v1/useUserCalendar";

export const useSelectTabInitially = () => {
  const selectedStoryId = useSelectTabOfStoryId();
  const { stories } = useUserCalendar();
  const selectTab = useSelectedTab();

  useEffect(() => {
    if (selectedStoryId !== undefined) return;
    if (stories.length === 0) return;
    selectTab(stories[0].id);
  }, [stories, selectedStoryId]);
};
