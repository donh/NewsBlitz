/*var facebookData = new WinJS.Binding.List([
    //{ title: "Banana Blast", src: "http://www.yahoo.com.tw", text: "Low-fat frozen yogurt", picture: "/images/60Banana.png", style: "color:#000;" },
    { title: "Lavish Lemon Ice", src: "http://www.yahoo.com.tw", text: "Sorbet", picture: "/images/60Lemon.png", style: "width:100%;height:10px;background:#fff" }
]);*/
var facebookData = new WinJS.Binding.List([
   { "title": "hihi2", "text": "yaya" }
]);

var facebookClosedfriend = new WinJS.Binding.List([
]);


function showclosedfrienddata() {
    var localSettings = Windows.Storage.ApplicationData.current.localSettings;
    var myclosedfriendsLS_id = localSettings.values['myclosedfriendslocalstorage_id'];
    var myclosedfriendsLS_name = localSettings.values['myclosedfriendslocalstorage_name'];
    var showmyclosedfriends_name = JSON.parse(myclosedfriendsLS_name);
    var showmyclosedfriends_id = JSON.parse(myclosedfriendsLS_id);
    for (var key in showmyclosedfriends_name){
        var name  = showmyclosedfriends_name[key];
        var id = showmyclosedfriends_id[key];
        facebookClosedfriend.push({ "name": name, "id": id });
    }
    console.log(facebookClosedfriend);
    //console.log('br');
}
