// 如需空白範本的簡介，請參閱下列文件:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

   var myData = new WinJS.Binding.List([
//        { title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/60Banana.png", style: "color:#000;" },
//        { title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/60Lemon.png", style: "width:100%;height:10px;background:#fff" },

        { title: "Arts", url: "http://www.nytimes.com/services/xml/rss/nyt/Arts.xml"},
        { title: "Automobiles", url: "http://www.nytimes.com/services/xml/rss/nyt/Automobiles.xml"},
        { title: "Books", url: "http://www.nytimes.com/services/xml/rss/nyt/Books.xml"},
        { title: "Business", url: "http://www.nytimes.com/services/xml/rss/nyt/Business.xml"},
        { title: "Campaign 2004", url: "http://www.nytimes.com/services/xml/rss/nyt/Campaigns.xml"},
        { title: "Circuits", url: "http://www.nytimes.com/services/xml/rss/nyt/Circuits.xml"},
        { title: "Editorials/Op-Ed", url: "http://www.nytimes.com/services/xml/rss/nyt/Opinion.xml"},
        { title: "Fashion & Style", url: "http://www.nytimes.com/services/xml/rss/nyt/FashionandStyle.xml"},
        { title: "Health", url: "http://www.nytimes.com/services/xml/rss/nyt/Health.xml"},
        { title: "International", url: "http://www.nytimes.com/services/xml/rss/nyt/International.xml"},
        { title: "Magazine", url: "http://www.nytimes.com/services/xml/rss/nyt/Magazine.xml"},
        { title: "Media & Advertising", url: "http://www.nytimes.com/services/xml/rss/nyt/MediaandAdvertising.xml"},
        { title: "Most E-Mailed Articles", url: "http://www.nytimes.com/services/xml/rss/nyt/pop_top.xml"},
        { title: "Movies", url: "http://www.nytimes.com/services/xml/rss/nyt/Movies.xml"},
        { title: "Multimedia", url: "http://www.nytimes.com/services/xml/rss/nyt/Multimedia.xml"},
        { title: "National", url: "http://www.nytimes.com/services/xml/rss/nyt/National.xml"},
        { title: "New York Region", url: "http://www.nytimes.com/services/xml/rss/nyt/NYRegion.xml"},
        { title: "NYTimes.com Home Page", url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"},
        { title: "Real Estate", url: "http://www.nytimes.com/services/xml/rss/nyt/RealEstate.xml"},
        { title: "Science", url: "http://www.nytimes.com/services/xml/rss/nyt/Science.xml"},
        { title: "Sports", url: "http://www.nytimes.com/services/xml/rss/nyt/Sports.xml"},
        { title: "Technology", url: "http://www.nytimes.com/services/xml/rss/nyt/Technology.xml"},
        { title: "Theater", url: "http://www.nytimes.com/services/xml/rss/nyt/Theater.xml"},
        { title: "Times on the Trail", url: "http://www.nytimes.com/services/xml/rss/nyt/Trail.xml"},
        { title: "Travel", url: "http://www.nytimes.com/services/xml/rss/nyt/Travel.xml"},
        { title: "Washington", url: "http://www.nytimes.com/services/xml/rss/nyt/Washington.xml"},
        { title: "Week in Review", url: "http://www.nytimes.com/services/xml/rss/nyt/WeekinReview.xml"},
    ]);

    myData.push('{"title":"hihi2","text":"yaya"}');
    //var show = JSON.parse(myData._keyMap[1].data)
    //console.log(show.yoyo);



    WinJS.Binding.optimizeBindingReferences = true;

    var sampleTitle = "New_Blitz";

    var scenarios = [
        { url: "/html/index.html", title: "index" },
    ];


    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: 這個應用程式剛啟動。請在這裡初始化
                // 您的應用程式。
                args.setPromise(WinJS.UI.processAll().then(function () {
                    // Navigate to either the first scenario or to the last running scenario
                    // before suspension or termination.
                    var url = WinJS.Application.sessionState.lastUrl || scenarios[0].url;
                    return WinJS.Navigation.navigate(url);
                }));
            } else {
                // TODO: 這個應用程式已經從擱置重新啟用。
                // 請在這裡還原應用程式狀態。
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };


    WinJS.Navigation.addEventListener("navigated", function (eventObject) {
        var url = eventObject.detail.location;
        var host = document.getElementById("contentHost");
        // Call unload method on current scenario, if there is one
        host.winControl && host.winControl.unload && host.winControl.unload();
        WinJS.Utilities.empty(host);
        eventObject.detail.setPromise(WinJS.UI.Pages.render(url, host, eventObject.detail.state).then(function () {
            WinJS.Application.sessionState.lastUrl = url;
        }));
    });
    app.oncheckpoint = function (args) {
        // TODO: 這個應用程式即將暫停。請在這裡儲存任何
        // 需要在擱置間保存的狀態。您可以使用
        // WinJS.Application.sessionState 物件，這個物件會自動
        // 在擱置間儲存並還原。如果您需要在
        // 應用程式暫停之前完成非同步作業，請呼叫
        // args.setPromise()。
    };
    WinJS.Namespace.define("New_Blitz", {
        sampleTitle: sampleTitle,
        scenarios: scenarios
    });
    app.start();




})();
