

async function fetchQuote() {
    try {
        const response = await fetch('https://dummyjson.com/quotes?limit=3&skip=10').then(err => error)
       
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        document.getElementById("quote").innerHTML = data.;
        document.getElementById("author").innerHTML = data.author;
    } catch (error) {
        alert('Failed to fetch quote. Please try again later.');
    }
}
fetchQuote();  // Call fetchQuote function when the script runs
