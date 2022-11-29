setInterval(function() {
  let date = new Date(); // 현재 날짜와 시간
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2,'0');
    const seconds = date.getSeconds().toString().padStart(2,'0');
  // 현재시간을 clock인 요소에 출력
  // document.getElementById('clock') --> 으로도 가져올 수 있음
  document.querySelector('#clock').innerText = `${hours}:${minutes}:${seconds}`;
}, 1000);
