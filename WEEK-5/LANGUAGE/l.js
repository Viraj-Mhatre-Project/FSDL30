// script.js

async function translateText() {
    const sourceText = document.getElementById('source-text').value;
    const sourceLanguage = document.getElementById('source-language').value;
    const targetLanguage = document.getElementById('target-language').value;
    
    // Check if the input text is empty
    if (!sourceText.trim()) {
      alert("Please enter some text to translate.");
      return;
    }
  
    const apiUrl = 'https://libretranslate.de/translate';
  
    // Prepare the data to send to the API
    const data = {
      q: sourceText,
      source: sourceLanguage,
      target: targetLanguage,
      format: "text"
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
      
      if (result.error) {
        alert("Error: " + result.error);
      } else {
        // Show the translated text in the output textarea
        document.getElementById('translated-text').value = result.translatedText;
      }
    } catch (error) {
      console.error("Error during translation:", error);
      alert("Failed to translate. Please try again.");
    }
  }
  