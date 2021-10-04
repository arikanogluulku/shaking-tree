export function randomNum(min, max) {
  // drop a different number of apples each  and different time.
  return Math.floor(Math.random() * (max - min)) + min;
}
export function randomID(count, arrayLength) {
  //uniqueness of the id info of the apples that will fail
  let arr = [];
  do {
    let num = Math.floor(Math.random() * arrayLength);
    arr.push(num);
    arr = arr.filter((item, index) => {
      return arr.indexOf(item) === index;
    });
  } while (arr.length < count);

  return arr;
}
