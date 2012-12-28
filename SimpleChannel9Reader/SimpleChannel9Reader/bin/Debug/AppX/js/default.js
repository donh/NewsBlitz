﻿// 如需空白範本的簡介，請參閱下列文件:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";
    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        var articlesList;

        function downloadC9BlogFeed() {
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

        function backButtonClick(e) {
            articlecontent.style.display = "none";
            articlelist.style.display = "";
        }

        function itemInvoked(e) {
            var currentArticle = articlesList.getAt(e.detail.itemIndex);
            WinJS.Utilities.setInnerHTMLUnsafe(articlecontent, currentArticle.content);
            articlelist.style.display = "none";
            articlecontent.style.display = "";
            WinJS.UI.Animation.enterPage(articlecontent);
        }

        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: 這個應用程式剛啟動。請在這裡初始化
                // 您的應用程式。
            } else {
                // TODO: 這個應用程式已經從擱置重新啟用。
                // 請在這裡還原應用程式狀態。
            }
            var articlelistElement = document.getElementById("articlelist");
            articlelistElement.addEventListener("iteminvoked", itemInvoked);
            backbutton.addEventListener("click", backButtonClick);

            articlesList = new WinJS.Binding.List();
            var publicMembers = { ItemList: articlesList };
            WinJS.Namespace.define("C9Data", publicMembers);
            args.setPromise(WinJS.UI.processAll().then(downloadC9BlogFeed));
            WinJS.UI.Animation.enterPage(articlelist);
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: 這個應用程式即將暫停。請在這裡儲存任何
        // 需要在擱置間保存的狀態。您可以使用
        // WinJS.Application.sessionState 物件，這個物件會自動
        // 在擱置間儲存並還原。如果您需要在
        // 應用程式暫停之前完成非同步作業，請呼叫
        // args.setPromise()。
    };

    app.start();
})();
