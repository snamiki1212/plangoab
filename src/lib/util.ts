// REF: https://stackoverflow.com/a/15453499/8842333
export function range(start: number, stop: number, step?: number) {
  var a = [start],
    b = start;
  while (b < stop) {
    a.push((b += step || 1));
  }
  return a;
}

export const isExternalUrl = (url: string) => url.startsWith("http");
