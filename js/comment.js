// function check() {
//     if (document.commentForm.comment.value == "") {
//         alert("내용을 입력해주세요.");
//     } else {
//         form.submit();
//     }
// }

var ele = document.createElement("div")
ele.className = "comment";

var contentids = 0;

function writeCmt(){

    var cmt = document.getElementById("comment").value;
    console.log(cmt);
    console.log(12312312);
    var commentHtml = "<div class='comment-div content' id='content" + contentids + "'>";
    commentHtml += cmt + "</div><hr>";

    ele.innerHTML = commentHtml;
    document.getElementById("comments").appendChild(ele.cloneNode(true));

    contentids++;

}