export const convertIsoToDateTime = (isoStr: string) => isoStr.split("T")[0];

export const convertIsoToYearAndMonth = (isoStr: string) =>
  convertIsoToDateTime(isoStr).replace(/-[0-9][0-9]$/, "");
