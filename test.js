// console.log('// This is to Test then() method and async await!! //');

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data[0]);
//   });

async function fetchingData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log('something went wrong!! ' + err);
  }
}

fetchingData();
