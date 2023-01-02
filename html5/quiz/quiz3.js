document.querySelector('#btn').addEventListener('click', () => {
    // let a = document.createElement('li');
    // a.textContent ='버튼을 누르면 li 요소가 추가됩니다.';
    // document.querySelector('ul').appendChild(a);

    /* HTML 템플릿 사용 */
    let a = document.createElement('template');
    a.innerHTML = '<li>추가된 목록</li>';
    document.querySelector('ul').appendChild(a.content.firstChild);

    /* insertAdjacentHTML() 사용 */
    // document.querySelector('ul');
    // .insertAdjacentHTML('beforeend','<li>추가된 목록</li>');
});