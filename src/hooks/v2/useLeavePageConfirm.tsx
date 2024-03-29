import { useEffect } from "react";
import Router from "next/router";
import { useBeforeUnload } from "react-use";
import { useSelectIsConfrmBeforeLeave } from "~/src/hooks/v2/useNavigation";

// REF: https://github.com/vercel/next.js/discussions/9662#discussioncomment-511835
const useLeavePageConfirm_Naive = (
  isConfirm = true,
  message = "Are you sure want to leave this page?"
) => {
  useBeforeUnload(isConfirm, message);

  useEffect(() => {
    const handler = () => {
      if (isConfirm && !window.confirm(message)) {
        throw "Route Canceled";
      }
    };

    Router.events.on("routeChangeStart", handler);

    return () => {
      Router.events.off("routeChangeStart", handler);
    };
  }, [isConfirm, message]);
};

export const useLeavePageConfirm = () => {
  const isConfrm = useSelectIsConfrmBeforeLeave();
  useLeavePageConfirm_Naive(isConfrm);
};
