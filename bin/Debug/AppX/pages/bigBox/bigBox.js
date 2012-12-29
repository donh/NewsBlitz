(function () {
    "use strict";

    var dataArray = [
    { source: "CNN", description: "CNN", picture: "images/cnn.gif" },
    { source: "Bloomberg", description: "Bloomberg", picture: "images/bloomberg.gif" },
    { source: "New York Times", description: "New York Times", picture: "images/nyt.gif" },
    { source: "The Economist", description: "The Economist", picture: "images/economist.gif" }
    ];

    var dataList = new WinJS.Binding.List(dataArray);

    // Create a namespace to make the data publicly
    // accessible. 
    var publicMembers =
        {
            itemList: dataList
        };
    WinJS.Namespace.define("DataExample", publicMembers);

})();