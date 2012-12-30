(function () {
    "use strict";
    var nytimesData = [
     { category: "Arts", url: "http://www.nytimes.com/services/xml/rss/nyt/Arts.xml" },
     { category: "Automobiles", url: "http://www.nytimes.com/services/xml/rss/nyt/Automobiles.xml" },
     { category: "Books", url: "http://www.nytimes.com/services/xml/rss/nyt/Books.xml" },
     { category: "Business", url: "http://www.nytimes.com/services/xml/rss/nyt/Business.xml" },
     { category: "Campaign 2004", url: "http://www.nytimes.com/services/xml/rss/nyt/Campaigns.xml" },
     { category: "Circuits", url: "http://www.nytimes.com/services/xml/rss/nyt/Circuits.xml" },
     { category: "Editorials/Op-Ed", url: "http://www.nytimes.com/services/xml/rss/nyt/Opinion.xml" },
     { category: "Fashion & Style", url: "http://www.nytimes.com/services/xml/rss/nyt/FashionandStyle.xml" },
     { category: "Health", url: "http://www.nytimes.com/services/xml/rss/nyt/Health.xml" },
     { category: "International", url: "http://www.nytimes.com/services/xml/rss/nyt/International.xml" },
     { category: "Magazine", url: "http://www.nytimes.com/services/xml/rss/nyt/Magazine.xml" },
     { category: "Media & Advertising", url: "http://www.nytimes.com/services/xml/rss/nyt/MediaandAdvertising.xml" },
     { category: "Most E-Mailed Articles", url: "http://www.nytimes.com/services/xml/rss/nyt/pop_top.xml" },
     { category: "Movies", url: "http://www.nytimes.com/services/xml/rss/nyt/Movies.xml" },
     { category: "Multimedia", url: "http://www.nytimes.com/services/xml/rss/nyt/Multimedia.xml" },
     { category: "National", url: "http://www.nytimes.com/services/xml/rss/nyt/National.xml" },
     { category: "New York Region", url: "http://www.nytimes.com/services/xml/rss/nyt/NYRegion.xml" },
     { category: "NYTimes.com Home Page", url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml" },
     { category: "Real Estate", url: "http://www.nytimes.com/services/xml/rss/nyt/RealEstate.xml" },
     { category: "Science", url: "http://www.nytimes.com/services/xml/rss/nyt/Science.xml" },
     { category: "Sports", url: "http://www.nytimes.com/services/xml/rss/nyt/Sports.xml" },
     { category: "Technology", url: "http://www.nytimes.com/services/xml/rss/nyt/Technology.xml" },
     { category: "Theater", url: "http://www.nytimes.com/services/xml/rss/nyt/Theater.xml" },
     { category: "Times on the Trail", url: "http://www.nytimes.com/services/xml/rss/nyt/Trail.xml" },
     { category: "Travel", url: "http://www.nytimes.com/services/xml/rss/nyt/Travel.xml" },
     { category: "Washington", url: "http://www.nytimes.com/services/xml/rss/nyt/Washington.xml" },
     { category: "Week in Review", url: "http://www.nytimes.com/services/xml/rss/nyt/WeekinReview.xml" },
    ];
    var dataList = new WinJS.Binding.List(nytimesData);

    // Create a namespace to make the data publicly accessible. 
    var publicMembers =
    {
        itemList: dataList
    };
    WinJS.Namespace.define("DataExample", publicMembers);
})();