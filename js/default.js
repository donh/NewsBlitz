(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var projectTitle = "New_Blitz";

    var scenarios = [
        { url: "/pages/bigBox/bigBox.html", title: "bigBox" },
//        { url: "/pages/login/log.html", title: "index" },
        { url: "/pages/home/home.html", title: "FB login" },
        { url: "/pages/showallFBfr.html", title: "show all FB friend" },
        { url: "/pages/loading.html", title: "loading..." },
        { url: "/pages/editFBfr.html", title: "Edit your FB friend" },
        { url: "/pages/editNYT.html", title: "Edit your NY Time" },
        { url: "/pages/NYTindex.html", title: "view NY Time" }
    ];


    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var nav = WinJS.Navigation;

    app.addEventListener("activated", function (args) {
        initializeFB();
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }


            if (app.sessionState.history) {
                nav.history = app.sessionState.history;
            }
            args.setPromise(WinJS.UI.processAll().then(function () {
                 // Navigate to either the first scenario or to the last running scenario
                 // before suspension or termination.
                 var url = WinJS.Application.sessionState.lastUrl || scenarios[0].url;
//                 return WinJS.Navigation.navigate(url);
                 return nav.navigate(url);
             }));
/*            args.setPromise(WinJS.UI.processAll().then(function () {
                if (nav.location) {
                    nav.history.current.initialPlaceholder = true;
                    return nav.navigate(nav.location, nav.state);
                } else {
                    if (!FB.getAccessToken()) {
                        var url = WinJS.Application.sessionState.lastUrl || scenarios[0].url;
                        //return nav.navigate('/pages/login/login.html');
                        return nav.navigate(url);
                    } else {
                        var url = WinJS.Application.sessionState.lastUrl || scenarios[1].url;
                        //return nav.navigate(Application.navigator.home);
                        return nav.navigate(url);
                    }
                }
            }));
*/
        }
    });


    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. If you need to 
        // complete an asynchronous operation before your application is 
        // suspended, call args.setPromise().
        app.sessionState.history = nav.history;
    };

    app.start();

    function initializeFB() {
        // set global alias
        window.FB = FBWinJS;
        FB.options({
            appId: '472891892763096',
            accessToken: localStorage.getItem('fb_access_token')
        });

    }

})();
