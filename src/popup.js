document.getElementById('saveHtml').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.pageCapture.saveAsMHTML({ tabId: tabs[0].id }, (mhtmlData) => {
      // Use FileReader to read the Blob as text
      const reader = new FileReader();
      reader.onload = function(event) {
        const mhtmlString = event.target.result;
        
        // Now mhtmlString contains the MHTML data as a string
        console.log(mhtmlString); // This will log the MHTML content as a string
        
        // Proceed to create a URL and download the file
        const url = URL.createObjectURL(mhtmlData);
        chrome.downloads.download({
          url: url,
          filename: 'page.mhtml'
        });

        // Revoke the blob URL after the download
        setTimeout(() => URL.revokeObjectURL(url), 100);
      };
      reader.readAsText(mhtmlData); // Start reading the blob as text
    });
  });
});




