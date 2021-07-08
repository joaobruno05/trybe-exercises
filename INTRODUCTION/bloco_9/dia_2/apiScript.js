// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerText = data.joke);
};

const showJoke = () => {
  const myPromisse = new Promise ((resolve, reject) => {
    const array = [];
    for (index = 0; index < 10; index += 1) {
      const number = (Math.random() * 50);
      const number2 = Math.pow(number, 2);
      array.push(Math.ceil(number2));
    }
    const sum = array.reduce((acc, cur) => acc + cur);
    if (sum < 8000) {
        resolve();
    } else {
      reject();
    }
  });
  
  myPromisse
    .then(sum => [2, 3, 5, 10].map(number => sum / number))
    .then(newArray => newArray.reduce((acc, cur) => acc + cur).toFixed(2))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

showJoke();

// window.onload = () => fetchJoke();