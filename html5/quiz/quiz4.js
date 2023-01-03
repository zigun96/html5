const url =
  'http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99';
document.querySelector('#updateButton').onclick = () => {
  fetch(url)
    // .then((res) => res.text())
    // .then((text) => {
    //     document.querySelector('#data').textContent = text;
    // }) 
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const row = data.RealtimeCityAir.row;
      // document.querySelector('#data').textContent = JSON.stringify(row);
      let ul = document.querySelector('#data');
      row
        .map((city) => `${city.MSRSTE_NM} : ${city.PM25}`)
        .forEach((item) => ul.insertAdjacentHTML('beforeend', `<li>${item}</li>`));
    });
};
