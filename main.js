$(function() {
  $(".input").keyup(function(event) {
    const inputText = event.target.value;
    if (inputText.length > 20) {
      alert("20字を超えています")
    } else {
      $(".output").text(inputText);
    }
  });

  $(".red").click(function(event) {
    // 子要素から親要素へのイベントの伝播を止める
    event.stopPropagation();
    alert("red");
  })


  $(".blue").click(function(event) {
    // 子要素から親要素へのイベントの伝播を止める
    event.stopPropagation();
    alert("blue");
  })

  $(".yellow").click(function(event) {
    // 子要素から親要素へのイベントの伝播を止める
    event.stopPropagation();
    alert("yellow");
  })
});