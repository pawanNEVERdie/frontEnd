const url = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info';

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'e44519d7dcmsh58546a138b3d6abp199d1ejsn70b82094198a',
        'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
    }
};

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
