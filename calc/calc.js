var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    var text = event.target.innerText;
    console.log(text);
    // 1. 변수 사용
    // var origin = document.querySelectorI("input").value;
    // document.querySelector("input").value = origin + text;

    // 2. 식 하나로
    // document.querySelector('input').value =
    // document.querySelector('input').value + text;

    // 3. 축약 연산자
    // document.querySelector("input").value = document.querySelector("input").value + text;
    document.querySelector("input").value += text;
  });
}
