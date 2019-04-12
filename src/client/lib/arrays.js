// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
export const shuffle = (arr) => {
  const a = arr.slice(0);
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }

  return a;
};