import { useEffect } from "react";

const FULLCALENDAR_HEADER_CLASS = ".fc-header-toolbar";
export const useHideCalendarHeader = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(FULLCALENDAR_HEADER_CLASS);
    for (let i = 0; i < elems.length; i++) {
      if (!(elems[i] as any).style) continue;
      (elems[i] as any).style.display = "none";
    }
  }, []);
};
