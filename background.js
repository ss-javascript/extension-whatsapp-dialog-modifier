(() => {
  chrome.browserAction.onClicked.addListener((currentTab) => {
    const currentUrl = currentTab.url;
    const isWhatsAppWeb = currentUrl.includes('web.whatsapp.com');

    if (!isWhatsAppWeb) return;

    chrome.tabs.executeScript(null, { file: 'content_script.js' });
  });
})();
