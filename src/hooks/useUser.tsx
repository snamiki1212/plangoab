import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { updateBirthday } from "../redux/features/user";

export const useUser = () => {
  const dispatch = useDispatch();
  const setBirth = React.useCallback(
    (birth: string) => dispatch(updateBirthday({ birthday: birth })),
    [dispatch]
  );

  const { birthday, age } = useSelector((state: RootState) => state.user);

  return {
    birth: birthday,
    age,
    setBirth,
  };
};
