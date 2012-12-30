(function () {
    "use strict";
//    var cnnData = new WinJS.Binding.List([
    var cnnData = [
//        { category: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/60Banana.png", style: "color:#000;" },
//        { category: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/60Lemon.png", style: "width:100%;height:10px;background:#fff" },
        { category: "Top Stories", url: "http://rss.cnn.com/rss/edition.rss" },
    	{ category: "World Business", url: "http://rss.cnn.com/rss/edition_business.rss" },
        { category: "Business 360", url: "http://rss.cnn.com/rss/edition_business360.rss" },
        { category: "World", url: "http://rss.cnn.com/rss/edition_world.rss" },
        { category: "Africa", url: "http://rss.cnn.com/rss/edition_africa.rss" },
        { category: "Americas", url: "http://rss.cnn.com/rss/edition_americas.rss" },
        { category: "Asia", url: "http://rss.cnn.com/rss/edition_asia.rss" },
        { category: "Europe", url: "http://rss.cnn.com/rss/edition_europe.rss" },
        { category: "Middle East", url: "http://rss.cnn.com/rss/edition_meast.rss" },
        { category: "U.S.", url: "http://rss.cnn.com/rss/edition_us.rss" },
    ];
//]);

    var dataList = new WinJS.Binding.List(cnnData);

    // Create a namespace to make the data publicly accessible. 
    var publicMembers =
    {
        itemList: dataList
    };
    WinJS.Namespace.define("DataExample", publicMembers);
})();