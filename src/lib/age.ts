export const getRangeNumbers = (start: number, end: number) => {
  let list = [] as number[];
  for (let i = start; i <= end; i++) {
    list.push(i);
  }
  return list;
};

// REF: https://stackoverflow.com/a/7091965/8842333
export const calcAge = (_birthday: string | Date) => {
  const today = new Date();
  const birthDate = new Date(_birthday);
  let age = today.getFullYear() - birthDate.getFullYear();

  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};
