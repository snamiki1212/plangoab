import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateBirthdayAction,
  selectUserWithAge,
} from "@/redux/v1/features/user";

export const useUser = () => {
  const dispatch = useDispatch();

  const setBirth = React.useCallback(
    (birth: string) => dispatch(updateBirthdayAction({ birthday: birth })),
    [dispatch]
  );

  const { birthday, age } = useSelector(selectUserWithAge);

  return {
    birth: birthday,
    age,
    setBirth,
  } as const;
};
