(function () {
    "use strict";
    var economistData = [
     { category: "The world this week", url: "http://www.economist.com/rss/the_world_this_week_rss.xml" },
     { category: "Briefings", url: "http://www.economist.com/feeds/print-sections/102/briefings2.xml" },
     { category: "Letters", url: "http://www.economist.com/feeds/print-sections/68/letters.xml" },
     { category: "Leaders", url: "http://www.economist.com/feeds/print-sections/69/leaders.xml" },
     { category: "Business", url: "http://www.economist.com/feeds/print-sections/77/business.xml" },
     { category: "International", url: "http://www.economist.com/feeds/print-sections/74/international.xml" },
     { category: "Finance and economics", url: "http://www.economist.com/feeds/print-sections/79/finance-and-economics.xml" },
     { category: "Asia", url: "http://www.economist.com/feeds/print-sections/73/asia.xml" },
     { category: "Europe", url: "http://www.economist.com/feeds/print-sections/75/europe.xml" },
     { category: "Middle East and Africa", url: "http://www.economist.com/feeds/print-sections/99/middle-east-africa.xml" },
     { category: "United States", url: "http://www.economist.com/feeds/print-sections/71/united-states.xml" },
     { category: "Indicators", url: "http://www.economist.com/feeds/print-sections/84/indicators.xml" },
    ];
    var dataList = new WinJS.Binding.List(economistData);

    // Create a namespace to make the data publicly accessible. 
    var publicMembers =
    {
        itemList: dataList
    };
    WinJS.Namespace.define("DataExample", publicMembers);
})();