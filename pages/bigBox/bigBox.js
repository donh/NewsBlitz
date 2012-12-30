(function () {
    "use strict";

    var dataArray = [
    { source: "CNN", description: "CNN", picture: "images/cnn.gif", page: "pages/smallBox/cnn.html" },
    { source: "Bloomberg", description: "Bloomberg", picture: "images/bloomberg.gif", page: "pages/smallBox/bloomberg.html" },
    { source: "New York Times", description: "New York Times", picture: "images/nyt.gif", page: "pages/smallBox/nyt.html" },
    { source: "The Economist", description: "The Economist", picture: "images/economist.gif", page: "pages/smallBox/economist.html" },
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

    
    WinJS.UI.Pages.define("/pages/bigBox/bigBox.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var sourceList = document.getElementById('basicListView').winControl;
            sourceList.dataSource = dataList;
            sourceList.addEventListener('iteminvoked', SelectItem);
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
        var page = selectedItem.data.page;
        console.log(page);
        WinJS.Navigation.navigate(page);
    }
})();