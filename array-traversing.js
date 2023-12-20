///insert an element

function search() {
  let pos = document.querySelector(".pos").value;
  let newEl = document.querySelector(".newEl").value;
  let a = [1, 2, 3, 0, 5, 9, 3, 2, 2, 8, 2];
  console.log(a);
  for (let i = a.length - 1; i >= pos; i--) {
    console.log(i);
    if (i >= pos) {
      a[i + 1] = a[i];
      if (i == pos) {
        a[i] = newEl;
      }
    }
  }
  console.log(a);
}
