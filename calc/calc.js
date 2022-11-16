var buttons = document.querySelectorAll("button");
var input = document.querySelector("input");
var operand = undefined; // 값을 대입하지 않았다.
var flag = false; // 연산 버튼 토글

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    // click event의 target
    var text = event.target.innerText;
    console.log(text);
    switch (text) {
      case "/":
        operand = parseInt(input.value);
        flag = true;
        break;
      case "x":
        operand = parseInt(input.value);
        flag = true;
        break;
      case "-":
        operand = parseInt(input.value);
        flag = true;
        break;
      case "+":
        operand = parseInt(input.value);
        flag = true;
        break;
      default:
        // 연산 버튼을 눌렀을 때 수를 새로 쓴다.
        if (flag == true){
          input.value = text;
          flag = false;
        }else if(flag == false){
          input.value += text;
        }       
    }
    // 1. 변수 사용
    // var origin = document.querySelectorI("input").value;
    // document.querySelector("input").value = origin + text;

    // 2. 식 하나로
    // document.querySelector('input').value =
    // document.querySelector('input').value + text;

    // 3. 축약 연산자
    // document.querySelector("input").value = document.querySelector("input").value + text;
  });
}
