const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const unsplashAccessKey = 'qlaAygbW_CWEoBX5e0SowZUGrEc0M6TPzz39ZJf_3p4';

function showRandomQuote() {
    fetch('https://dummyjson.com/quotes/random')
        .then(response => response.json())
        .then(data => {
            quoteText.textContent = `"${data.quote}"`;
            quoteAuthor.textContent = `- ${data.author}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteText.textContent = "\"The greatest glory in living lies not in never falling, but in rising every time we fall.\"";
            quoteAuthor.textContent = "- Nelson Mandela";
        });
}

function setRandomBackground() {
    fetch(`https://api.unsplash.com/photos/random?client_id=${unsplashAccessKey}`)
        .then(response => response.json())
        .then(data => {
            document.body.style.backgroundImage = `url('${data.urls.regular}')`;
        })
        .catch(error => {
            console.error('Error fetching background image:', error);
            document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1974&auto=format&fit=crop')`;
        });
}

// Initial load
showRandomQuote();
setRandomBackground();

// Update every minute
setInterval(() => {
    showRandomQuote();
    setRandomBackground();
}, 60000);
