import React from 'react'
import { useSelector } from "react-redux";
import { selectTemplateOption } from "../redux/features/templateOption";

export const useTemplateOptions = () => {
  const update = React.useCallback(() => console.log("todo: UPDATE"), []);
  const options = useSelector(selectTemplateOption);
  return { options, update };
};
