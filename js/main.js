// function idCheck() {
//     if (document.loginForm.userId.value == "") {
//         alert("아이디를 입력해주세요.");
//     } else {
//         console.log('1');
//         form.submit();
//     }
// }

function idCheck() {
    var checkId = document.loginForm.userId.value;

    if (checkId == "") {
        console.log('check');
        alert("아이디를 입력해주세요.");
    } else {
        console.log('check');
        location.href = "main.html";
    }
}





function window_onload() {

    setTimeout('goUrl()', 3000)

}



function goUrl() {

    location.href = "main.html"

}