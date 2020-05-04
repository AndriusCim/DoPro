export const sumNumbers = (x: number[]) => {
  return x.map(item => item).reduce((prev, curr) => prev + curr, 0);
};

export const roundNumbers = (x: number) => {
  return Math.abs(x) >= 1.0e9
    ? (Math.abs(x) / 1.0e9).toFixed(3) + "B"
    : Math.abs(x) >= 1.0e6
    ? (Math.abs(x) / 1.0e6).toFixed(1) + "M"
    : Math.abs(x) >= 1.0e3
    ? (Math.abs(x) / 1.0e3).toFixed() + "K"
    : Math.abs(x);
};
