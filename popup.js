document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('translation', data => {
      document.getElementById('translation').textContent = data.translation || 'Double-click a word to translate.';
    });
  });
  