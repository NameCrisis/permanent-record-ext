document.getElementById('saveHtml').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.pageCapture.saveAsMHTML({ tabId: tabs[0].id }, (mhtmlData) => {
      const url = URL.createObjectURL(mhtmlData);
      chrome.downloads.download({
        url: url,
        filename: 'page.mhtml'
      });

      // Revoke the blob URL after the download
      setTimeout(() => URL.revokeObjectURL(url), 100);
    });
  });
});



