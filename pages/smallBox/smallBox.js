(function () {
    "use strict";

    var dataArray = [
        { source: "Bloomberg", url: "/pages/bloomberg.html" },
        { source: "CNN", url: "/cnn.html" },
        { source: "New York Times", url: "/nyt.html" },
        { source: "The Economist", url: "/economist.html" },
    ];

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var nav = WinJS.Navigation;
    
    var dataList = new WinJS.Binding.List(dataArray);

    // Create a namespace to make the data publicly
    // accessible. 
    var publicMembers =
        {
            itemList: dataList
        };
    WinJS.Namespace.define("DataExample", publicMembers);

    app.addEventListener("activated", function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {


            if (app.sessionState.history) {
                //                nav.history = app.sessionState.history;
            }
            /* args.setPromise(WinJS.UI.processAll().then(function () {
                 // Navigate to either the first scenario or to the last running scenario
                 // before suspension or termination.
                 var url = WinJS.Application.sessionState.lastUrl || scenarios[0].url;
                 return WinJS.Navigation.navigate(url);
             }));*/
            console.log("hihi");
            args.setPromise(WinJS.UI.processAll().then(function () {
                var url = WinJS.Application.sessionState.lastUrl || scenarios[0].url;
                return nav.navigate(url);
            }));
        }
    });
})();