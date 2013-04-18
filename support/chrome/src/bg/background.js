// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

chrome.browserAction.onClicked.addListener(function(){

  url = localStorage.getItem('store.settings.url')
  
  if(url.length == 2) {
    url = "http://172.16.1.65:9292"
  }else{
    url = url.replace(/"/g,'');
  }

  $.ajax({
    type: "POST",
    url: url,
    data: {},
  });
});