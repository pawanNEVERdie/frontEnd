const url = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info';


async function fetchQuote() {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        document.getElementById("quote").textContent = data.text;
        document.getElementById("author").textContent = data.author;
    } catch (error) {
        console.error('Error fetching or displaying quote:', error);
        alert('Failed to fetch quote. Please try again later.');
    }
}
fetchQuote();  // Call fetchQuote function when the script runs
