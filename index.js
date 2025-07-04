// // currying

// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3));

// function sum(a) {
//   return (b) => {
//     return a + b;
//   };
// }

// console.log(sum(2)(3));

let d = [1, 2, 3];

fetch("https://google.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  data,
})
  .then((d) => {
    return d.json();
  })
  .catch((e) => {
    console.log(e);
  });

async function fetchingDatqa() {
  const data = await fetch("https://google.com");
  return data;
}

fetchingDatqa();
