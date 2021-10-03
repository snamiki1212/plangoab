import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  disableConfirmBeforeLeaveAction,
  selectIsConfirmBeforeLeave,
} from "~/src/redux/v2/stores/ui/navigation";

export const useNavigation = () => {
  const dispatch = useDispatch();

  const disableConfirmBeforeLeave = useCallback(
    () => dispatch(disableConfirmBeforeLeaveAction()),
    [dispatch]
  );

  return { disableConfirmBeforeLeave };
};

export const useSelectIsConfrmBeforeLeave = () =>
  useSelector(selectIsConfirmBeforeLeave);
