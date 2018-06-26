//Add rules for declarativeContent
chrome.runtime.onInstalled.addListener(function() {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					new chrome.declarativeContent.PageStateMatcher({
						pageUrl: {hostContains: 'hulu'}
					})
				],
				actions: [ new chrome.declarativeContent.ShowPageAction()]
			}
		]);
	});
});

chrome.pageAction.onClicked.addListener(function(tab){
	//Get current url
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
		var urlText = tabs[0].url.split("/")[3];
		switch(urlText){
			//If you are watching something
			case "watch":
				alert("You are watching a show");
				break;
			//If you are on the TV home page
			case "tv":
				alert("On the tv home page");
				break;
			//If you are on the Movies home page
			case "movies":
				alert("On the movies home page");
				break;
			//If you are on the Originals home page
			case "originals":
				alert("On the originals home page");
				break;
			//If you are on the Kids home page
			case "kids":
				alert("On the kids home page");
				break;
			//If you are on the Hulu home page
			case "":
				alert("On the Hulu home page");
				break;
			//Otherwise, you should be on a show page
			default:
				alert("On the " + urlText + " homepage");
		}
		
	});
});