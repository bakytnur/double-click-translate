# Word Translator

Word Translator is a Chrome extension that detects a double-click on a word and translates it to another language, displaying the translation in a popup.

## Features

- Detects double-click on any word on a webpage.
- Translates the selected word to a target language using Google Translate API.
- Displays the translation in a popup.
- Hides the popup after 10 seconds.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/bakytnur/double-click-translate.git
   cd double-click-translate
2. Open Chrome and navigate to chrome://extensions/.

3. Enable "Developer mode" by clicking the toggle switch in the top right corner.

4. Click the "Load unpacked" button and select the directory where you cloned the repository.

## Usage
1. Navigate to any webpage.
2. Double-click on any word to translate it.
3. The translation will appear in a popup near the selected word.
4. The popup will fade out and disappear after 10 seconds.

## Files
- manifest.json: The manifest file that defines the Chrome extension.
- background.js: The background script that handles translation requests.
- content.js: The content script that handles user interactions and displays the translation popup.
- icons/: Directory containing the extension icons.
- popup.html: Optional HTML file for the extension's popup interface (if needed).

## License
This project is licensed under the MIT License. 

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Acknowledgements
[Google Translate API](https://cloud.google.com/translate/docs/reference/rest)
