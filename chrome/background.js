'use strict';

chrome.commands.onCommand.addListener(function(command) {
    if(command === "gotosearch") {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
            if(tabs[0].url.split("/")[2].includes("youtube.com")) {
                chrome.tabs.executeScript(null, {
                    code: "document.getElementsByName('search_query')[0].focus();"
                });
            }
        });
    }
});
