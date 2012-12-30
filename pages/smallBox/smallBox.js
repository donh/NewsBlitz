(function () {
    "use strict";
    WinJS.Binding.optimizeBindingReferences = true;
    
    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var nav = WinJS.Navigation;
    var localSettings = Windows.Storage.ApplicationData.current.localSettings;

    var feedburnerUrl = "http://www.nytimes.com/services/xml/rss/nyt/Books.xml",
feedUrl = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&output=json&num=999&q=" + encodeURIComponent(feedburnerUrl);
    var Rssreadurlsorce = 'Rssreadurlsorce';
    var sourceall = {};
    sourceall.source = 'CNN';
    sourceall.url = feedburnerUrl;
    localSettings.values[Rssreadurlsorce] = JSON.stringify(sourceall);
    var showLS = localSettings.values[Rssreadurlsorce] = JSON.stringify(sourceall);
    var parseshowLS = JSON.parse(showLS);

    function getNewsBlitzRSS(feedburnerUrl) {
//        var feedburnerUrl = "http://www.nytimes.com/services/xml/rss/nyt/Books.xml",
        var feedUrl = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&output=json&num=999&q=" + encodeURIComponent(feedburnerUrl);

//        console.log(feedUrl);
        WinJS.xhr({ url: feedUrl }).done(function complete(result) {
            // console.log(parseData.title);
            //console.log(storgeData);
            var jsonData = JSON.parse(result.responseText);
            //            console.log(jsonData.responseData.feed.entries[0].content);
            var list = new WinJS.Binding.List(jsonData.responseData.feed.entries);
            //            console.log(list);
            //            console.log(list._keyMap[0].data.content);
            var arr = list._keyMap;

            //            console.log(arr);
            for (var i in arr) {
                console.log(i + ": " + list._keyMap[i].data.content);
            }

            for (var i in list._keyMap) {
                var article = {};
                article.title = list._keyMap[i].data.title;
                //                var thumbs = list[i].querySelectorAll("thumbnail");
                //                if (thumbs.length > 1) {
                //                    article.thumbnail = thumbs[1].attributes.getNamedItem("url").textContent;
                article.thumbnail = list._keyMap[i].data.link;

                var content = list._keyMap[i].data.content;
                var link = list._keyMap[i].data.link;
                var str = "<a href=" + link + ">" + content + "</a>";
                article.content = str;
                //                article.content = list[i].textContent;
                articlesList.push(article);
            }
        });
    }





    WinJS.UI.Pages.define("/pages/smallBox/smallBox.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            backbutton.addEventListener("click", backButtonClick);
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });


    function backButtonClick(e) {
        articlecontent.style.display = "none";
        articlelist.style.display = "";
        WinJS.UI.Animation.enterPage(articlelist);
    }
    
})();