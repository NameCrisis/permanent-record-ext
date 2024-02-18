function checkForWords(wordsArray) {
    const bodyText = document.body.innerText || "";
    return wordsArray.some(word => bodyText.includes(word));
}

const specificWords = ['searching', 'something', 'else', 'exist'];
const found = checkForWords(specificWords);

chrome.runtime.sendMessage({found: found});
