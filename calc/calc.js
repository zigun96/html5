var buttons = document.querySelectorAll("button");
var input = document.querySelector("input");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    // click event의 target
    var text = event.target.value;
    console.log(text);
    switch (text) {
      case "=": // eval 연산
        input.value = eval(input.value);
        break;
      case "AC": // 텍스트 초기화
        input.value = '';
        break;
      default: // 텍스트 연결
        input.value += text;
    }
  });
}
