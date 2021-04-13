import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateWidthPxAction, selectWidthPx } from "../redux/ui/capture";

export const useCaptureQuery = () => {
  const dispatch = useDispatch();

  // NOTE: this is local val for form, it's not global val
  const [width, setWidth] = React.useState<number | undefined>(undefined);

  const isInValidRange = React.useCallback(
    (val: number) => val < 50_000 && val >= 0,
    []
  );

  const handleChange = React.useCallback((event: any) => {
    const val = event.target.value;
    const maybeNum = Number(val);
    if (val === "") return setWidth(undefined);
    if (isNaN(maybeNum)) return;
    if (!isInValidRange(maybeNum)) return;
    setWidth(maybeNum);
  }, []);

  const widthPx = React.useMemo(
    () => (width === undefined ? undefined : `${width}px`),
    [width]
  );

  const update = React.useCallback(() => {
    if (widthPx === undefined) return;
    dispatch(updateWidthPxAction({ widthPx }));
  }, [widthPx]);

  return { handleChange, width, update };
};

export const useSelectCaputre = () => {
  const widthPx = useSelector(selectWidthPx);
  return { widthPx };
};
