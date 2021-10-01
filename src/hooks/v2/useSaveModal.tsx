import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAction, selectIsOpen } from "@/redux/v1/ui/previewModal";

export const useSaveModal = () => {
  const dispatch = useDispatch();
  const toggle = useCallback(() => dispatch(toggleAction()), [dispatch]);
  return toggle;
};

export const useSelectIsOpen = () => useSelector(selectIsOpen);
