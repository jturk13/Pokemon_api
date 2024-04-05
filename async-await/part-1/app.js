const favNumber = 5;
const baseURL = "http://numbersapi.com";

async function fetchFact(number) {
  const data = await $.getJSON(`${baseURL}/${number}?json`);
  console.log(data);
}

async function fetchFacts(numbers) {
  const data = await Promise.all(
    numbers.map(number => $.getJSON(`${baseURL}/${number}?json`))
  );
  console.log(data);
}

async function displayFacts(number, count) {
  const facts = await Promise.all(
    Array.from({ length: count }, () => $.getJSON(`${baseURL}/${number}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}

fetchFact(favNumber);
fetchFacts([7, 11, 22]);
displayFacts(favNumber, 4);
