(function () {
    "use strict";
    var bloombergData = [
     { category: "Bloomberg Markets", url: "http://www.bloomberg.com/tvradio/podcast/cat_markets.xml" },
     { category: "Bloomberg News", url: "http://www.bloomberg.com/tvradio/podcast/cat_news.xml" },
     { category: "Bloomberg - The First Word", url: "http://www.bloomberg.com/tvradio/podcast/firstword.xml" },
     { category: "Bloomberg Economics", url: "http://www.bloomberg.com/tvradio/podcast/cat_economics.xml" },
     { category: "Bloomberg - Bloomberg View Stories", url: "http://www.bloomberg.com/feed/bview/" },
    ];
    var dataList = new WinJS.Binding.List(bloombergData);

    // Create a namespace to make the data publicly accessible. 
    var publicMembers =
    {
        itemList: dataList
    };
    WinJS.Namespace.define("DataExample", publicMembers);
})();