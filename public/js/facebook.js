function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
    if (response.status === 'connected') {
        FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    }
}

function changeUser(response){
	console.log("FACEBOOK");
	console.log(response);
    $(".facebookLogin").hide();
    $("#logo").attr("src", response.picture.data.url);
    $("#Username").attr("value", response.first_name);
    $("#Password").attr("value", response.name);
}
