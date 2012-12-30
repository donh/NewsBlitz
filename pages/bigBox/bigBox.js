(function () {
    "use strict";

    var dataArray = [
    { source: "CNN", description: "CNN", picture: "images/cnn.gif" },
    { source: "Bloomberg", description: "Bloomberg", picture: "images/bloomberg.gif" },
    { source: "New York Times", description: "New York Times", picture: "images/nyt.gif" },
    { source: "The Economist", description: "The Economist", picture: "images/economist.gif" }
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



/*
    WinJS.Application.onmainwindowactivated = function (e) {
        if (e.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
            WinJS.UI.processAll().then(function () {
                var sourceList = document.getElementById('sourceList').winControl;
                sourceList.dataSource = dataArray;
                sourceList.addEventListener('iteminvoked', SelectItem);
            });
        }
    }
    */
    
    
    WinJS.UI.Pages.define("/pages/bigBox/bigBox.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var sourceList = document.getElementById('basicListView').winControl;
            sourceList.dataSource = dataList;
            sourceList.addEventListener('iteminvoked', SelectItem);
/*
            WinJS.Utilities.query('#login').listen('click', loginClicked, false);
            WinJS.Utilities.query('#NewYorkTimes').listen('click', bigBoxClicked, false);
            WinJS.Utilities.query('#CNN').listen('click', bigBoxClicked, false);
            */
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
    
    function SelectItem(e) {
        var selectedItem = dataList._keyMap[e.detail.itemIndex];
        var selecteSource = document.getElementById('selectedSource');
        selecteSource.innerText = selectedItem.data.source;
        var selecteSourceImg = document.getElementById('selectedSourceImg');
        selecteSourceImg.src = selectedItem.data.picture;
    }




//    app.addEventListener("activated", function (args) {
    dataList.addEventListener("clicked", function (args) {
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