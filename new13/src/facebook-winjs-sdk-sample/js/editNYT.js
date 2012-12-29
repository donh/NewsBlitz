(function () {
    "use strict";
    var page = WinJS.UI.Pages.define("/pages/editNYT.html", {
        ready: function (element, options) {
            // Initialize the ListView
            WinJS.UI.processAll(element);
        }
    });
    var showuserNYTdata = new WinJS.Binding.List([
     { title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/60Banana.png", style: "color:#000;" },
     { title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/60Lemon.png", style: "width:100%;height:10px;background:#fff" },

    ]);
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