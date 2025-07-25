const quotes = [
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author: "Steve Jobs"
    },
    {
        text: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "Oprah Winfrey"
    },
    {
        text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "James Cameron"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    }
];

const backgroundImages = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1974&auto=format&fit=crop'
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
}

function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const randomImageUrl = backgroundImages[randomIndex];
    document.body.style.backgroundImage = `url('${randomImageUrl}')`;
}

// Initial load
showRandomQuote();
setRandomBackground();

// Update every minute
setInterval(() => {
    showRandomQuote();
    setRandomBackground();
}, 60000);
