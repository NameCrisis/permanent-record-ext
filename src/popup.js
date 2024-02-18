document.getElementById('saveHtml').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: saveHtml
      });
    });
  });
  
  function saveHtml() {
    const html = document.documentElement.outerHTML;
    // Implement the logic to save HTML here
    function saveHtmlToStorage() {
        const html = document.documentElement.outerHTML;
        chrome.storage.local.set({key: html}, function() {
          console.log('HTML is saved in Chrome storage');
        });
      }
  }
  