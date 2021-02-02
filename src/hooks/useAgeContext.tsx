import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { updateXXX } from "../redux/features/user";

export const useAgeContext = () => {
  const {birthday, age} = useSelector((state:RootState) => state.user);
  const dispatch = useDispatch();
  const setBirth = React.useCallback(
    (birth: string) => dispatch(updateXXX({ birthday: birth })),
    [dispatch]
  );

  return {
    birth: birthday,
    age,
    setBirth,
  };
};
