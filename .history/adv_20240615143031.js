
async function fetchQuote() {
    try {
        const response = await fetch('https://dummyjson.com/quotes?limit=3&skip=10')
       
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        const quotesContainer = document.getElementById("quotes-container");
data.quotes.for
    } catch (error) {
        alert('Failed to fetch quote. Please try again later.');
    }
}
fetchQuote();  // Call fetchQuote function when the script runs