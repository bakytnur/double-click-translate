chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'translate') {
      translateWord(message.text).then(translation => {
        sendResponse({ response: translation });
        chrome.storage.local.set({ translation });
      });
    }
    return true;
  });
  
  async function translateWord(word) {
    const apiKey = 'INSERT_YOUR_KEY_HERE';
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}&q=${word}&target=kk`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data.translations[0].translatedText;
  }
  