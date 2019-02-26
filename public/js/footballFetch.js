// $(document).ready(function () {
//     $.getJSON('user.json', function (data) {
//         console.log(data.users[0]);
//         console.log("spawn: " + data.users[0].logged);
//         $.each(data.users, function (i, user) {
//             if (user.logged == "true" && user.preferences[0].check == "checked") {
//                 user_index = i;
//                 $.each(user.playbooks, function (j, playbook) {
//                     if (playbook.selected == "true") {
//                         playbook_index = j;
//                         $.each(playbook.plays, function (k, play) {
//                             if (play.selected == "true") {
//                                 play_index = k;
//                                 $.each(play.positions, function (l, position) {
//                                     $("#field").append('<div class="player" id="player' + l + '" onclick="dragElement(this)" ontouchstart="dragElementTouch(this)" style="position: absolute;z-index: 9; top: ' + position.top + '; left: ' + position.left + '"><img src="img/circle.png" style="width:25px; height:25px; background: ' + position.color + '; border-radius:12.5px"></div>');
//                                     dragElement(document.getElementById("player" + l));
//                                     dragElementTouch(document.getElementById("player" + l));
//                                 });
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }).error(function () {
//         console.log('error');
//     });
// });