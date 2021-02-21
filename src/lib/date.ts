export const convertIsoToDateTime = (isoStr: string | Date) => {
  if (typeof isoStr !== "string") {
    isoStr = isoStr.toISOString();
  }
  return isoStr.split("T")[0];
};

export const convertIsoToYearAndMonth = (isoStr: string | Date) => {
  if (typeof isoStr !== "string") {
    isoStr = isoStr.toISOString();
  }
  return convertIsoToDateTime(isoStr).replace(/-[0-9][0-9]$/, "");
};
