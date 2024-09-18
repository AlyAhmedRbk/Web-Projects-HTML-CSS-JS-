const api_url = "https://quotes-api-self.vercel.app/quote";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const getQuote = async (url) =>{
    const res = await fetch(url);
    const data = await res.json();

    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}

getQuote(api_url);