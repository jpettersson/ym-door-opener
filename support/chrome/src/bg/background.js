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
  chrome.browserAction.setIcon({path: "/icons/icon_19_active.png"});
  $.ajax({
    type: "POST",
    url: "http://172.16.1.65:9292/open",
    data: {},
    complete: function() {
      setTimeout(function(){
        chrome.browserAction.setIcon({path: "/icons/icon_19.png"});
      }, 3000);
    },
  });
});