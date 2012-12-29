// 如需空白範本的簡介，請參閱下列文件:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var projectTitle = "NewsBlitz";

    var scenarios = [
        { url: "/pages/login/login.html", title: "index" },
        { url: "/pages/home/home.html", title: "FB login" },
        { url: "/pages/showallFBfr.html", title: "show all FB friend" },
        { url: "/pages/loading.html", title: "loading..." },
        { url: "/pages/editFBfr.html", title: "Edit your FB friend" },
        { url: "/pages/editNYT.html", title: "Edit your NY Time" },
        { url: "/pages/NYTindex.html", title: "view NY Time" }
    ];


    //    var app = WinJS.Application;
    //    var activation = Windows.ApplicationModel.Activation;
    var nav = WinJS.Navigation;


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

    //    var feedburnerUrl = "http://rss.cnn.com/rss/edition_world.rss",
    var feedburnerUrl = "http://www.nytimes.com/services/xml/rss/nyt/Books.xml",
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








    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var articlesList = new WinJS.Binding.List();

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: 這個應用程式剛啟動。請在這裡初始化
                // 您的應用程式。
            } else {
                // TODO: 這個應用程式已經從擱置重新啟用。
                // 請在這裡還原應用程式狀態。
            }
            var articlelistElement = document.getElementById("articlelist");
            articlelistElement.addEventListener("iteminvoked", itemInvoked);
            backbutton.addEventListener("click", backButtonClick);

            //            var articlesList = new WinJS.Binding.List();
            var publicMembers = { ItemList: articlesList };
            WinJS.Namespace.define("ExampleData", publicMembers);

            args.setPromise(WinJS.UI.processAll().then(getNewsBlitzRSS));
        }
    };

    function backButtonClick(e) {
        articlecontent.style.display = "none";
        articlelist.style.display = "";
        WinJS.UI.Animation.enterPage(articlelist);
    }

    function itemInvoked(e) {
        var currentArticle = articlesList.getAt(e.detail.itemIndex);
        WinJS.Utilities.setInnerHTMLUnsafe(articlecontent, currentArticle.content);
        articlelist.style.display = "none";
        articlecontent.style.display = "";
        WinJS.UI.Animation.enterPage(articlecontent);
    }

    function getNewsBlitzRSS() {
        console.log(feedUrl);
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


    app.addEventListener("activated", function (args) {
//        initializeFB();
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }


            if (app.sessionState.history) {
//                nav.history = app.sessionState.history;
            }
            /* args.setPromise(WinJS.UI.processAll().then(function () {
                 // Navigate to either the first scenario or to the last running scenario
                 // before suspension or termination.
                 var url = WinJS.Application.sessionState.lastUrl || scenarios[0].url;
                 return WinJS.Navigation.navigate(url);
             }));*/
            args.setPromise(WinJS.UI.processAll().then(function () {
                if (nav.location) {
                    nav.history.current.initialPlaceholder = true;
                    return nav.navigate(nav.location, nav.state);
                } else {
                    if (!FB.getAccessToken()) {
                        var url = WinJS.Application.sessionState.lastUrl || scenarios[0].url;
                        //return nav.navigate('/pages/login/login.html');
                        return nav.navigate(url);
                    } else {
                        var url = WinJS.Application.sessionState.lastUrl || scenarios[1].url;
                        //return nav.navigate(Application.navigator.home);
                        return nav.navigate(url);
                    }
                }
            }));
        }
    });

    function initializeFB() {
        // set global alias
        window.FB = FBWinJS;
        FB.options({
            appId: '472891892763096',
            accessToken: localStorage.getItem('fb_access_token')
        });

    }

    app.oncheckpoint = function (args) {
        // TODO: 這個應用程式即將暫停。請在這裡儲存任何
        // 需要在擱置間保存的狀態。您可以使用
        // WinJS.Application.sessionState 物件，這個物件會自動
        // 在擱置間儲存並還原。如果您需要在
        // 應用程式暫停之前完成非同步作業，請呼叫
        // args.setPromise()。ㄚ
        app.sessionState.history = nav.history;
    };

    app.start();
})();