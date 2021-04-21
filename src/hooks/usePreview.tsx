import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAction, selectIsOpen } from "../redux/ui/previewModal";

export const usePreviewCommand = () => {
  const dispatch = useDispatch();
  const toggle = useCallback(() => dispatch(toggleAction()), [dispatch]);
  return { toggle };
};

export const usePreviewQuery = () => {
  const isOpen = useSelector(selectIsOpen);
  return { isOpen };
};
