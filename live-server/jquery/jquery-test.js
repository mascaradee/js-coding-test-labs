const { log } = console;

function newMessage(topicName) {
  let newP = $("p[data-topic-name]").filter((index, ele) => {
    if ($(ele).attr("data-topic-name") == topicName) {
      // $(ele).attr("style", "background-color: red");
      return true;
    }
  });
  newP.css('background-color', 'red');
}
newMessage("discussion");
console.log($("body").html());

function setup() {
  $("button").click(function (event) {
    event.target.closest("div").remove();
  });
}

function changeStyle() {
  $("#tgt").css("color", "red");

  var dfd = $.Deferred();
  setTimeout(function () {
    // dfd.resolve();
  }, 100);

  window.dfd = dfd;
  return dfd;
}

function fn() {
  $.when(changeStyle()).then(function () {
    alert("색 바뀐 후에 뜨는 경고창");
  });
}
