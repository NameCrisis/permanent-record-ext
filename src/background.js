chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse)
    {
        if (message.request == "GO"){
            saveHtml();
        }
    }
)

function saveHtml() {
    const html = document.documentElement.outerHTML;
    //  the logic to save HTML 
    function saveHtmlToStorage() {
        const html = document.documentElement.outerHTML;
        chrome.storage.local.set({key: html}, function() {
          console.log('HTML is saved in Chrome storage');
        });
      }
  }

// chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//       target: {tabId: tab.id},
//       files: ['content.js']
//     });
//   });
  