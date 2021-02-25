import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateBirthdayAction,
  selectUser,
  toggleWorkingholidayAction,
} from "../redux/features/user";

export const useUser = () => {
  const dispatch = useDispatch();

  const setBirth = React.useCallback(
    (birth: string) => dispatch(updateBirthdayAction({ birthday: birth })),
    [dispatch]
  );

  const toggleWorkingholiday = React.useCallback(() => {
    dispatch(toggleWorkingholidayAction());
  }, [dispatch]);

  const { birthday, age, canWorkingholiday } = useSelector(selectUser);

  return {
    birth: birthday,
    age,
    setBirth,
    toggleWorkingholiday,
    canWorkingholiday
  } as const;
};
