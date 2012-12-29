
(function () {
    "use strict";
    var page = WinJS.UI.Pages.define("/html/loadingRSS.html", {
        ready: function (element, options) {
            document.getElementById("settingsWriteSetting").addEventListener("click", settingsWriteSetting, false);
            document.getElementById("settingsDeleteSetting").addEventListener("click", settingsDeleteSetting, false);
            settingsDisplayOutput();
            //downloadC9BlogFeed();
        }
    });

    var localSettings = Windows.Storage.ApplicationData.current.localSettings;
    var settingName = "exampleSetting";
    var settingValue = "Hello World";

/*-------------------------------------------------------------------
    fetch RSS , and trans to JSON
--------------------------------------------------------------------*/
    var feedburnerUrl = "http://rss.cnn.com/rss/edition_world.rss",
    feedUrl = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&output=json&num=999&q=" + encodeURIComponent(feedburnerUrl);
    var Rssreadurlsorce = 'Rssreadurlsorce';
    var sourceall = {};
    sourceall.source = 'CNN';
    sourceall.url = feedburnerUrl;
    //console.log(sourceall);
    localSettings.values[Rssreadurlsorce] = JSON.stringify(sourceall);
    var showLS = localSettings.values[Rssreadurlsorce] = JSON.stringify(sourceall);
    //console.log(showLS);
    var parseshowLS = JSON.parse(showLS);
    //console.log(parseshowLS.source);

    WinJS.xhr({ url: feedUrl }).done(function complete(result) {
        // console.log(parseData.title);
        //console.log(storgeData);
        var jsonData = JSON.parse(result.responseText);
        console.log(jsonData.responseData.feed.entries[0].content);
        var list = new WinJS.Binding.List(jsonData.responseData.feed.entries);
        // var list1 = new WinJS.Binding.List(jsonData.responseData.feed.entries[1].content);
        //var yoyo = new WinJS.Binding.List(jsonData.responseData.feed);
        //console.log(list1);
        //var hey = JSON.parse(list[0]);
        lv.winControl.itemDataSource = list.dataSource;
        //console.log(WinJS.Binding.List(jsonData.responseData.feed.entries[0].content));
        //var listyo = list.entries[n].content;
        //console.log('jd' + list.dataSource);
    });

    function toBase64(str) {
        return new Buffer(str).toString('base64');
    }
    function toUTF(str) {
        return new Buffer(str, 'base64').toString()
    }

    function settingsWriteSetting() {
        localSettings.values[settingName] = settingValue;

        settingsDisplayOutput();
    }

    function settingsDeleteSetting() {
        localSettings.values.remove(settingName);

        settingsDisplayOutput();
    }

    function settingsDisplayOutput() {
        var value = localSettings.values[settingName];
       // console.log(value);
        if (!value) {
            document.getElementById("settingsOutput").innerText = "Setting: <empty>";
        } else {
            document.getElementById("settingsOutput").innerText = "Setting: \"" + value + "\"";
        }
    }
})();
