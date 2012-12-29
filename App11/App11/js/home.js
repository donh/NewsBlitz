(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        ready: function (element, options) {
            WinJS.Utilities.query('#logout').listen('click', logoutClicked, false);
            loadData();
            WinJS.UI.processAll(element);
        }
    });


    var myfacebookfriend = new WinJS.Binding.List();

    function logoutClicked(e) {
        e.preventDefault();
        localStorage.removeItem('fb_access_token');
        FB.setAccessToken(null);
        WinJS.Navigation.navigate('/pages/login/login.html');
    }

    function loadData() {
        //var yoyo = 'http://www.facebook.com'; window.location.href = yoyo;
        FB.api('me', { fields: 'id,name,picture' }, function (res) {
            if (!res || res.error) {
                console.log(!res ? 'error occurred' : res.error);
                return;
            }
            // $('#hi').html('Hi ' + res.name + '!');
            // $('#picture').attr('src', res.picture.data.url);
            // if the user does not have their picture set to public, this will not work below.
            // $('#picture').attr('src', 'http://graph.facebook.com/' + res.id + '/picture');
        });
        FB.api('me/friends', { fields: 'id,name' }, function (getmyallfriends) {
            if (!getmyallfriends || getmyallfriends.error) {
                console.log(!getmyallfriends ? 'error occurred' : getmyallfriends.error);
                return;
            }
            //console.log('friends' + getmyallfriends.data[0].id);

            for (var key in getmyallfriends.data) {
                var friend_fbid = getmyallfriends.data[key];
                myfacebookfriend.push({ id: friend_fbid.id, name: friend_fbid.name });

            }
            console.log(myfacebookfriend);
            console.log('br');
        });

        function searchlikedata(likedata) {
            //var source = 'fjaklfjkladjflkajdfklajdfklajdfklajdfkljakl;fjadffdsasdjfalkdCommunityakldjfl;adjflaf';
            var source = {}
            source.a = 'abc';
            source.b = 'Community';
            console.log('yoyo' + source);
            //console.log('yoyo' + source.b(likedata));
        }
    }

})();