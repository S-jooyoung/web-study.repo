$(document).ready(() => {
  showArticles();
});

function openClose() {
  let status = $("#post-box").css("display");

  if (status == "block") {
    $("#post-box").hide();
    $("#posting-box-button").text("포스팅박스 열기");
  } else {
    $("#post-box").show();
    $("#posting-box-button").text("포스팅박스 닫기");
  }
}

function postArticle() {
  let url = $("#post-url").val();
  let comment = $("#post-comment").val();

  $.ajax({
    type: "POST",
    url: "http://127.0.0.1:5001/memo",
    data: { url_give: url, comment_give: comment },
    success: (response) => {
      if (response["result"] == "success") {
        alert("포스팅 성공!");
        showArticles();
      }
    },
    error: () => {
      alert("포스팅 실패!");
    },
  });
}

function showArticles() {
  $("#cards-box").html("");
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:5001/memo",
    data: {},
    success: (response) => {
      let articles = response["articles"];
      for (let i = 0; i < articles.length; i++) {
        makeCard(articles[i]["image"], articles[i]["url"], articles[i]["title"], articles[i]["desc"], articles[i]["comment"]);
      }
    },
  });
}

function makeCard(image, url, title, desc, comment) {
  let tempHtml = `<div class="card">
                        <img class="card-img-top" src="${image}" alt="Card image cap">
                        <div class="card-body">
                        <a href="${url}" target="_blank" class="card-title">${title}</a>
                        <p class="card-text">${desc}</p>
                        <p class="card-text comment">${comment}</p>
                        </div>
                    </div>`;
  $("#cards-box").append(tempHtml);
}
