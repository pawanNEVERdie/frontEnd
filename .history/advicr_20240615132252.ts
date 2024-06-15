const url: string = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info';

const options: RequestInit = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'e44519d7dcmsh58546a138b3d6abp199d1ejsn70b82094198a',
        'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
    }
};

async function fetchQuote() :Promise<>{
    try {
        const response: Response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: { text: string; author: string } = await response.json();

        const quoteElement = document.getElementById("quote");
        const authorElement = document.getElementById("author");

        if (quoteElement && authorElement) {
            quoteElement.innerHTML = data.text;
            authorElement.innerHTML = data.author;
        } else {
            throw new Error('Quote or author element not found');
        }
    } catch (error) {
        console.error('Error fetching or displaying quote:', error);
        alert('Failed to fetch quote. Please try again later.');
    }
}

fetchQuote();
