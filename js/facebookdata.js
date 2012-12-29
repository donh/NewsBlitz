/*var facebookData = new WinJS.Binding.List([
    //{ title: "Banana Blast", src: "http://www.yahoo.com.tw", text: "Low-fat frozen yogurt", picture: "/images/60Banana.png", style: "color:#000;" },
    { title: "Lavish Lemon Ice", src: "http://www.yahoo.com.tw", text: "Sorbet", picture: "/images/60Lemon.png", style: "width:100%;height:10px;background:#fff" }
]);*/
var facebookData = new WinJS.Binding.List([
   { "title": "hihi2", "text": "yaya" }
]);
// ----------------------------------------------------------------------------------
var facebookClosedfriend = new WinJS.Binding.List([
]);


function showclosedfrienddata() {
    var localSettings = Windows.Storage.ApplicationData.current.localSettings;
    var myclosedfriendsLS_id = localSettings.values['myclosedfriendslocalstorage_id'];
    var myclosedfriendsLS_name = localSettings.values['myclosedfriendslocalstorage_name'];
    var showmyclosedfriends_name = JSON.parse(myclosedfriendsLS_name);
    var showmyclosedfriends_id = JSON.parse(myclosedfriendsLS_id);
    for (var key in showmyclosedfriends_name) {
        var name = showmyclosedfriends_name[key];
        var id = showmyclosedfriends_id[key];
        facebookClosedfriend.push({ "name": name, "id": id });
    };
    console.log(facebookClosedfriend);
    //console.log('br');
}

// ----------------------------------------------------------------------------------
var facebookallfriend = new WinJS.Binding.List([
]);
/*function showallfrienddata() {
    var localSettings = Windows.Storage.ApplicationData.current.localSettings;
    var myallfriendsLS_id = localSettings.values['myallfriendslocalstorage_id'];
    var myallfriendsLS_name = localSettings.values['myallfriendslocalstorage_name'];
    var showmyallfriends_name = JSON.parse(myallfriendsLS_name);
    var showmyallfriends_id = JSON.parse(myallfriendsLS_id);
    for (var key in showmyallfriends_name) {
        var name = showmyallfriends_name[key];
        var id = showmyallfriends_id[key];
        facebookallfriend.push({ "name": name, "id": id });
    };
    console.log('facebookallfriend:'+facebookallfriend);
    //console.log('br');
}*/
//---------------------------------------------------------------------------------

var showmylike = new WinJS.Binding.List([
]);
function showlikesfavoritedata() {
    var localSettings = Windows.Storage.ApplicationData.current.localSettings;
    var mylikesLS_category = localSettings.values['mylikes_catogory']
    console.log();
    var showmylikes_category = JSON.parse(mylikesLS_category);
    console.log(showmylikes_category[0]);
    console.log('br');

}