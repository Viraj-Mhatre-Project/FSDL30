// script.js
const apiKey = '391daf09dff1431fa15f315e69662d97';  // Replace with your API key from NewsAPI
const country = 'in';  // Correct country code for India

async function fetchNews() {
  // Get selected category from the dropdown
  const category = document.getElementById('news-category').value;
  
  // Construct the API URL dynamically with category and country
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    
    // Check if the response is OK (status 200)
    if (response.ok) {
      const data = await response.json();
      
      if (data.status === 'ok') {
        const headlines = data.articles;
        const newsContainer = document.getElementById('news-headlines');
        newsContainer.innerHTML = ''; // Clear previous headlines

        if (headlines.length === 0) {
          newsContainer.innerHTML = '<p>No headlines available for this category.</p>';
        } else {
          headlines.forEach(article => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `
              <h3>${article.title}</h3>
              <p>${article.description || 'No description available.'}</p>
              <a href="${article.url}" target="_blank">Read more</a>
            `;
            newsContainer.appendChild(newsItem);
          });
        }
      } else {
        alert('Failed to fetch news: ' + data.message);
      }
    } else {
      alert('Failed to fetch news. Server responded with status ' + response.status);
    }
  } catch (error) {
    console.error('Error fetching news:', error);
    alert('Error fetching news. Please try again later.');
  }
}

// Fetch news when the page loads and when the user changes the category
fetchNews();
