const text = document.getElementById("quote");
const author = document.getElementById("author");

const getNewQuote = async () => {
  var url = "https://type.fit/api/quotes";
  const response = await fetch(url);

  const quotes = await response.json();

  const index = Math.floor(Math.random() * quotes.length);

  //Store the quote present at the randomly generated index
  const quote = quotes[index].text;

  //Store the author of the respective quote
  const auth = quotes[index].author;

  if (auth == null) {
    author = "Anonymous";
  }

  //function to dynamically display the quote and the author
  text.innerHTML = quote;
  author.innerHTML = "~ " + auth;
};

setInterval(() => {
  getNewQuote();
}, 10000);

