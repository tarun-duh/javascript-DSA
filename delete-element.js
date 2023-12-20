function search() {
  let a = [1, 2, 3, 2, 1, 5];
  pos = 2;
  for (let i = pos; i < a.length; i++) {
    console.log(a[i]);
    if (i <= a.length) {
      a[i] = a[i + 1];
    }
  }
  a.length = a.length - 1;
  console.log(a);
}
