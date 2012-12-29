(function () {
    "use strict";
    var page = WinJS.UI.Pages.define("/pages/editNYT.html", {
        ready: function (element, options) {
            // Initialize the ListView
            var articlesList = new WinJS.Binding.List();
            var articlelistElement = document.getElementById("articlelist");
            articlelistElement.addEventListener("iteminvoked", itemInvoked);
            backbutton.addEventListener("click", backButtonClick);

            //         var articlesList = new WinJS.Binding.List();
            var publicMembers = { ItemList: articlesList };
            WinJS.Namespace.define("ExampleData", publicMembers);
            WinJS.UI.processAll().then(getNewsBlitzExampleFeed)


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

            function getNewsBlitzExampleFeed() {
                WinJS.xhr({ url: "http://channel9.msdn.com/coding4fun/articles/RSS" }).then(function (rss) {


                    var items = rss.responseXML.querySelectorAll("item");

                    for (var n = 0; n < items.length; n++) {
                        var article = {};
                        article.title = items[n].querySelector("title").textContent;
                        var thumbs = items[n].querySelectorAll("thumbnail");
                        if (thumbs.length > 1) {
                            article.thumbnail = thumbs[1].attributes.getNamedItem("url").textContent;
                            article.content = items[n].textContent;
                            articlesList.push(article);
                        }
                    }
                });
            }
            WinJS.UI.processAll().then(getNewsBlitzExampleFeed)
        }
    });

})();