(function () {
    "use strict";
   
    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            //WinJS.Navigation.navigate('/pages/showallFBfr.html');
            WinJS.Utilities.query('#logout').listen('click', logoutClicked, false);

            loadData();
        }
    });
    var localSettings = Windows.Storage.ApplicationData.current.localSettings;
    function logoutClicked(e) {
        e.preventDefault();

        localStorage.removeItem('fb_access_token');
        FB.setAccessToken(null);

        WinJS.Navigation.navigate('/pages/login/login.html');
    }

    function loadData() {
        FB.api('me', { fields: 'id,name,picture' }, function (res) {
            if(!res || res.error) {
                console.log(!res ? 'error occurred' : res.error);
                return;
            }

            //$('#hi').html('Hi ' + res.name + '!');

            //$('#picture').attr('src', res.picture.data.url);
            // if the user does not have their picture set to public, this will not work below.
            // $('#picture').attr('src', 'http://graph.facebook.com/' + res.id + '/picture');
        });
        FB.api('me/likes', { fields: 'id,name,category' }, function (getmylikes) {
            if (!getmylikes || getmylikes.error) {
                console.log(!getmylikes ? 'error occurred' : getmylikes.error);
                return;
            }
            console.log(getmylikes)
          //  console.log('br');
        });

        FB.api('me/friendlists', { fields: 'id,name,list_type' }, function (getmyfriendslist) {
            if (!getmyfriendslist || getmyfriendslist.error) {
                console.log(!getmyfriendslist ? 'error occurred' : getmyfriendslist.error);
                return;
            }
            console.log(getmyfriendslist)
            var closefriend_id = getmyfriendslist.data[0].id;
            getfbclosedfriend(closefriend_id);
           
            console.log(getmyfriendslist.data[0].id)
           // console.log('br');
        });
        function getfbclosedfriend(id) {
            FB.api( id+'/members', { fields: 'id,name' }, function (getmyclosedfriends) {
                if (!getmyclosedfriends || getmyclosedfriends.error) {
                    console.log(!getmyclosedfriends ? 'error occurred' : getmyclosedfriends.error);
                    return;
                }
                console.log('getmyclosedfriends:' + getmyclosedfriends)
                //console.log(facebookData);

                var valueofmyclosedfriends = {};
                var myclosedfriends_id_array = new Array();
                var myclosedfriends_name_array = new Array();
                for (var listkey in getmyclosedfriends.data) {
                    myclosedfriends_id_array[listkey] = getmyclosedfriends.data[listkey].id;
                    myclosedfriends_name_array[listkey] = getmyclosedfriends.data[listkey].name;
                }
                console.log(myclosedfriends_id_array);
                console.log(myclosedfriends_name_array);
                console.log('br');
            });
        }
        /*FB.api('me', { fields: 'favorite_teams' }, function (respteam) {
            if (!respteam || respteam.error) {
                console.log(!respteam ? 'error occurred' : respteam.error);
                return;
            }
            console.log('show' + respteam.favorite_teams[0].id);
            var getfavoriteteams = {};
            var myarray = new Array();
            for (var key in respteam.favorite_teams) {
                var aaa = 'bbb' + key;
                console.log(respteam.favorite_teams[key].id);
                // var yes = key.toString();
                myarray[key] = respteam.favorite_teams[key].id;
                //console.log('YES' + yes);
                //getfavoriteteams.yes = respteam.favorite_teams[key].id;
                //console.log('yopy' + getfavoriteteams);
                //localSettings.values['zzz'] = '{"' + key + '":"' + respteam.favorite_teams[key].id + '"}';
            }
            console.log(myarray);
            localSettings.values['myteam'] = JSON.stringify(myarray);
            console.log(localSettings.values['myteam']);
            var myteamjson = localSettings.values['myteam'];
            var parsemyteam = JSON.parse(myteamjson);
            console.log(parsemyteam[1])
            console.log(NBAData);
            console.log('break');
            //var likedata = respteam.data[0].category;
            //$('#fr1').html('Hi ' + respteam.data[0].category + '!');
            //searchlikedata(likedata);
            // $('#picture').attr('src', res.picture.data.url);
            // if the user does not have their picture set to public, this will not work below.
            // $('#picture').attr('src', 'http://graph.facebook.com/' + res.id + '/picture');
        });*/
        FB.api('me/friends', { fields: 'id,name' }, function (getmyallfriends) {
            if (!getmyallfriends || getmyallfriends.error) {
                console.log(!getmyallfriends ? 'error occurred' : getmyallfriends.error);
                return;
            }
            console.log(getmyallfriends);
            //localStorage.value['facebookuserfriends'] = getmyallfriends
            //console.log(localStorage.value['facebookuserfriends']);
            //console.log('friends' + getmyallfriends.data[0].id);

            /*  for (var key in getmyallfriends.data) {
                var friend_fbid = getmyallfriends.data[key];
                myfacebookfriend.push({ id: friend_fbid.id, name: friend_fbid.name });

            }*/
           // console.log(myfacebookfriend);
           
        });

    }
    
})();
