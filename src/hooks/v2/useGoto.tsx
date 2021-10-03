import { useCallback } from "react";
import { useRouter } from "next/router";
import { useNavigation } from "~/src/hooks/v2/useNavigation";

export const useGoto = (route: string, withConfirm = false) => {
  const router = useRouter();
  const { disableConfirmBeforeLeave } = useNavigation();
  const goto = useCallback(() => {
    if (!withConfirm) disableConfirmBeforeLeave();
    router.push(route);
  }, [router, disableConfirmBeforeLeave, withConfirm, route]);
  return goto;
};
