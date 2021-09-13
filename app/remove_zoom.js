chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query({},function(tabs){
        for(var i in tabs){
            if(tabs[i].url.indexOf('.zoom') !== -1 || tabs[i].url.indexOf('zoom.') !== -1){
                chrome.tabs.remove(tabs[i].id);
            }
        }
    });
});
