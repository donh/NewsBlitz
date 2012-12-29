(function () {
    "use strict";
    var page = WinJS.UI.Pages.define("/pages/showallFBfr.html", {
        ready: function (element, options) {
            // Initialize the ListView
            WinJS.UI.processAll(element);
        }
    });
    var controlClass = WinJS.Class.define(
        function Control_ctor(element) {
            this.element = element || document.createElement("div");
            this.element.winControl = this;

            this.element.textContent = "Hello, World!"
        });
    WinJS.Namespace.define("Contoso.UI", {
        HelloWorld: controlClass
    });
})();