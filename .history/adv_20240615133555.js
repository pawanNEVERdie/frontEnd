

async function fetchQuote() {
    try {
        const response = await fetch('https://dummyjson.com/quotes?limit=3&skip=10')
        .then(res => res.json())
        .then(console.log);;
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        document.getElementById("quote").innerHTML = data.text;
        document.getElementById("author").innerHTML = data.author;
    } fetch('https://dummyjson.com/quotes?limit=3&skip=10')
    .then(res => res.json())
    .then(console.log);
}
fetchQuote();  // Call fetchQuote function when the script runs
