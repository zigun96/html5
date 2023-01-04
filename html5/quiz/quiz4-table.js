const url =
  'http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99';
document.querySelector('#updateButton').onclick = () => {
  fetch(url) 
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const row = data.RealtimeCityAir.row;
      let tb = document.querySelector('#data');
      // tb.innerHTML = '';
      arr = tb.querySelectorAll('tr');
      for(let i = 1; i < arr.length; i++ ) {
        tb.removeChild(arr[i]);
      }
      
      row
        .map((city) => `<tr><td>${city.MSRSTE_NM}</td><td>${city.PM25}</td><td>${city.PM10}</td><td>${(city.IDEX_NM)? city.IDEX_NM : "산출불가"}</td></tr>`)
        .forEach((item) => tb.insertAdjacentHTML('beforeend', item));
    });
};
